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
        self.id_url = 'https://api.twitter.com/2/users/by/username/'
        self.user_search_url = 'https://api.twitter.com/2/users/'
        self.keyword_search_url = 'https://api.twitter.com/2/tweets/search/recent?query='
        self.search_params = {
            'max_results': '10',
            'tweet.fields': 'public_metrics,created_at',
            'expansions': 'attachments.media_keys,author_id',
            'media.fields': 'url,type'
            }
        self.user_params = {
            'user.fields': 'profile_image_url,username'
        }
        
    def get_user_id(self, handle):
        full_url = self.id_url + handle
        resp = self.session.get(full_url)
        return resp.json()
    
    def get_user_info(self, user_id):
        full_url = self.user_search_url + user_id
        resp = self.session.get(full_url, params = self.user_params)
        return resp.json()
    
    def extract_images(self, data):
        if 'data' in data and 'includes' in data and 'media' in data['includes']:
            for tweet in data['data']:
                if 'attachments' in tweet:
                    media_keys = tweet['attachments'].get('media_keys', [])
                    for media_key in media_keys:
                        media_item = next((m for m in data['includes']['media'] if m['media_key'] == media_key), None)
                        if media_item and media_item['type'] == 'photo':
                            tweet['media_url'] = media_item['url']
        return data

    def search_tweets_handle(self, handle):
        user_resp = self.get_user_id(handle)
        print(f'user_resp: {user_resp}')
        user_id = user_resp['data']['id']
        print(f'user_id: {user_id}')
        full_url = self.user_search_url + user_id + '/tweets'
        resp = self.session.get(full_url, params = self.search_params)
        data = resp.json()
        print(f'data: {data}')
        return self.extract_images(data)

    def search_tweets_keyword(self, keyword):
        full_url = self.keyword_search_url + keyword
        resp = self.session.get(full_url, params = self.search_params)
        data = resp.json()
        return self.extract_images(data)

    def get_random_tweet(self, user_id):
        full_url = full_url = self.user_search_url + user_id + '/tweets'
        resp = self.session.get(full_url, params = self.search_params)
        data = resp.json()
        return self.extract_images(data)
    
twitter_api = TwitterAPI()