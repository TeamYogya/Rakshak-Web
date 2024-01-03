from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import EmergencyCard
from .serializers import EmergencyCardSerializer

class EmergencyCardCreateView(generics.CreateAPIView):
    queryset = EmergencyCard.objects.all()
    serializer_class = EmergencyCardSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        emergency_type = data.get('emergency_type')
        location = self.get_location_for_emergency_type(emergency_type)
        data['location'] = location

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def get_location_for_emergency_type(self, emergency_type):
        location_mapping = {
            'fire': 'Fire Station',
            'medical': 'Hospital',
            'police': 'Police Station',
            'default': 'Default Location',
        }
        return location_mapping.get(emergency_type, 'Default Location')

class EmergencyCardDeleteView(generics.DestroyAPIView):
    queryset = EmergencyCard.objects.all()
    serializer_class = EmergencyCardSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
