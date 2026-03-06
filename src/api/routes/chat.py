from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from api.database.db import db
from api.models.chats import Chat
from api.models.User import User
from api.models.messages import Messages
from datetime import datetime, timezone


api = Blueprint('chats', __name__)


@api.route("/", methods=["POST"])
@jwt_required()
def create_or_get_chat():
    current_user_id = get_jwt_identity()
    body = request.get_json()
    recipient_id = body.get("recipient_id")

    if not recipient_id:
        return jsonify({"error": "recipient_id es requerido"}), 400

    if current_user_id == recipient_id:
        return jsonify({"error": "No puedes chatear contigo mismo"}), 400

    existing_chat = Chat.query.filter(
        ((Chat.sender_id == current_user_id) & (Chat.recipient_id == recipient_id)) |
        ((Chat.sender_id == recipient_id) & (Chat.recipient_id == current_user_id))
    ).first()

    if existing_chat:
        return jsonify(existing_chat.serialize()), 200

    # Si no existe, crearlo
    new_chat = Chat(sender_id=current_user_id,
                    recipient_id=recipient_id)
    db.session.add(new_chat)
    db.session.commit()

    return jsonify(new_chat.serialize()), 201


@api.route("/", methods=["GET"])
@jwt_required()
def get_my_chats():
    current_user_id = get_jwt_identity()

    chats = Chat.query.filter(
        (Chat.sender_id == current_user_id) | (
            Chat.recipient_id == current_user_id)
    ).all()

    result = []
    for chat in chats:
        other_user_id = chat.recipient_id if chat.sender_id == current_user_id else chat.sender_id
        other_user = User.query.get(other_user_id)

        result.append({
            **chat.serialize(),
            "other_user": other_user.serialize() if other_user else None,
        })

    return jsonify(result), 200


@api.route("/<int:chat_id>/messages", methods=["GET"])
@jwt_required()
def get_messages(chat_id):
    current_user_id = get_jwt_identity()

    chat = Chat.query.get_or_404(chat_id)

    if chat.sender_id != int(current_user_id) and chat.recipient_id != int(current_user_id):
        return jsonify({"error": "No autorizado"}), 403

    messages = (
        Messages.query
        .filter_by(chat_id=chat_id)
        .order_by(Messages.id.asc())
        .all()
    )

    return jsonify([m.serialize() for m in messages]), 200
