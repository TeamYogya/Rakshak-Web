from django.db import models

class EmergencyCard(models.Model):
    serial_number = models.IntegerField( primary_key=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=255)
    priority_type = models.CharField(max_length=20)
    time_needed = models.IntegerField(null=True, blank=True)  # in minutes
    emergency_type = models.CharField(max_length=50)
    location = models.CharField(max_length=100, default='Default Location')
