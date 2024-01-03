from django.urls import path
from .views import EmergencyCardCreateView, EmergencyCardDeleteView

urlpatterns = [
    path('help/', EmergencyCardCreateView.as_view(), name='emergency-card-create'),
    path('help/<int:pk>/', EmergencyCardDeleteView.as_view(), name='emergency-card-delete'),
]
