from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from keys import API_BEARER_TOKEN

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

@app.route('/api/tweets/search', methods=['GET'])
def search_tweets():
    return 'Hello World'

if __name__ == '__main__':
    app.run()