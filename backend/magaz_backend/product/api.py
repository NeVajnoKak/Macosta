from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response

from .models import (ProductCategory,
                     Subcategory,
                     Product, Reviews,
                     ReviewNum, User)
from .serializers import *


# class ProductCategoryViewSet(viewsets.ViewSet):
#
#     def list(self, request):
#         queryset = ProductCategory.objects.all()
#         serializer = ProductCategorySerializer(queryset, many=True)
#         count = queryset.count()  # Получаем количество категорий
#         return Response({'count': count, 'categories': serializer.data})


class ProductCategoryViewSet(viewsets.ModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer


class SubCategoryViewSet(viewsets.ModelViewSet):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer


    # def list(self, request, *args, **kwargs):
    #     pk = kwargs.get('pk')
    #     categories = ProductCategory.objects.filter(id=pk)
    #     queryset = Subcategory.objects.filter(category__in=categories)
    #     serializer = SubcategorySerializer(queryset, many=True)
    #     return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # def list(self, request, *args, **kwargs):
    #     pk = kwargs.get('pk')
    #     subcategories = Subcategory.objects.filter(id=pk)
    #     queryset = Product.objects.filter(subcategory__in=subcategories)
    #     serializer = ProductSerializer(queryset, many=True)
    #     return Response(serializer.data)
class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

# class CategoryCountvViewSet(viewsets.ModelViewSet):
#     queryset = ProductCategory.objects.count()
#     serializer_class = ProductSerializer


# class SubCategoryCountvViewSet(viewsets.ModelViewSet):
#     def list(self, request, *args, **kwargs):
#         pk = kwargs.get('pk')
#         categories = ProductCategory.objects.filter(id=pk)
#         queryset = Subcategory.objects.count(category__in=categories)
#         serializer = SubcategorySerializer(queryset, many=True)
#         return Response(serializer.data)
#
#
# class ProductCountViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.count()
#     serializer_class = ProductSerializer
