from django.http import HttpResponse
from django.shortcuts import render
from .tasks import fetch_twitter_data


# Create your views here.
def test(request):
    fetch_twitter_data.delay()
    return HttpResponse("Done")
