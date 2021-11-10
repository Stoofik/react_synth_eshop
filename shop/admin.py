from django.contrib import admin
from .models import Product


class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "price",
        "stock",
        "quantity",
        "description",
        "created_at",
    )


admin.site.register(Product, ProductAdmin)
