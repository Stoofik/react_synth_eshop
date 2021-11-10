from django.db import models


class Product(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=100, null=False)
    image = models.ImageField(upload_to="./media/", default="default.png")
    price = models.FloatField(null=False)
    stock = models.BooleanField(default=False, null=False)
    quantity = models.IntegerField(null=False)
    description = models.TextField(max_length=5000, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
