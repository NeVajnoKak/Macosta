from django.contrib import admin
from django.urls import path
from product import api

urlpatterns = [
    path('admin/', admin.site.urls),
    path('categiry/', api.ProductCategoryViewSet.as_view({'get': 'list'})),
]