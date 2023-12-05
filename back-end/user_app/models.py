from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Client(AbstractUser):
    email = models.CharField(unique=True)
    bio = models.TextField(default="A little about me...", null=True, blank=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return self.username, self.bio