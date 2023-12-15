from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
    HTTP_403_FORBIDDEN,
    HTTP_404_NOT_FOUND,
)
from .serializers import CategorySerializer, Category

# Create your views here.
class Get_All_Categories(APIView):
    def get(self, request):
        categories = Category.objects.all()
        ser_categories = CategorySerializer(categories, many=True)
        return Response(ser_categories.data)
