from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def test(request):
    # fetch_facebook_posts.delay()
    return HttpResponse("Done")
