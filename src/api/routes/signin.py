from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import bcrypt
from models.User import User
from database.db import db
from flask import Flask, request, jsonify, Blueprint
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
