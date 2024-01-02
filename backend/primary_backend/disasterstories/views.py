from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from disasterstories.renderers import StoryRenderer
from rest_framework.views import APIView

from disasterstories.serializers import (DisasterStoriesSerializer)

class DisasterView(APIView):

    def post(self, request, format=None):
        serializer = DisasterStoriesSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        title = serializer.data.get("title")
        city = serializer.data.get("city")
        # type = serializer.data.get("type")
        author = serializer.data.get("author")
        description = serializer.data.get("description")
        date = serializer.data.get("date")
        return Response(
            {"msg": "Story added"},
            status=status.HTTP_200_OK,
        )

    # def CategorsiedView():
    #
    #
    # def RecommendedView():
