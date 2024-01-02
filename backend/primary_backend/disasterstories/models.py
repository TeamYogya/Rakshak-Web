from django.db import models


class DisasterStories(models.Model):
    title = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    # type = models.CharField(max_length=200)
    date = models.DateTimeField()
    description = models.TextField()
