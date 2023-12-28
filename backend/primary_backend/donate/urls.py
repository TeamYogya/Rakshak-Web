from django.urls import path
from donate.views import (
    DonateView,
)

urlpatterns = [
    path("donate/", DonateView.as_view(), name="donate"),
]
