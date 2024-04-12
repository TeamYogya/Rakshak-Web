from django.db import models

class Story(models.Model):
    title = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    date = models.DateField()
    description = models.TextField()