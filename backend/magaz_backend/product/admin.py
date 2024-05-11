from django.contrib import admin
from .models import *

admin.site.register(ProductCategory)
admin.site.register(Subcategory)
admin.site.register(Product)
admin.site.register(ReviewNum)
admin.site.register(Reviews)
admin.site.register(Cart)
