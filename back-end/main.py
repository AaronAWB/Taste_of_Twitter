import requests
from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from keys import API_BEARER_TOKEN

url = 'https://swapi.dev/api/people/1'

app = Flask(__name__)
api = Api(app)
cors= CORS(app, resources={r'/api/*': {'origins:': '*'}})

@app.route('/api/tweets/search', methods=['GET'])
def search_tweets():
    response = requests.get(url)
    print(response.text)
    return response.text

if __name__ == '__main__':
    app.run(debug=True)