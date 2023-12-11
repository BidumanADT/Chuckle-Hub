from django.urls import path
from .views import Create_Joke, Edit_Joke, Delete_Joke, Get_User_Jokes, Get_All_Jokes

urlpatterns = [
    path('user_jokes/<int:user_id>/', Get_User_Jokes.as_view(), name='user_jokes'),
    path('all_jokes/', Get_All_Jokes.as_view(), name="all_jokes"),
    path('create_joke/', Create_Joke.as_view(), name="create_joke"),
    path('edit_joke/<int:joke_id>/', Edit_Joke.as_view(), name='edit_joke'),
    path('delete_joke/<int:joke_id>/', Delete_Joke.as_view(), name='delete_joke'),
]