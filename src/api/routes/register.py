from flask import Flask, request, jsonify, Blueprint
api = Blueprint('api/signup', __name__)
from database.db import db
from models.User import User
import bcrypt

@api.route('/sign-up', methods=['POST'])  # crear usuario nuevo 
def newUser():
    body = request.get_json()
    bytes = body["password"].encode('utf-8') #convierte contrasena en un formato bytes / encriptar contrasena
    salt = bcrypt.gensalt()
    password_encript = bcrypt.hashpw(bytes, salt)

    if body is None:
        return jsonify("Campos vacios"), 400 
    if 'first_name' not in body:
        return jsonify ("Debes especificar un nombre"), 400
    if 'last_name' not in body:
        return jsonify ("Debes especificar un apellido"), 400
    if 'email' not in body:
        return jsonify ("Debes especificar un email"), 400
    if 'password' not in body:
        return jsonify ("Debes especificar una contraseña"), 400
    
    signUp = User(
        first_name = body["first_name"],
        last_name = body["last_name"],
        email= body["email"],
        password= password_encript.decode(),
        is_active=True

    )

    db.session.add(signUp) #metodo para guardar los usuarios en la DB
    db.session.commit() # para cerrar los cambios (siempre que agregamos, editamos, eliminamos cosas)


    return jsonify ("todo bien"), 200
