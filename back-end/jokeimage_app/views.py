import json
from urllib import parse, request as rqst
import requests
import random
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST
)
from chucklehub_proj.settings import env


class Get_Joke_Image(APIView):
    def get(self, request):
        url = "http://api.giphy.com/v1/gifs/search"
        
        # params = parse.urlencode({
        #     "api_key": env.get("GIPHY_API_KEY"),
        #     "q": "laugh",
        #     "rating": "pg-13"
        # })
        random_number = random.randint(0, 155)
        params = parse.urlencode({
        "q": "dad jokes",
        "api_key": env.get("GIPHY_API_KEY"),
        "limit": "1",
        "offset": random_number
        })
        full_path = url+"?"+params
        response = requests.get(full_path)
        if response.status_code == requests.codes.ok:
            data = json.loads(response.content)
            print(data['data'][0]['images']['downsized']['url'])
            joke_image_url = data['data'][0]['images']['downsized']['url']
            return Response(joke_image_url)
        else:
            # print(full_path)
            print("Error:", response.status_code)
            return Response(response.status_code)

# https://api.giphy.com/v1/gifs/random?api_key=fZOQJOL4oYZDXmZ2iJwRnJOKdKJYXhzD&tag=dad+jokes&rating=pg-13