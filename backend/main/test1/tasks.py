from celery import shared_task
import tweepy


@shared_task(bind=True)
def fetch_twitter_data():
    # Authenticate with Twitter API
    auth = tweepy.OAuthHandler('CONSUMER_KEY', 'CONSUMER_SECRET')
    auth.set_access_token('ACCESS_TOKEN', 'ACCESS_TOKEN_SECRET')
    api = tweepy.API(auth)

    # Fetch data from Twitter using Tweepy
    tweets = api.search(q='disaster', count=100)

    # Process fetched tweets
    for tweet in tweets:
        # Process the tweet data as needed
        print(tweet.text)
