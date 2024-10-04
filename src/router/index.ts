import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '@/locale/i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../views/home/Home.vue'),
      meta: {
        label: i18n.global.t('app.pages.home')
      }
    },
    {
      name: 'basket',
      path: '/basket',
      component: () => import('../views/basket/Basket.vue'),
      meta: {
        label: i18n.global.t('app.pages.basket')
      }
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('../views/auth/Login.vue'),
      meta: {
        label: i18n.global.t('app.pages.login')
      }
    }
  ]
})

export default router
