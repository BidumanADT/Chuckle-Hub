from django.db import models
from user_app.models import Client
from joke_app.models import Joke

# Create your models here.
class Comment(models.Model):
    content = models.TextField(max_length=300)
    joke = models.ForeignKey(Joke, on_delete=models.CASCADE, null=True, related_name='comment_joke')
    author = models.ForeignKey(Client, on_delete=models.CASCADE, null=True, related_name='comment_author')
    created_at = models.DateTimeField()
    
    def __str__(self):
        return f'{self.author}: {self.content[:20]}...'