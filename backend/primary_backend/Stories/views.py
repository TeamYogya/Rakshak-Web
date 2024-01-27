from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from .serializers import StorySerializer
from .models import Story
class AddStoryAPIView(APIView):
    def post(self, request, format=None):
        data = request.data
        data['date'] = datetime.strptime(data['date'], '%d-%m-%Y').strftime('%Y-%m-%d')
        serializer = StorySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetApi(APIView):
    def get(self, request):
        stories = Story.objects.all()
        serializer = StorySerializer(stories, many=True)
        return Response(serializer.data)