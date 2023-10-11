import os

from celery import shared_task
import tweepy
from dotenv import load_dotenv

load_dotenv()

@shared_task(bind=True)
def fetch_twitter_data(self):
    print("start")
    # Authenticate with Twitter API
    auth = tweepy.OAuthHandler(os.getenv('TWEEPY_CONSUMER_KEY'), os.getenv('TWEEPY_CONSUMER_SECRET'))
    auth.set_access_token(os.getenv('TWEEPY_ACCESS_TOKEN'), os.getenv('TWEEPY_ACCESS_TOKEN_SECRET'))
    api = tweepy.API(auth)

    # Fetch data from Twitter using Tweepy
    tweets = api.search_tweets()

    # Process fetched tweets
    for tweet in tweets:
        # Process the tweet data as needed
        print(tweet.text)
