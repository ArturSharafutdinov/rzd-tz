import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../views/home/Home.vue'),
      meta: {
        label: 'Главная',
      }
    },
    {
      name: 'basket',
      path: '/basket',
      component: () => import('../views/basket/Basket.vue'),
      meta: {
        label: 'Корзина',
      }
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('../views/auth/Login.vue'),
      meta: {
        label: 'Авторизация',
      }
    }
  ]
})

export default router
