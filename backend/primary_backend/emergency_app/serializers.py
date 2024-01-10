from rest_framework import serializers
from .models import EmergencyCard

class EmergencyCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmergencyCard
        fields = '__all__'
        read_only_fields = ['serial_number']
