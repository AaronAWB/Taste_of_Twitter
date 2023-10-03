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
        self.search_url = 'https://api.twitter.com/2/users/'
        self.id_url = 'https://api.twitter.com/2/users/by/username/'
        self.search_params = {
            'count': '10',
            'tweet_mode': 'extended'
            }
        self.random_params = {
            'tweet_mode': 'extended',
            'result_type': 'mixed'
            }

    def get_user_id(self, handle):
        full_url = self.id_url + handle
        resp = self.session.get(full_url)
        return resp.json()

    def search_tweets_handle(self, handle):
        user_id = self.get_user_id(handle)['data']['id']
        full_url = self.base_url + user_id + '/tweets'
        resp = self.session.get(full_url, params = self.search_params)
        return resp.json()

    def search_tweets_keyword(self, keyword):
        url = self.url + keyword
        resp = self.session.get(url, params = self.search_params)
        return resp.json()

    def get_random_tweet(self, handle):
        url = self.url + 'from:' + handle
        resp = self.session.get(url, params = self.random_params)
        return resp.json()

twitter_api = TwitterAPI()