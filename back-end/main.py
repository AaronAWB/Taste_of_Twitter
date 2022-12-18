from flask import Flask
from flask_restful import Api, Resource, reqparse
from keys import API_BEARER_TOKEN

app = Flask(__name__)
api = Api(app)

if __name__ == "__main__":
    app.run(debug=True)