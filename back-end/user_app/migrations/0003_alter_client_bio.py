# Generated by Django 4.2.3 on 2023-12-05 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0002_client_bio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='bio',
            field=models.TextField(blank=True, default='A little about me...', null=True),
        ),
    ]
