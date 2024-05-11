from rest_framework import serializers

from .models import *


class ProductCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductCategory
        fields = ('name', 'id')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'id')


class SubcategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Subcategory
        fields = ('name', 'id', 'category')


class ReviewNumSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReviewNum
        fields = ('review_num', 'id')


class ReviewSerializer(serializers.ModelSerializer):

    user = serializers.SlugRelatedField(slug_field='username', read_only=True)
    review_num = ReviewNumSerializer

    class Meta:
        model = Reviews
        fields = ('review_num', 'users', 'review', 'id')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'description', 'price', 'quantity','rate','category', 'subcategory', 'id')

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ('id','quantity','total','product')