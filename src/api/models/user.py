from api.database.db import db
from sqlalchemy import String, Boolean, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship


class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    first_name: Mapped[str] = mapped_column(
        String(20), unique=True, nullable=False)
    last_name: Mapped[str] = mapped_column(
        String(20), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(
        String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)


    # products: Mapped[list["Products"]] = relationship("Products", back_populates="author")   Creo que tenemos que añadir esto para que se pueda relacionar el producto con el user

    def serialize(self):  # lo que devuelve el modelo cuando se utiliza
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

