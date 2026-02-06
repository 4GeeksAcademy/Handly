from database.db import db
from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column


class Decision(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
   


    def serialize(self):
        return {
            "id": self.id,
           
            # do not serialize the password, its a security breach
        }