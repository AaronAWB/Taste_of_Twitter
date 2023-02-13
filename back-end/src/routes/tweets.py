from src.lib.twitter_api import twitter_api

@app.route('/api/tweets/handle_search/<handle>', methods=['GET'])
def search_tweets_handle(handle):
    return twitter_api.search_tweets_handle(handle)

@app.route('/api/tweets/keyword_search/<keyword>', methods=['GET'])
def search_tweets_keyword(keyword):
    return twitter_api.search_tweets_keyword(keyword)

@app.route('/api/tweets/random/<handle>', methods=['GET'])
def get_random_tweet(handle):
    return twitter_api.get_random_tweet(handle)