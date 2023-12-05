from django.db import models
from category_app.models import Category
from user_app.models import Client

# Create your models here.
class Joke(models.Model):
    title = models.CharField(max_length=100, unique=True),
    content = models.TextField(),
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name='joke_category')
    author = models.ForeignKey(Client, on_delete=models.CASCADE, null=True, related_name='joke_author')
    created_at = models.DateTimeField(null=True)
    updated_at = models.DateTimeField(null=True)
    upvote = models.PositiveIntegerField(default=0)
    downvote = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return f'{self.title}: {self.content[:20]}...'