import requests
from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from keys import API_BEARER_TOKEN

url = 'https://api.twitter.com/1.1/search/tweets.json?q=nasa'
headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {API_BEARER_TOKEN}'
}

app = Flask(__name__)
api = Api(app)
cors= CORS(app, resources={r'/api/*': {'origins:': '*'}})

@app.route('/api/tweets/search', methods=['GET'])
def search_tweets():
    response = requests.get(url, headers=headers)
    print(response.json)
    return response.json

if __name__ == '__main__':
    app.run(debug=True)