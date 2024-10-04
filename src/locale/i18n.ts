import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    ru: {
      'app': {
        'pages': {
          'home': 'Главная',
          'basket': 'Корзина',
          'login': 'Авторизация'
        }
      },
      'btn':{
        'bucket':'Корзина'
      }
    },
    en: {
      'app': {
        'pages': {
          'home': 'Home',
          'basket': 'Basket',
          'login': 'Login'
        }
      },
      'btn':{
        'bucket':'Корзина'
      }
    }
  }
})