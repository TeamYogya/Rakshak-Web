from django.urls import path
from .views import *

urlpatterns = [
    path('geofence/', GeofenceCreateView.as_view(), name='geofence'),
    path('live/', GeofenceLive.as_view(), name='live'),
]