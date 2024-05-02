from rest_framework import serializers

from .models import ProductCategory, Subcategory,Product, Reviews, ReviewNum, User


class ProductCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductCategory
        fields = ('name',)
        read_only_fields = ('name',)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')


class SubcategorySerializer(serializers.ModelSerializer):
    category = ProductCategorySerializer()

    class Meta:
        model = Subcategory
        fields = ('name', 'category')
        read_only_fields = ('category',)


class ReviewNumSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReviewNum
        fields = ('review_num',)
        read_only_fields = ('review_num',)


class ReviewSerializer(serializers.ModelSerializer):

    user = serializers.SlugRelatedField(slug_field='username', read_only=True)
    review_num = ReviewNumSerializer

    class Meta:
        model = Reviews
        fields = ('review_num', 'users', 'review')
        read_only_fields = ('review_num', 'users')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'description', 'price', 'quantity', 'image', 'subcategory')
        read_only_fields = ('subcategory',)
