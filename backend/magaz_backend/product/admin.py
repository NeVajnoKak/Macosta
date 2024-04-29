from django.contrib import admin
from .models import ProductCategory, Subcategory, Product, Reviews, ReviewNum

admin.site.register(ProductCategory)
admin.site.register(Subcategory)
admin.site.register(Product)
admin.site.register(ReviewNum)
