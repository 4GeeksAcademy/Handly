import json
from flask_socketio import join_room, leave_room, emit
from flask_jwt_extended import decode_token
from api.database.db import db
from api.models.messages import Messages
from api.models.chats import Chat
from datetime import datetime, timezone
from flask import request
from app import socketio

def get_user_from_token(token):
    try:
        decoded = decode_token(token.replace("Bearer ", ""))
        return decoded["sub"]
    except Exception:
        return None


@socketio.on("connect")
def on_connect(auth):
    # Buscar token en auth object o en el header
    token = ""
    if auth and auth.get("token"):
        token = auth.get("token", "")
    else:
        token = request.headers.get("Authorization", "")

    user_id = get_user_from_token(token)

    if not user_id:
        print("Conexion rechazada, token invalido")
        return False

    print(f"Usuario {user_id} conectado")
        # unir a la room personal
    join_room(f"user_{user_id}")
   


@socketio.on("join_chat")
def on_join(data):
    if isinstance(data, str):
        data = json.loads(data)

    token = data.get("token", "")
    user_id = get_user_from_token(token)
    chat_id = data.get("chat_id")

    if not user_id or not chat_id:
        return

    user_id = int(user_id)
    chat_id = int(chat_id)

    chat = Chat.query.get(chat_id)
    if not chat or (chat.sender_id != user_id and chat.recipient_id != user_id):
        emit("error", {"message": "No autorizado"})
        return

    room = f"chat_{chat_id}"
    leave_room(room)  # salir primero para evitar duplicados
    join_room(room)
    print(f"Usuario {user_id} unido al chat {chat_id}")

    
@socketio.on("send_message")
def on_send_message(data):
    if isinstance(data, str):
        data = json.loads(data)

    token = data.get("token", "")
    user_id = get_user_from_token(token)
    chat_id = data.get("chat_id")
    message_text = data.get("message", "").strip()

    if not user_id or not chat_id or not message_text:
        return

    chat = Chat.query.get(chat_id)
    if not chat or (chat.sender_id != int(user_id) and chat.recipient_id != int(user_id)):
        emit("error", {"message": "No autorizado"})
        return

    new_message = Messages(
        chat_id=int(chat_id),
        sender_id=int(user_id),
        message=message_text,
    )
    db.session.add(new_message)
    db.session.commit()

    emit("receive_message", new_message.serialize(), to=f"chat_{chat_id}")
    print(f"Mensaje guardado y emitido en chat {chat_id}")
