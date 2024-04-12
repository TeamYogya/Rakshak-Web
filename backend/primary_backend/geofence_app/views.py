# myapp/views.py
import json
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Geofence
from .serializers import GeofenceSerializer
from rest_framework import generics
class GeofenceCreateView(APIView):
    def get(self, request, format=None):
        geofences = Geofence.objects.all()
        serializer = GeofenceSerializer(geofences, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = GeofenceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GeofenceLive(APIView):
    def get(self, request, format=None):
        # Existing code for retrieving geofences

        # Get live location data
        ip = requests.get('https://api.ipify.org?format=json')
        ip_data = json.loads(ip.text)
        print(ip_data)
        res = requests.get(f'http://ip-api.com/json/{ip_data["ip"]}')
        location_data_one = res.text
        location_data = json.loads(location_data_one)
        print(location_data)
        # Add the live location data to the response
        response_data = {
            'live_location': location_data,
        }

        return Response(response_data)

