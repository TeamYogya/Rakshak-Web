import os

from dotenv import load_dotenv
import requests
from celery import shared_task
from django.conf import settings

load_dotenv()
