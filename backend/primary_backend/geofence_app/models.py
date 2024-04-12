
from django.contrib.gis.db import models

class Geofence(models.Model):
    name = models.CharField(max_length=255)
    boundary = models.PolygonField()

    def __str__(self):
        return self.name
