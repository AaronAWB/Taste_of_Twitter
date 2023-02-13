import requests
import os

from dotenv import load_dotenv; load_dotenv()

class TwitterAPI():

    def __init__(self) -> None:
        self.session = requests.Session()
        self.session.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': f'Bearer {os.getenv("API_BEARER_TOKEN")}'
            }
        self.base_url = 'https://api.twitter.com/1.1/'
        self.full_url = 'https://api.twitter.com/1.1/search/tweets.json?q='
        self.search_params = {
            'count': '10',
            'tweet_mode': 'extended'
            }
        self.random_params = {
            'tweet_mode': 'extended',
            'result_type': 'mixed'
            }

    def search_tweets_handle(self, handle):
        url = self.full_url + handle
        resp = self.session.get(url, params = self.search_params)
        return resp.json()

    def search_tweets_keyword(self, keyword):
        url = self.full_url + keyword
        resp = self.session.get(url, params = self.search_params)
        return resp.json()

    def get_random_tweet(self, handle):
        url = self.full_url + handle
        resp = self.session.get(url, params = self.random_params)
        return resp.json()

twitter_api = TwitterAPI()