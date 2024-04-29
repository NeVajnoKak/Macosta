from rest_framework import serializers

from .models import ProductCategory, Subcategory,Product, Reviews, ReviewNum, User


class ProductCategorySerializer(serializers.Serializer):

    class Meta:
        model = ProductCategory
        fields = ('name',)
        read_only_fields = ('name',)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')


class SubcategorySerializer(serializers.ModelSerializer):
    subcategory = serializers.SlugRelatedField(slug='subcategory', queryset=Subcategory.objects.all())

    class Meta:
        model = Subcategory
        fields = ('name', 'category')
        read_only_fields = ('category',)


class ReviewSerializer(serializers.ModelSerializer):

    user = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.filter())
    product = serializers.SlugRelatedField(slug_field='username', queryset=Product.objects.all())
    review_num = serializers.SlugRelatedField(slug_field='username', queryset=ReviewNum.objects.all())

    class Meta:
        model = Reviews
        fields = ('product', 'review_num', 'users', 'review')
        read_only_fields = ('product', 'review_num', 'users')
