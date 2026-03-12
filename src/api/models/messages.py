from api.database.db import db
from sqlalchemy import String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime, timezone

def currentTime(): #funcion para calcular el tiempo UTC de ahora
    return datetime.now(timezone.utc)


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
    created_at: Mapped[datetime] = mapped_column(DateTime(), default=currentTime)
    

    def serialize(self):  # lo que devuelve el modelo cuando se utiliza
       
        return {
            "id": self.id,
            "chat_id": self.chat_id,
            "sender_id": self.sender_id,
            "message": self.message,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }

from api.models.User import User
from api.models.chats import Chat