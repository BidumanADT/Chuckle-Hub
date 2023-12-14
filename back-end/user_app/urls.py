from django.urls import path
from .views import Sign_Up, Log_in, Log_out, Master_Sign_Up, Info

urlpatterns = [
    path('', Info.as_view(), name='info'),
    path('signup/', Sign_Up.as_view(), name='signup'),
    path('login/', Log_in.as_view(), name="login"),
    path('logout/', Log_out.as_view(), name="logout"),
    path('master/', Master_Sign_Up.as_view(), name="superuser"),
]
