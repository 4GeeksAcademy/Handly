from flask import Flask, request, jsonify, Blueprint
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from api.models.user import User
from api.database.db import db
import bcrypt


api = Blueprint('api/signin', __name__)


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
        return jsonify({"msg": "Sign in completo", "access_token": access_token}), 200
    else:
        # en caso que la contrasena sea incorrecta
        return jsonify({"msg": "Login Incorrecto"}), 404


@api.route('/sign-up', methods=['POST'])  # crear usuario nuevo
def newUser():
    body = request.get_json()
    # convierte contrasena en un formato bytes / encriptar contrasena
    bytes = body["password"].encode('utf-8')
    salt = bcrypt.gensalt()
    password_encript = bcrypt.hashpw(bytes, salt)

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

    return jsonify("todo bien"), 200
