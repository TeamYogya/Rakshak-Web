# Generated by Django 4.2.6 on 2023-10-08 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="DetectedText",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="images/")),
                ("text", models.TextField()),
                ("confidence", models.FloatField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
