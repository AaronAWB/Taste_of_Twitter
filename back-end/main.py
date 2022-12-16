from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

tweet_put_args = reqparse.RequestParser()
tweet_put_args.add_argument("user_name", type=str, help="User Name")
tweet_put_args.add_argument("handle", type=str, help="Handle")
tweet_put_args.add_argument("text", type=str, help="Tweet Text")
tweet_put_args.add_argument("likes", type=int, help="Number of Likes")
tweet_put_args.add_argument("retweets", type=int, help="Number of re-tweets")

class Tweet(Resource):
    def get(self):
        return {"data": "Hello World"}
    def put(self):
        args =
        return 

api.add_resource(HelloWorld, "/helloworld")

if __name__ == "__main__":
    app.run(debug=True)