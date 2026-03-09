from api.database.db import db
from api.models.Products import Products
from sqlalchemy import String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime, timezone


class User(db.Model):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(primary_key=True)
    first_name: Mapped[str] = mapped_column(
        String(20), unique=True, nullable=False)
    last_name: Mapped[str] = mapped_column(
        String(20), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(
        String(120), unique=True, nullable=False)
    address: Mapped[str] = mapped_column(
        String(120), unique=True, nullable=True)
    number: Mapped[str] = mapped_column(
        String(9), unique=True, nullable=True)
    password: Mapped[str] = mapped_column(nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)

    #Recovery password
    reset_token: Mapped[str] = mapped_column(String(100), nullable=True)  #Guarda el token generado para resetear la contraseña
    reset_token_expiration: Mapped[datetime] = mapped_column(DateTime, nullable=True) #Guarda la fecha y hora de expiración del token, para que no sea válido después de cierto tiempo

    
    
    #relacion con tabla Chat
    sent_chats: Mapped[list["Chat"]] = relationship("Chat", foreign_keys="Chat.sender_id", back_populates="sender")  #foreign_keys: para decirle a la db a que usuario especifico nos referimos, esto pasa cuando hay 2 usuarios en la misma tabla
    received_chats: Mapped[list["Chat"]] = relationship("Chat", foreign_keys="Chat.recipient_id",back_populates="recipient")
    #relacion con tabla Messages 
    sent_messages: Mapped[list["Messages"]] = relationship("Messages",back_populates="sender")



    products: Mapped[list["Products"]] = relationship("Products", back_populates="author", cascade="all, delete-orphan")   # relacionar el producto con el user  cascade="all, delete-orphan" hace tambien se borre los productos del usuario

    def serialize(self):  # lo que devuelve el modelo cuando se utiliza
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name":  self.last_name,
            "email": self.email,
            "address": self.address,
            "number": self.number
            # do not serialize the password, its a security breach
        }


from api.models.chats import Chat
from api.models.messages import Messages
