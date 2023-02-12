import requests

from src import create_app

app = create_app()

@app.route('/api/tweets/handle_search/<handle>', methods=['GET'])
def search_tweets_handle(handle):
    response = requests.get(tweetUrl+'from:'+handle, headers=headers, params=search_params).json()
    return response

@app.route('/api/tweets/keyword_search/<keyword>', methods=['GET'])
def search_tweets_keyword(keyword):
    response = requests.get(tweetUrl+keyword, headers=headers, params=search_params).json()
    return response

@app.route('/api/tweets/random/<handle>', methods=['GET'])
def search_tweets_random(handle):
    response = requests.get(tweetUrl+'from:'+handle, headers=headers, params=random_params).json()
    return response

@app.route('/', defaults={'path': ''})
@app.route('/<string:path>')
def index(path):
    try:
        return app.send_static_file(path)
    except:
        return app.send_static_file("index.html")

if __name__ == '__main__':
    app.run(debug=True)
