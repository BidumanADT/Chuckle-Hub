# Generated by Django 4.2.3 on 2023-12-05 21:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('joke_app', '0002_alter_joke_author_alter_joke_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='JokeImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('joke', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='jokeimage_joke', to='joke_app.joke')),
            ],
        ),
    ]
