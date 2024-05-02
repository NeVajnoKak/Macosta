from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response
from .models import (ProductCategory,
                     Subcategory,
                     Product, Reviews,
                     ReviewNum, User)
from .serializers import (ProductCategorySerializer,
                          SubcategorySerializer,
                          UserSerializer,
                          ReviewSerializer,
                          ProductSerializer,)


# class ProductCategoryViewSet(viewsets.ViewSet):
#
#     def list(self, request):
#         queryset = ProductCategory.objects.all()
#         serializer = ProductCategorySerializer(queryset, many=True)
#         count = queryset.count()  # Получаем количество категорий
#         return Response({'count': count, 'categories': serializer.data})


class ProductCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer


class SubCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    def list(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        categories = ProductCategory.objects.filter(id=pk)
        queryset = Subcategory.objects.filter(category__in=categories)
        serializer = SubcategorySerializer(queryset, many=True)
        return Response({'subcategories': serializer.data})


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

