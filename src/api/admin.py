import os
import inspect
from flask_admin import Admin
from . import models
from .models import db
from flask_admin.contrib.sqla import ModelView
from database.db import db
from models.User import User
from models.Tratamiento import Tratamiento
from models.Sintomas import Sintomas
from models.Pruebas import Pruebas
from models.Pacientes import Pacientes
from models.Hipotesis import Hipotesis
from models.Decision import Decision
from models.Casoclinico import CasoClinico


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    admin = Admin(app, name='4Geeks Admin')

    # Dynamically add all models to the admin interface
    for name, obj in inspect.getmembers(models):
        # Verify that the object is a SQLAlchemy model before adding it to the admin. 
        if inspect.isclass(obj) and issubclass(obj, db.Model):
            admin.add_view(ModelView(obj, db.session))

    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Tratamiento, db.session))
    admin.add_view(ModelView(Sintomas, db.session))
    admin.add_view(ModelView(Pruebas, db.session))
    admin.add_view(ModelView(Pacientes, db.session))
    admin.add_view(ModelView(Hipotesis, db.session))
    admin.add_view(ModelView(Decision, db.session))
    admin.add_view(ModelView(CasoClinico, db.session))
