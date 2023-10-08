# celery.py in your Django project
from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'celery_tasks.settings')

app = Celery('celery_tasks')
app.conf.enable_utc = False

app.conf.update(timezone='Asia/Kolkata')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.conf.beat_schedule = {
    'fetch-twitter-data': {
        'task': 'celery_tasks.tasks.fetch_twitter_data',  # Path to your Celery task
        'schedule': 30000,  # Task runs every 5 minutes (300 seconds)
    },
}

app.autodiscover_tasks()


@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
