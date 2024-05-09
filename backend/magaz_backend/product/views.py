from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product  # Импортируем модель Product
import json

@csrf_exempt
def search_view(request):
    if request.method == 'POST':
        # Получение данных JSON из тела запроса
        try:
            data = json.loads(request.body)
            search_data = data.get('searchQuery')
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Неверный формат JSON'}, status=400)

        if search_data is not None:
            # Выполнение поиска на основе полученного запроса
            # Используем метод filter для поиска объектов Product, у которых поле name содержит search_data
            products = Product.objects.filter(name__icontains=search_data)

            # Преобразование результатов поиска в формат JSON
            search_results = [{'id': product.id, 'name': product.name} for product in products]

            # Возвращаем результаты поиска в формате JSON
            return JsonResponse({'searchResults': search_results})
        else:
            # Возвращаем ошибку, если search_data отсутствует
            return JsonResponse({'error': 'Пустой поисковый запрос'}, status=400)
    else:
        # Возвращаем ошибку, если запрос не является POST-запросом
        return JsonResponse({'error': 'Метод запроса не поддерживается'}, status=405)
