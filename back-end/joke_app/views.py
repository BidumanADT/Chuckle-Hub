from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
    HTTP_403_FORBIDDEN,
    HTTP_404_NOT_FOUND,
)
from user_app.views import UserPermissions
from .serializers import JokeSerializer, UserJokeSerializer, Joke
from category_app.models import Category
from user_app.models import Client

# Create your views here.
class Create_Joke(UserPermissions):
    def post(self, request):
        title = request.data.get('title')
        content = request.data.get('content')
        category_id = request.data.get('category')
        author_id = request.data.get('author')
        if not title or not content or not category_id or not author_id:
            return Response("Something is missing.", status=HTTP_400_BAD_REQUEST)
        
        category = get_object_or_404(Category, pk=category_id)
        author = get_object_or_404(Client, pk=author_id)
        
        new_joke = Joke.objects.create(title=title, content=content, category=category, author=author)
        
        ser_joke = JokeSerializer(new_joke)
        return Response(ser_joke.data, status=HTTP_201_CREATED)
        
class Edit_Joke(UserPermissions):
    def put(self, request, joke_id):
        joke = Joke.objects.get(id=joke_id)
        if joke.author != request.user:
            return Response("Security is not a joke! You are not authorized to edit this one.", status=HTTP_403_FORBIDDEN)
        ser_joke = JokeSerializer(joke, data=request.data, partial=True)
        if ser_joke.is_valid():
            ser_joke.save()
            return Response(ser_joke.data, status=HTTP_204_NO_CONTENT)
        else:
            return Response(status=HTTP_400_BAD_REQUEST)
    
class Delete_Joke(UserPermissions):
    def delete(self, request, joke_id):
        joke = Joke.objects.get(id=joke_id)
        if joke.author != request.user:
            return Response("Security is not a joke! You are not authorized to delete this.", status=HTTP_403_FORBIDDEN)
        try:
            joke.delete()
            return Response("Joke has been deleted", status=HTTP_204_NO_CONTENT)
        except Exception as e:
            print(e)
            return Response(status=HTTP_400_BAD_REQUEST)

class Get_User_Jokes(UserPermissions):
    def get(self, request, user_id):
        # if request.user.id != int(user_id):
        #     return Response("Unathorized.", status=HTTP_403_FORBIDDEN)
        
        jokes = Joke.objects.filter(author=user_id)
        ser_jokes = UserJokeSerializer(jokes, many=True)
        return Response(ser_jokes.data)
    
class Get_All_Jokes(APIView):
    def get(self, request):
        jokes = Joke.objects.all()
        ser_jokes = JokeSerializer(jokes, many=True)
        return Response(ser_jokes.data)
    
class Get_Jokes_By_Category(APIView):
    def get(self, request):
        jokes = Joke.objects.all().select_related('category')
        ser_jokes = JokeSerializer(jokes, many=True)
        return Response(ser_jokes.data)