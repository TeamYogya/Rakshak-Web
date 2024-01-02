from rest_framework import serializers
from disasterstories.models import DisasterStories


class DisasterStoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisasterStories
        # fields = ["id", "title", "city", "author", "date", "type", "description"]
        fields = ["title", "city", "author", "date", "description"]
