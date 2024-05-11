from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *  # Импортируем модель Product
import json

@csrf_exempt
def countCart(request):
    cart_count = Cart.objects.count()

    # Возвращаем количество элементов в формате JSON
    return JsonResponse({'cartCount': cart_count})

@csrf_exempt
def addCart(request):
    if request.method == 'POST':
        # Получение данных JSON из тела запроса
        try:
            data = json.loads(request.body)
            productId = data.get('productId')
            productQuantity = data.get('productQuantity')

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Неверный формат JSON'}, status=400)

        if productId is not None:
            try:
                # Поиск продукта по идентификатору
                product = Product.objects.get(id=productId)
                print("product.quantity:", product.quantity)
                print("productQuantity:", productQuantity)
                productQuantity = int(productQuantity)
                # Проверка наличия достаточного количества товаров
                if product.quantity >= productQuantity:
                    # Создание объекта корзины с учетом суммы total и сохранение его в базе данных
                    total = product.price * productQuantity
                    cart_item = Cart(product=product, quantity=productQuantity, total=total)
                    cart_item.save()

                    # Возвращаем успешный ответ
                    return JsonResponse({'success': True})
                else:
                    return JsonResponse({'error': 'Недостаточное количество товаров в наличии'}, status=400)

            except Product.DoesNotExist:
                return JsonResponse({'error': 'Продукт с указанным ID не найден'}, status=404)

        else:
            # Возвращаем ошибку, если productId отсутствует
            return JsonResponse({'error': 'Пустой поисковый запрос'}, status=400)
    else:
        # Возвращаем ошибку, если запрос не является POST-запросом
        return JsonResponse({'error': 'Метод запроса не поддерживается'}, status=405)

@csrf_exempt
def search_view(request):
    if request.method == 'POST':
        # Получение данных JSON из тела запроса
        try:
            data = json.loads(request.body)
            search_data = data.get('searchQuery')
            search_type = data.get('searchType')
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Неверный формат JSON'}, status=400)

        if search_data is not None:
            # Выполнение поиска на основе полученного запроса
            # Используем метод filter для поиска объектов Product, у которых поле name содержит search_data
            # if search_type == "product":
            #     products = Product.objects.filter(name__icontains=search_data)

            if search_type == "category":
                products = Product.objects.filter(category_id=search_data)

            elif search_type == "subcategory":
                products = Product.objects.filter(subcategory_id=search_data)

            search_results = [{'id': product.id, 'name': product.name, 'price' : product.price, 'rate': product.rate} for product in products]

            # Возвращаем результаты поиска в формате JSON
            return JsonResponse({'searchResults': search_results})
        else:
            # Возвращаем ошибку, если search_data отсутствует
            return JsonResponse({'error': 'Пустой поисковый запрос'}, status=400)
    else:
        # Возвращаем ошибку, если запрос не является POST-запросом
        return JsonResponse({'error': 'Метод запроса не поддерживается'}, status=405)

@csrf_exempt
def searchProduct(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            search_data = data.get('searchQuery')
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Неверный формат JSON'}, status=400)

        if search_data is not None:

            products = Product.objects.filter(name__icontains=search_data)

            search_results = [{'id': product.id, 'name': product.name, 'price' : product.price, 'rate': product.rate} for product in products]

            return JsonResponse({'searchResults': search_results})
        else:
            return JsonResponse({'error': 'Пустой поисковый запрос'}, status=400)
    else:
        return JsonResponse({'error': 'Метод запроса не поддерживается'}, status=405)


# @csrf_exempt
# def searchCategory(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             search_data = data.get('searchQuery')
#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Неверный формат JSON'}, status=400)
#
#         if search_data is not None:
#
#             products = Product.objects.filter(category_id=search_data)
#
#             search_results = [{'id': product.id, 'name': product.name, 'price' : product.price} for product in products]
#
#             return JsonResponse({'searchResults': search_results})
#         else:
#             return JsonResponse({'error': 'Пустой поисковый запрос'}, status=400)
#     else:
#         return JsonResponse({'error': 'Метод запроса не поддерживается'}, status=405)
#
#
# @csrf_exempt
# def searchProductSubCategory(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             search_data = data.get('searchQuery')
#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Неверный формат JSON'}, status=400)
#
#         if search_data is not None:
#             products = Product.objects.filter(subcategory_id=search_data)
#
#             search_results = [{'id': product.id, 'name': product.name, 'price' : product.price} for product in products]
#
#             return JsonResponse({'searchResults': search_results})
#         else:
#             return JsonResponse({'error': 'Пустой поисковый запрос'}, status=400)
#     else:
#         return JsonResponse({'error': 'Метод запроса не поддерживается'}, status=405)

