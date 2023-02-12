import requests
import os

from dotenv import load_dotenv; load_dotenv()

class twitterAPI():

    def __init__(self) -> None:
        self.session = requests.Session()
        self.session.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': f'Bearer {os.getenv("API_BEARER_TOKEN")}'
            }