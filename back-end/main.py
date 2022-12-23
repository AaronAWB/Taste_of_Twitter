from flask import Flask
from flask_restful import Api, Resource, reqparse
import requests
from flask_cors import CORS, cross_origin
from keys import API_BEARER_TOKEN

url = 'https://swapi.dev/api/'

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

@app.route('/api/tweets/search', methods=['GET'])
@cross_origin(origin='*')
def search_tweets():
    response = requests.get(url)
    return response

if __name__ == '__main__':
    app.run(debug=True)