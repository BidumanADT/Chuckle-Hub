# Generated by Django 4.2.3 on 2023-12-06 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0006_alter_client_display_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='display_name',
            field=models.CharField(default='', max_length=100, unique=True),
        ),
    ]
