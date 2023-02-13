from flask import Flask
from flask_restful import Api
from flask_cors import CORS

def create_app():
    app = Flask(__name__, static_folder='../build', static_url_path='/')
    Api(app)
    CORS(app, resources={r'/api/*': {'origins:': '*'}}) 

    from src.routes.static import static_bp
    app.register_blueprint(static_bp)

    return app