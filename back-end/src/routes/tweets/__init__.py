from flask_restx import Api, Resource
from flask import Blueprint

from src.lib.twitter_api import twitter_api

tweets_bp = Blueprint('tweets', __name__, url_prexif = '/tweets')
api = Api(tweets_bp)

@api.route('/handle_search/<handle>')
class HandleSearch(Resource):
    def get(self, handle):
        return twitter_api.search_tweets_handle(handle)

@api.route('/keyword_search/<keyword>')
class KeywordSearch(Resource):
    def get(self, keyword):
        return twitter_api.search_tweets_keyword(keyword)

@api.route('/random/<handle>')
class GetRandomTweet(Resource):
    def get(self, handle):
        return twitter_api.get_random_tweet(handle)