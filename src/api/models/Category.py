from api.database.db import db
from api.models.Products import Products
from sqlalchemy import String, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship



class Category(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)   

    name: Mapped[str] = mapped_column(String(50), nullable=False) 

    
    def serialize(self):  
        return {
            "id": self.id,
            "name": self.name
        }