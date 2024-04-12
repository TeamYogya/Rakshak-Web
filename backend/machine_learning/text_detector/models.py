# text_detector/models.py

from django.db import models

class DetectedText(models.Model):
    image = models.ImageField(upload_to='images/')
    text = models.TextField()
    confidence = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
