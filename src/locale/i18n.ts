import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru: {
      'app': {
        'pages': {
          'home': 'Главная',
          'basket': 'Корзина',
          'login': 'Авторизация'
        }
      },
      'btn': {
        'basket': 'Корзина',
        'addToBasket': 'В корзину',
        'clear': 'Сброс',
        'apply': 'Применить'
      },
      'categories': {
        'electronics': 'Электроника',
        'jewelery': 'Ювелирные изделия',
        'mens clothing': 'Мужская одежда',
        'womens clothing': 'Женская одежда',
        'all': 'Все категории'
      },
      'input': {
        'category': {
          'label': 'Выберите категорию'
        },
        'price': {
          'min': 'Мин.цена',
          'max': 'Макс.цена',
          'label': 'Значение'
        }
      },
      'filter': {
        'title': 'Фильтр',
        'category': 'Категория',
        'price': 'Цена'
      },
      'products': {
        'loading': 'Загрузка продукции',
        'basketSuccess': 'Продукт добавлен в корзину',
        'basketFail': 'Ошибка при добавлении продукта в корзину'
      }
    }
  }
})