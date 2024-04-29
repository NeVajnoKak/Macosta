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
                          ReviewSerializer,)


class ProductCategoryViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = ProductCategory.objects.all()
        serializer = ProductCategorySerializer(queryset, many=True)
        count = queryset.count()  # Получаем количество категорий
        return Response({'count': count, 'categories': serializer.data})

