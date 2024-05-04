from rest_framework import serializers

from .models import ProductCategory, Subcategory,Product, Reviews, ReviewNum, User


class ProductCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductCategory
        fields = ('name', 'id')
        read_only_fields = ('name', 'id')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'id')


class SubcategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Subcategory
        fields = ('name', 'id')
        read_only_fields = ('id',)


class ReviewNumSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReviewNum
        fields = ('review_num', 'id')
        read_only_fields = ('review_num', 'id')


class ReviewSerializer(serializers.ModelSerializer):

    user = serializers.SlugRelatedField(slug_field='username', read_only=True)
    review_num = ReviewNumSerializer

    class Meta:
        model = Reviews
        fields = ('review_num', 'users', 'review', 'id')
        read_only_fields = ('review_num', 'users', 'id')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'description', 'price', 'quantity', 'image', 'subcategory', 'id')
        read_only_fields = ('subcategory', 'id')
