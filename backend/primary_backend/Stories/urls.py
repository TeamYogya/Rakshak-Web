from django.urls import path
from .views import *

urlpatterns = [
    path('create/', AddStoryAPIView.as_view(), name='create'),
    path('get/', GetApi.as_view(), name='get'),
]