import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST
)
from chucklehub_proj.settings import env

# Create your views here.

class Random_Joke_Api(APIView):
    def get(self, request):
        
        limit = 1
        api_url = 'https://api.api-ninjas.com/v1/jokes?limit={}'.format(limit)
        response = requests.get(api_url, headers={'X-Api-Key': env.get("API_NINJA_JOKE_KEY")})
        if response.status_code == requests.codes.ok:
            print(response.text)
            return Response(response.text)
        else:
            print("Error:", response.status_code, response.text)
            return Response(response.status_code)
        
