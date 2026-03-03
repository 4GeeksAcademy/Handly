"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import socket_config
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.database.db import db
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager
from flask_socketio import SocketIO
from flask_mail import Mail


from flask_cors import CORS


import api.routes.user as api_user

import api.routes.products as api_products

import api.routes.category as api_category


app = Flask(__name__)
mail = Mail()


socketio = SocketIO(app)  # chat
# Permite acceder a las rutas con o sin barra al final (ejemplo: /api/user/login y /api/user/login/ serán tratados como la misma ruta)
app.url_map.strict_slashes = False
# Habilitar CORS para todas las rutas y métodos HTTP
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = os.getenv('EMAIL')
app.config['MAIL_PASSWORD'] = os.getenv('PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL')


# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../dist/')


# database condiguration

db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["JWT_SECRET_KEY"] = os.getenv(
    "JWT_SECRET_KEY")  # trae la info de la clave del .env


MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)
mail.init_app(app)

jwt = JWTManager(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)


# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api_user.api, url_prefix='/api/user')

app.register_blueprint(api_products.api, url_prefix='/api/products')

app.register_blueprint(api_category.api, url_prefix='/api/categories')


# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    # use_reloader=False evita que se ejecute el código dos veces al iniciar el servidor
    app.run(host='0.0.0.0', port=PORT, debug=True, use_reloader=False)

# chat
if __name__ == '__main__':  # condicion, si app es el archivo que estoy ejecutando, se corre el socketio
    socketio.run(app, debug=True)
