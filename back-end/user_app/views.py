from django.contrib.auth import authenticate
from .serializers import ClientSerializer, Client
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
)
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class Sign_Up(APIView):
    def post(self, request):
        # serializer = ClientSerializer(data=request.data)
        # serializer.is_valid(raise_exception=True)
        # serializer.save()
        # client = serializer.instance
        request.data["username"] = request.data["email"]
        client = Client.objects.create_user(**request.data)
        token = Token.objects.create(user=client)
        return Response(
            {"client": client.email, "token": token.key}, status=HTTP_201_CREATED
        )


class Log_in(APIView):
    def post(self, request):
        email= request.data.get('email')
        password = request.data.get('password')
        client = authenticate(username=email, password=password)
        if client:
            token, created = Token.objects.get_or_create(user=client)
            return Response({"token": token.key, "client": client.email})
        else:
            return Response("No client matching credentials", status=HTTP_404_NOT_FOUND)

class UserPermissions(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class Log_out(UserPermissions):
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=HTTP_204_NO_CONTENT)
