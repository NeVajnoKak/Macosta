from django.contrib import admin
from django.urls import path
from product.api import ProductCategoryViewSet, SubCategoryViewSet, ProductViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/categirylist/', ProductCategoryViewSet.as_view({'get': 'list'})),
    path('api/categirylist/<int:pk>', SubCategoryViewSet.as_view({'get': 'list'})),
    path('api/product', ProductViewSet.as_view({'get': 'list'})),
    # path('api/categirylist/<int:pk>', ProductCategoryViewSet.as_view({'get': 'list'})),
]