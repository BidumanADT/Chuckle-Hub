from django.urls import path
from .views import Get_Joke_Image

urlpatterns = [
    path('joke_image/', Get_Joke_Image.as_view(), name='joke_image'),
]