from flask import Blueprint

static_bp = Blueprint('static', __name__, static_folder='../../build')

@static_bp.route('/', defaults={'path': ''})
@static_bp.route('/<string:path>')
def index(path):
    try:
        return static_bp.send_static_file(path)
    except:
        return static_bp.send_static_file("index.html")