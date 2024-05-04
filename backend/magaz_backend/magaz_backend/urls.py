from django.contrib import admin
from django.urls import path
from product.api import ProductCategoryViewSet, SubCategoryViewSet, ProductViewSet, SubCategoryCountvViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/categirylist/', ProductCategoryViewSet.as_view({'get': 'list'})),
    path('api/subcategory/<int:pk>', SubCategoryViewSet.as_view({'get': 'list'})),
    path('api/subcategory/<int:pk>/product', ProductViewSet.as_view({'get': 'list'})),
    # path('api/subcategory_count/<int:pk>', SubCategoryCountvViewSet.as_view({'get': 'list'})),
    # path('api/category_count/', ProductViewSet.as_view({'get': 'list'})),
    # path('api/categirylist/<int:pk>', ProductCategoryViewSet.as_view({'get': 'list'})),
]