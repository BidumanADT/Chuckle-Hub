from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['email', 'bio']
        
# class ClientSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Client
#         fields = ['id', 'display_name', 'email', 'bio']
