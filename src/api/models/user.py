from api.database.db import db
from sqlalchemy import String, Boolean, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from api.models.chats import Chat
from api.models.messages import Messages

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
        String(120), unique=True, nullable=False)
    number: Mapped[int] = mapped_column(
        String(9), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)
    is_seller: Mapped[bool] = mapped_column(Boolean(), nullable=False)
    
    #relacion con tabla Chat
    sent_chat: Mapped[list["Chat"]] = relationship(back_populates="sender") 
    received_chats: Mapped[list["Chat"]] = relationship(back_populates="recipient")
    #relacion con tabla Messages 
    sent_messages: Mapped[list["Messages"]] = relationship(back_populates="sender")


    def serialize(self):  # lo que devuelve el modelo cuando se utiliza
        return {
            "id": self.id,
            "sent_chat": self.User.sent_chat,
            # do not serialize the password, its a security breach
        }
