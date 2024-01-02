from django.urls import path
from disasterstories.views import (
    DisasterView,
)

urlpatterns = [
    path("stories/", DisasterView.as_view(), name="disasterstories"),
]