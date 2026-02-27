

from flask import Blueprint, request, jsonify
from api.database.db import db
from api.models.User import User
from api.models.chats import Chat
from api.models.messages import Messages

api = Blueprint('api/message', __name__)


@api.route('/message', methods=['GET'])

def getUser():
    user = db.session.get(User, id)
def getChats():

    chat = Chat.query.filter_by(id=Chat.id).first()

    if chat is None:
        return jsonify({"no mensajes": "aun no tienes mensajes"}), 400

    return jsonify({


        
    }), 200