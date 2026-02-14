from flask import Blueprint, request, jsonify
from api.database.db import db
from api.models.Products import Products
from api.models.Category import Category

api = Blueprint('/api/categories', __name__)

# @api.route('/categories', methods=['GET']) # Obtener todas las categorias
# def get_categories():
#         categories = Category.query.all()
#         return jsonify([category.serialize() for category in categories]), 200
           
@api.route('/category/<string:category_name>', methods=['GET']) # Obtener productos por categoria
def get_products_by_category(category_name):
    
    products = Products.query.join(Category).filter(Category.name == category_name).order_by(Products.id.desc()).limit(20).all()

    return jsonify([product.serialize() for product in products]), 200

@api.route('/create_category', methods=['POST']) # Crear categoria
def create_category():
    body = request.get_json()

    if body is None:
        return jsonify({"error": "Campos vacios"}), 400
    if 'name' not in body:
        return jsonify({"error": "Debes especificar un nombre"}), 400
    

    new_category = Category(
        name=body["name"]
    )

    db.session.add(new_category)
    db.session.commit()

    return jsonify({"message": "Categoria creada correctamente", "id": new_category.id}), 201