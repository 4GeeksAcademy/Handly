from flask import Blueprint, request, jsonify
from api.database.db import db
from api.models.Products import Products
from api.models.Category import Category

api = Blueprint('api/categories', __name__)

# @api.route('/categories', methods=['GET']) # Obtener todas las categorias
# def get_categories():
#         categories = Category.query.all()
#         return jsonify([category.serialize() for category in categories]), 200
           
@api.route('/category/<string:category_name>', methods=['GET']) # Obtener productos por categoria
def get_products_by_category(category_name):
    
    products = Products.query.join(Category).filter(Category.name.ilike(f"%{category_name}%")).order_by(Products.id.desc()).limit(20).all() # Obtener los productos de la categoria, ordenados por id descendente y limitados a 20 resultados
    #ilike es para hacer una busqueda insensible a mayusculas y minusculas, el % es para hacer una busqueda parcial, es decir, si el usuario busca "elec" se le mostraran los productos que contengan "elec" en su categoria, como "electronica", "electrodomesticos", etc.
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

    return jsonify({"msg": "Categoria creada correctamente", "id": new_category.id}), 201




