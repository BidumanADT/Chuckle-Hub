from rest_framework import serializers
from joke_app.serializers import JokeSerializer
from user_app.serializers import ClientSerializer
from .models import Comment

class JokeSerializer(serializers.ModelSerializer):
    joke = JokeSerializer(read_only=True)
    author = ClientSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'