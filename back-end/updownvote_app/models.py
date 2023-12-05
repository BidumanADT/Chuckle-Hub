from django.db import models
from joke_app.models import Joke
from user_app.models import Client

# Create your models here.
class UpDownVote(models.Model):
    joke = models.ForeignKey(Joke, on_delete=models.CASCADE, null=True, related_name='updownvote_joke')
    user = models.ForeignKey(Client, on_delete=models.CASCADE, null=True, related_name='updownvote_user')
    upvote = models.BooleanField()
    downvote = models.BooleanField()