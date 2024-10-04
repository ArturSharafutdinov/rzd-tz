import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '@/locale/i18n'

export const ROUTE_PATH = {
  HOME: '/',
  BASKET: '/basket',
  LOGIN: '/login'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: ROUTE_PATH.HOME,
      component: () => import('../views/home/Home.vue'),
      meta: {
        label: i18n.global.t('app.pages.home')
      }
    },
    {
      name: 'basket',
      path: ROUTE_PATH.BASKET,
      component: () => import('../views/basket/Basket.vue'),
      meta: {
        label: i18n.global.t('app.pages.basket')
      }
    },
    {
      name: 'login',
      path: ROUTE_PATH.LOGIN,
      component: () => import('../views/auth/Login.vue'),
      meta: {
        label: i18n.global.t('app.pages.login')
      }
    }
  ]
})

export default router
