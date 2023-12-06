from rest_framework import serializers
from joke_app.serializers import JokeSerializer
from user_app.serializers import ClientSerializer
from .models import UpDownVote

class JokeSerializer(serializers.ModelSerializer):
    joke = JokeSerializer(read_only=True)
    user = ClientSerializer(read_only=True)

    class Meta:
        model = UpDownVote
        fields = '__all__'