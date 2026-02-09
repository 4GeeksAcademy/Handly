from flask import Blueprint, request, jsonify
from database.db import db
from models.Products import Products
api = Blueprint('api/products', __name__)


@api.route('/products', methods=['POST']) #Crear nuevo producto admin
def NewProduct():
    body = request.get_json()

    if body is None:
        return jsonify({"error": "Body vacío"}), 400 
    if 'title' not in body:
        return jsonify({"error": "Debes especificar un título"}), 400
    if 'images' not in body:
        return jsonify({"error": "Debes incluir al menosuna imagen"}), 400
    if 'price' not in body:
        return jsonify ({"error": "Debes especificar un precio"}), 400
    
    
    newProduct = Products(
        user_id = body["user_id"],
        description = body["description"],
        location = body["location"],
        Shipping = body.get("Shipping", False),
        title = body["title"],
        images = body["images"],
        price= body["price"],
        is_active=True

    )

    db.session.add(newProduct) #metodo para guardar los productos en la DB
    db.session.commit() # para cerrar los cambios (siempre que agregamos, editamos, eliminamos cosas)


    return jsonify ({"message": "Creado correctamente", "id": newProduct.id}), 200

