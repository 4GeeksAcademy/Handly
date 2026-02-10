from flask import Blueprint, request, jsonify
from database.db import db
from models.Products import Products


api = Blueprint('api/products', __name__)


@api.route('/products', methods=['POST'])  # Crear nuevo producto admin
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

    db.session.add(new_product)  # metodo para guardar los productos en la DB
    # para cerrar los cambios (siempre que agregamos, editamos, eliminamos cosas)
    db.session.commit()

    return jsonify({"message": "Creado correctamente", "id": new_product.id}), 200


@api.route('/products/<int:product_id>', methods=['GET'])
@api.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    body = request.get_json()

    product = Products.query.filter_by(
        id=product_id,
        user_id=body.get("user_id")).first()

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


@api.route('/products/<int:product_id>', methods=['DELETE'])
