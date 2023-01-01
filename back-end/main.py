import requests
from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from keys import API_BEARER_TOKEN

url = 'https://api.twitter.com/1.1/search/tweets.json?q=@'

headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_BEARER_TOKEN}'
}

app = Flask(__name__)
api = Api(app)
cors= CORS(app, resources={r'/api/*': {'origins:': '*'}})

@app.route('/api/tweets/search/<handle>', methods=['GET'])
def search_tweets(handle):
    response = requests.get(url+handle, headers=headers).json()
    return response

@app.route('/api/tweets/search/<keyword>', methods=['GET'])
def search_tweets(keyword):
    response = requests.get(url+keyword, headers=headers).json()
    return response

@app.route('/api/tweets/random/<handle>', methods=['GET'])
def search_tweets(handle):
    response = requests.get(url+handle, headers=headers).json()
    return response

# @app.errorhandler(404)
# def not_found():
#     """Page not found."""
#     return make_response(render_template("404.html"), 404)

if __name__ == '__main__':
    app.run(debug=True)