from django.urls import path
from .views import EmergencyCardCreateView, EmergencyCardDeleteView, EmergencyCardListView

urlpatterns = [
    path('help/', EmergencyCardCreateView.as_view(), name='emergency-card-create'),
    path('help/list/', EmergencyCardListView.as_view(), name='emergency-card-display'),
    path('help/<int:pk>/', EmergencyCardDeleteView.as_view(), name='emergency-card-delete'),
]
