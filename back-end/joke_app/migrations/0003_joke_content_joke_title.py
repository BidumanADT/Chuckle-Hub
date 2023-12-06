# Generated by Django 4.2.3 on 2023-12-06 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('joke_app', '0002_alter_joke_author_alter_joke_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='joke',
            name='content',
            field=models.TextField(default='Input funny here.', max_length=500),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='joke',
            name='title',
            field=models.CharField(default='This is funny.', max_length=100, unique=True),
            preserve_default=False,
        ),
    ]
