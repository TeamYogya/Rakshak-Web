from rest_framework import generics, status
from rest_framework.response import Response
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
            'Fire': 'Nagarparishad office,Alandi',
            'Medical': 'Tapkir Nagar, Alandi,',
            'Local Police': 'Pimpri Chinchwad Police,Pimpri',
            'NGO': 'Mauli sarvajanik granthalay, Alandi,',
            'Military': ' Alandi Road Dighi Pune '
        }
        return location_mapping.get(emergency_type, 'Default Location')

class EmergencyCardDeleteView(generics.RetrieveAPIView, generics.DestroyAPIView):
    queryset = EmergencyCard.objects.all()
    serializer_class = EmergencyCardSerializer
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class EmergencyCardListView(generics.ListAPIView):
    queryset = EmergencyCard.objects.all()
    serializer_class = EmergencyCardSerializer


