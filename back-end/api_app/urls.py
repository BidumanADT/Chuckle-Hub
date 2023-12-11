from django.urls import path
from .views import Random_Joke_Api

urlpatterns = [
    path('random_joke/', Random_Joke_Api.as_view(), name='random_jokes'),
]