
from flask import Flask, request, jsonify, Blueprint
api = Blueprint('api/dashboard', __name__)


@api.route('/dashboard', methods=['GET'])  # Dashboard post login
def dashboard():
    response_body = {
        "msg": "Mostrando dashboard"
    }
    return jsonify(response_body), 200
