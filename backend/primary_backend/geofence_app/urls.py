from django.urls import path
from .views import GeofenceListCreateAPIView

urlpatterns = [
    path('geofences/', GeofenceListCreateAPIView.as_view(), name='geofence-list-create'),
]