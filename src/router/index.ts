import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '@/locale/i18n'
import { useSecurityStore } from '@/stores/security.store'

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

router.beforeEach((to) => {

  const securityStore = useSecurityStore()

  const isAuthenticated = securityStore.isAuthenticated

  if(to.path !== ROUTE_PATH.LOGIN && !isAuthenticated) {
    return ROUTE_PATH.LOGIN
  }

})

export default router
