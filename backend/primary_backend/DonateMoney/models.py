from django.contrib.gis.db import models

class Transaction(models.Model):
    payment_id = models.CharField(max_length=200, name="payment_id")
    order_id = models.CharField(max_length=200, name="order_id")
    signature = models.CharField(max_length=500, name="signature", blank=True, null=True)
    amount = models.IntegerField(name="amount")
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return str(self.id)