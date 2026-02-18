from api.database.db import db
from sqlalchemy import String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship



class Messages(db.Model):
    __tablename__ = "messages"
    id: Mapped[int] = mapped_column(primary_key=True)
    chat_id: Mapped[int] = mapped_column(ForeignKey("chat.id"), unique=False, nullable=False)
    message: Mapped[str] = mapped_column(
        String(300), unique=False, nullable=False)
    sender_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)


    #relacion Chat
    chat: Mapped["Chat"] = relationship("Chat",back_populates="messages")
    #relacion Usuarios
    sender: Mapped["User"] = relationship("User",foreign_keys=[sender_id],back_populates="sent_messages")
    
   #created_by: User.user.id ???

    def serialize(self):  # lo que devuelve el modelo cuando se utiliza
        return {
            "message_id": self.id,
            "sender_id": self.sender_id,
            "message": self.message
    
           
        }

from api.models.User import User
from api.models.chats import Chat