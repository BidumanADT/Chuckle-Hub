from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Client(AbstractUser):
    
    # todo: add display name field that defaults to email address if none is provided
    display_name = models.CharField(max_length=100, unique=True, default="")
    
    email = models.EmailField(unique=True)
    bio = models.TextField(default="A little about me...", null=True, blank=True)
    
     # method to replace empty display_name with email address
    def save(self, *args, **kwargs): # accepts any number of positional/keyword args
        if not self.display_name:
            self.display_name = self.email # if d_name is blank, set to email
        super().save(*args, **kwargs) # calls save() method from AbstractUser and customizes behavior
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return self.email, self.bio