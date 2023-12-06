from rest_framework import serializers
from joke_app.serializers import JokeSerializer
from .models import JokeImage

class JokeSerializer(serializers.ModelSerializer):
    joke = JokeSerializer(read_only=True)

    class Meta:
        model = JokeImage
        fields = '__all__'