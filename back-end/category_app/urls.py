from django.urls import path
from .views import Get_All_Categories

urlpatterns = [
    path('all_categories/', Get_All_Categories.as_view(), name="all_categories")
]