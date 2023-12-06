from rest_framework import serializers
from category_app.serializers import CategorySerializer
from user_app.serializers import ClientSerializer
from .models import Joke

class JokeSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    author = ClientSerializer(read_only=True)

    class Meta:
        model = Joke
        fields = '__all__'