
from flask_socketio import SocketIO, send, emit
from api.models.messages import Messages
from app import app, socketio
from flask import Flask, render_template


# implementacion chat?
# para empezar la conexion dentro de nuestro servidor -app = Flask(__name__)


@app.route("/chat/", methods=["POST", "GET"])
def index():
    return render_template("chattest.html")

# evento de mensaje, cuando el servidor recibe un mensaje debe hacer algo
@socketio.on('send_message')
# .on cuando llega el evento, ejecuta la funcion
def handleMessage(message): #necesito agregar los usuarios correctos a la interaccion de esta funcion
    print("Message: " + message)
    # mostrar los mensajes a todos los participantes de la conversacion
    emit("send_message", message, broadcast=True) 


