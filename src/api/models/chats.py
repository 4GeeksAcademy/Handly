from api.database.db import db
from sqlalchemy import String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime, timezone

def currentTime(): #funcion para calcular el tiempo UTC de ahora
    return datetime.now(timezone.utc)

class Chat(db.Model): #datetime espera DateTime y el parametro -default, onupdate, nullable-
    __tablename__ = "chat"
    id: Mapped[int] = mapped_column(primary_key=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(), default=currentTime)
    updated_at: Mapped[datetime] = mapped_column(DateTime(), onupdate=currentTime)
    sender_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)
    recipient_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)

    #relacion con tabla messages
    messages: Mapped[list["Messages"]] = relationship("Messages",back_populates="chat")

    #relaciones con tabla User
    sender: Mapped["User"] = relationship("User", foreign_keys=[sender_id], back_populates="sent_chats")
    recipient: Mapped["User"] = relationship("User", foreign_keys=[recipient_id], back_populates="received_chats")
    
    
    def serialize(self):  # lo que devuelve el modelo cuando se utiliza
        return {
            "chat_id": self.id,
            "sender_id": self.sender_id,
            "recipient_id":self.recipient_id,
            
        }
    
from api.models.user import User
from api.models.messages import Messages