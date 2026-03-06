
from flask_socketio import SocketIO, send, emit
from api.models.messages import Messages
from app import app, socketio
from flask import Flask, render_template
import { io } from "socket.io-client"
export const socket = io("https://urban-zebra-5657rgr46gph47wj-3000.app.github.dev/")



# implementacion chat?
# para empezar la conexion dentro de nuestro servidor -app = Flask(__name__)


# evento de mensaje, cuando el servidor recibe un mensaje debe hacer algo


@socketio.on('send_message')
# .on cuando llega el evento, ejecuta la funcion
# necesito agregar los usuarios correctos a la interaccion de esta funcion
def handleMessage(message):
    print("Message: " + message)
    # mostrar los mensajes a todos los participantes de la conversacion
    emit("send_message", message, broadcast=True)
