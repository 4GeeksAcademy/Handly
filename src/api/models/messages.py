from api.database.db import db
from sqlalchemy import String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from api.models.user import User
from api.models.chats import Chat
from datetime import datetime

class Messages(db.Model):
    __tablename__ = "messages"
    id: Mapped[int] = mapped_column(primary_key=True)
    chat_id: Mapped[int] = mapped_column(ForeignKey(Chat.id), unique=False, nullable=False)
    message: Mapped[str] = mapped_column(
        String(300), unique=False, nullable=False)
    sender_id: Mapped[int] = mapped_column(ForeignKey(User.id), nullable=False)
    #relacion Chat
    chat: Mapped["Chat"] = relationship(back_populates="messages")
    #relacion Usuarios
    sender: Mapped["User"] = relationship(back_populates="sent_messages")
    
   #created_by: User.user.id ???

def serialize(self):  # lo que devuelve el modelo cuando se utiliza
        return {
            
            "sender_id": self.user.User.name,
    
           
        }