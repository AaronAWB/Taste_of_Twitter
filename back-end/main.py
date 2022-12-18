from flask import Flask
from flask_restful import Api, Resource, reqparse
from keys import API_BEARER_TOKEN

app = Flask(__name__)
api = Api(app)

@app.route('/', methods=['GET'])
def go_home():
    return './front-end/public/index.html'

@app.route('api/tweets/search', methods=['GET'])
def search_tweets():
    return 'Hello World'

@app.route('/')



if __name__ == '__main__':
    app.run(debug=True)