from django.db import models
from joke_app.models import Joke

# Create your models here.
class JokeImage(models.Model):
    joke = models.ForeignKey(Joke, on_delete=models.CASCADE, null=True, related_name='jokeimage_joke')
    image_url = models.URLField(max_length=255, null=True, blank=True)
    api_source = models.CharField(max_length=50, null=True, blank=True)
    
    def __str__(self):
        return f'Image for joke: {self.joke.title}'
    