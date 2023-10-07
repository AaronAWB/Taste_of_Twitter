from flask_restx import Api, Resource
from flask import Blueprint
from urllib.parse import unquote

from src.lib.twitter_api import twitter_api

tweets_bp = Blueprint('tweets', __name__, url_prefix = '/tweets')
api = Api(tweets_bp)

@api.route('/handle_search/<handle>')
class HandleSearch(Resource):
    def get(self, handle):
        decoded_handle = unquote(handle)
        return twitter_api.search_tweets_handle(decoded_handle)

@api.route('/keyword_search/<keyword>')
class KeywordSearch(Resource):
    def get(self, keyword):
        decoded_keyword = unquote(keyword)
        print(decoded_keyword)
        return twitter_api.search_tweets_keyword(decoded_keyword)

@api.route('/random/<user_id>')
class GetRandomTweet(Resource):
    def get(self, user_id):
        decoded_id = unquote(user_id)
        return twitter_api.get_random_tweet(decoded_id)
    
@api.route('/user_info/<user_id>')
class GetUserInfo(Resource):
    def get(self, user_id):
        decoded_id = unquote(user_id)
        return twitter_api.get_user_info(decoded_id)