
from flask import Flask, request, jsonify, Blueprint
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from api.models.User import User
from api.database.db import db
import bcrypt
import secrets
from datetime import datetime, timedelta
import os
from flask_mail import Message

from extension import mail

token = secrets.token_urlsafe(32)

api = Blueprint('api/user', __name__)

url_front = os.getenv("VITE_FRONTEND_URL")

# Login usuario existente / para Login usamos POST (se envia info)
@api.route('/login', methods=['POST'])
def logIn():
    body = request.get_json()
    # lista de usuarios con el mismo email. Metodo first convierte el array en 1 solo elemento
    user = User.query.filter_by(email=body["email"]).first()
    if user is None:  # validacion cuando el usuario no esta en la DB
        return jsonify({"msg": "Login Incorrecto"}), 404

    # checkpw devuelve true or false y compara los 2 sgtes parametros, Compara lo que ingresa el usuario y la contrasena de la DB
    if bcrypt.checkpw(body["password"].encode(), user.password.encode()):
        # convertir info del usuario que viene de la DB en un diccionario
        user_serialize = user.serialize()
        access_token = create_access_token(identity=str(user_serialize["id"]))
        return jsonify({"msg": "Sesion iniciada correctamente", "access_token": access_token, "user": user_serialize}), 200
    else:
        # en caso que la contrasena sea incorrecta
        return jsonify({"msg": "Login Incorrecto"}), 404


@api.route('/sign-up', methods=['POST'])  # crear usuario nuevo
def newUser():
    body = request.get_json()

    if body is None:
        return jsonify("Campos vacios"), 400
    if 'first_name' not in body:
        return jsonify("Debes especificar un nombre"), 400
    if 'last_name' not in body:
        return jsonify("Debes especificar un apellido"), 400
    if 'email' not in body:
        return jsonify("Debes especificar un email"), 400
    if 'password' not in body:
        return jsonify("Debes especificar una contraseña"), 400

# convierte contrasena en un formato bytes / encriptar contrasena
    bytes = body["password"].encode('utf-8')
    salt = bcrypt.gensalt()
    password_encript = bcrypt.hashpw(bytes, salt)

    signUp = User(
        first_name=body["first_name"],
        last_name=body["last_name"],
        email=body["email"],
        password=password_encript.decode(),
        is_active=True

    )

    db.session.add(signUp)  # metodo para guardar los usuarios en la DB
    # para cerrar los cambios (siempre que agregamos, editamos, eliminamos cosas)
    db.session.commit()

    return jsonify("usuario creado exitosamente"), 200


@api.route('/deleteUser/<int:id>', methods=['DELETE'])  # borrar usuario
def deleteUser(id):
    # busca el primer ID que coincide, metodo mas antiguo
    user = User.query.filter_by(id=id).first()

    if user is None:
        return jsonify("Usuario no existe"), 400

    db.session.delete(user)
    db.session.commit()

    return jsonify("Usuario borrado"), 200


@api.route('/editUser/<int:id>', methods=['PUT'])  # editar usuario
def editUser(id):
    body = request.get_json()
    user = db.session.get(User, id)  # busca usuario e ID

    if user is None:
        return jsonify("Usuario no existe"), 400

    user.first_name = body["first_name"]
    user.last_name = body["last_name"]
    user.email = body["email"]

    db.session.commit()

    return jsonify("Usuario editado con exito"), 200



# endpoint forgot password


@api.route('/forgot-password', methods=["POST"])
def forgot_password():
    body = request.get_json()


    if not body or 'email' not in body:
        return jsonify({"msg": "Email es requerido"}), 400

    user = User.query.filter_by(email=body["email"]).first()

    if not user:
        return jsonify({"msg": "Recibirás un correo con instrucciones"}), 200
    
    token = secrets.token_urlsafe(32)
    user.reset_token = token
    user.reset_token_expiration = datetime.utcnow() + timedelta(minutes=15)

    db.session.commit()

    frontend_url = os.getenv("FRONTEND_URL")

    reset_url_password = f"{frontend_url}/change_password/{token}"

    msg = Message(
        subject="Recuepración de contraseña",
        recipients=[user.email],
       
        html=f"""
        <p>Para restablecer tu contraseña haz click 
        <a href="{reset_url_password}">aquí</a></p>
        """
    )

    try: 
        mail.send(msg)
    except Exception as e:
        print("Error enviando email:", e)
        return jsonify({"msg": "Error enviando email"}), 500
    
    # Para pruebas, en producción no se debería enviar el token en la respuesta, sino por email
    return jsonify({"msg": "Recibiras instrucciones por correo"}), 200


@api.route('/reset-password', methods=["POST"])
def reset_password():

    body = request.get_json()

    if not body or 'token' not in body or 'new_password' not in body:
        return jsonify({"msg": "Token y nueva contraseña son requeridos"}), 400

    user = User.query.filter_by(reset_token=body["token"]).first()

    if not user:
        return jsonify({"msg": "Token inválido"}), 400

    # Verifica si el token ha expirado
    if user.reset_token_expiration < datetime.utcnow():
        return jsonify({"msg": "Token ha expirado"}), 400

    # Hash de la nueva contraseña

    password_bytes = body["new_password"].encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password_bytes, salt)

    user.password = hashed_password.decode()  # Actualiza la contraseña del usuario

    # Limpia el token y su fecha de expiración

    user.reset_token = token
    user.reset_token_expiration = datetime.utcnow() + timedelta(minutes=15)

    db.session.commit()

    return jsonify({"msg": "Contraseña restablecida correctamente"}), 200
