# myapp/serializers.py
from rest_framework import serializers
from django.contrib.gis.geos import Polygon
from .models import Geofence

class GeofenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Geofence
        fields = '__all__'

    def create(self, validated_data):
        boundary_data = validated_data.pop('boundary')['coordinates']
        # Convert the list of coordinates to a Polygon instance
        boundary_polygon = Polygon(boundary_data)
        instance = Geofence.objects.create(boundary=boundary_polygon, **validated_data)
        return instance
