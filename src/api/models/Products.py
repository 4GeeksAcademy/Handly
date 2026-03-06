from api.database.db import db
from sqlalchemy import String, Float, Boolean, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship



class Products(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)

    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)
    author = relationship("User", back_populates="products")

    category: Mapped[str] = mapped_column(String(100), nullable=False)

    title: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[str] = mapped_column(String(255), nullable=True)
    price: Mapped[float] = mapped_column(nullable=False)
    images: Mapped[str] = mapped_column(nullable=False)
    location: Mapped[str] = mapped_column(String(100), nullable=False)
    shipping: Mapped[bool] = mapped_column(nullable=False)

    # products = relationship("User", back_populates="products")

    def serialize(self):# lo que devuelve el modelo cuando se utiliza
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "description": self.description,
            "price": self.price,
            "images": self.images,
            "location": self.location,
            "shipping": self.shipping,
            "category": self.category,
            "seller_phone": self.author.number
            }