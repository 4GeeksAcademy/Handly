from database import db
from sqlalchemy import String, Float, Boolean
from sqlalchemy.orm import Mapped, mapped_column


class Products(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[str] = mapped_column(String(30), unique=True, nullable=False)
    title: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    description: Mapped[str] = mapped_column(String(255), nullable=True)
    price: Mapped[float] = mapped_column(nullable=False)
    images: Mapped[str] = mapped_column(nullable=False)
    location: Mapped[str] = mapped_column(String(100), nullable=False)
    Shipping: Mapped[bool] = mapped_column(nullable=False)

 




