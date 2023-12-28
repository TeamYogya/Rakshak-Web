from django.db import models

# Create your models here.
class DonateModel(models.Model):
    name = models.CharField(max_length=200)
    pay = models.IntegerField()
    mobile = models.TextField()
    email = models.EmailField(
        verbose_name="Email",
        max_length=255,
        unique=True,
    )
