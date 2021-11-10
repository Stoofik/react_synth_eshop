from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from shop import views

router = routers.DefaultRouter()
router.register(r"products", views.ProductView, "shop")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("", include("frontend.urls")),
]
