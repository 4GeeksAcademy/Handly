from flask import Blueprint, request, jsonify
from api.database.db import db
from api.models.Products import Products


api = Blueprint('/api/products', __name__)


@api.route('/create', methods=['POST'])  # Crear nuevo producto admin
def new_product():
    body = request.get_json()

    if body is None:
        return jsonify({"error": "Body vacío"}), 400
    if 'title' not in body:
        return jsonify({"error": "Debes especificar un título"}), 400
    if 'images' not in body:
        return jsonify({"error": "Debes incluir al menosuna imagen"}), 400
    if 'price' not in body:
        return jsonify({"error": "Debes especificar un precio"}), 400

    new_product = Products(
        user_id=body["user_id"],  # usar g.user.id mejor??
        description=body["description"],
        location=body["location"],
        shipping=body.get("shipping", False),
        title=body["title"],
        images=body["images"],
        price=body["price"],


    )

    db.session.add(new_product)  
    db.session.commit()

    return jsonify({"message": "Creado correctamente", "id": new_product.id}), 200


@api.route('/get_product/<int:product_id>', methods=['GET'])    # Obtener producto por ID
def get_product(product_id):    
    print("hola")
    product = Products.query.filter_by(id=product_id).first()

    if product is None:
        return jsonify({"error": "Producto no encontrado"}), 404

    return jsonify({
        "id": product.id,
        "user_id": product.user_id,
        "description": product.description,
        "location": product.location,
        "shipping": product.shipping,
        "title": product.title,
        "images": product.images,
        "price": product.price
    }), 200


@api.route('/update_product/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    body = request.get_json()

    product = Products.query.filter_by(
        id=product_id).first()

    if product is None:
        return jsonify({"error": "Producto no encontrado"}), 404

    update_product = Products(
        id=product_id,
        user_id=body["user_id"],
        description=body["description"],
        location=body.get("location", product.location),
        shipping=body.get("shipping", product.shipping),
        title=body.get("title", product.title),
        images=body.get("images", product.images),
        price=body.get("price", product.price)

    )

   
    db.session.commit()

    return jsonify({"message": "Producto actualizado correctamente", "id": update_product.id}), 200





@api.route('/delete_product/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    product = Products.query.filter_by(id=product_id).first()


    db.session.delete(product)
    db.session.commit() 

    return jsonify({"message": "Producto eliminado correctamente"}), 200


@api.route('/products', methods=['GET'])
def get_products():
    products = Products.query.order_by(Products.id.desc()).limit(20).all() # Traer como max 20 productos

    return jsonify([product.serialize() for product in products]), 200