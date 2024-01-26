from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class DonateCreateView(APIView):
    def post(self, request, *args, **kwargs):
        return Response({"message": "Donation created successfully"}, status=status.HTTP_201_CREATED)
