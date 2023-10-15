# text_detector/urls.py

from django.urls import path
from .views import detect_text

urlpatterns = [
    path('detect/', detect_text, name='detect_text'),
]
