from django.db import models
from users.models import User


class ProductCategory(models.Model):

    name = models.CharField(max_length=200, unique=True)

    class Meta:
        verbose_name = 'Категорию'
        verbose_name_plural = 'Категории'


class Subcategory(models.Model):
    name = models.CharField(max_length=200, unique=True)
    category = models.ForeignKey(to=ProductCategory, on_delete=models.CASCADE)


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=7, decimal_places=2)
    quantity = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='products_images')
    subcategory = models.ForeignKey(to=Subcategory, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'


class ReviewNum(models.Model):
    review_num = models.PositiveIntegerField()


class Reviews(models.Model):
    product = models.ForeignKey(to=Product, on_delete=models.CASCADE)
    review_num = models.ForeignKey(to=ReviewNum, on_delete=models.CASCADE)
    users = models.ForeignKey(to=User, on_delete=models.CASCADE)
    review = models.CharField(max_length=600)


