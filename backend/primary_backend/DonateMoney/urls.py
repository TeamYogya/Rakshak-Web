from django.urls import path
from .views import DonateCreateView

urlpatterns = [
    path('create/', DonateCreateView.as_view(), name='create-razorpay-order'),
    # Other URL patterns...
]
