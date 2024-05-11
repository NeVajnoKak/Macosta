from django.contrib import admin

from django.urls import path, include
from product.api import *  # ProductViewSet , CartViewSet
from rest_framework import routers
from product.views import *

router = routers.DefaultRouter()
router.register(r'api/category', ProductCategoryViewSet)
router.register(r'api/subcategory', SubCategoryViewSet)
router.register(r'api/product', ProductViewSet)
router.register(r'api/cart', CartViewSet)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),  # Включаем маршруты из router
    path('api/search/', search_view, name='search'),
    path('api/search/product/', searchProduct, name='searchProduct'),
    path('api/cart/add',addCart,name="addCart"),
    path('api/cart/count', countCart, name="countCart")
    # path('api/search/product/subCategory/', searchProductSubCategory, name='searchProductSubCategory'),
    # path('api/search/product/category/', searchCategory, name='searchCategory'),
    # path('api/category', ProductCategoryViewSet.as_view({'get': 'list'})),
    # path('api/category/subcategory/<int:pk>', SubCategoryViewSet.as_view({'get': 'list'})),
    # path('api/category/subcategory/<int:pk>/product', ProductViewSet.as_view({'get': 'list'})),

]