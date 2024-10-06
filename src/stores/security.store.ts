import { defineStore } from 'pinia'
import { ref } from 'vue'
import { NOTIFY_COLORS, useNotify } from '@/composables/useNotify'
import { i18n } from '@/locale/i18n'
import { useRouter } from 'vue-router'
import { ROUTE_PATH } from '@/router'

class AuthService {
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(email === import.meta.env.VITE_APP_EMAIL && password === import.meta.env.VITE_APP_PASSWORD) {
          resolve(true)
        }
        reject()
      }, 1000)
    })
  }
}

const authService = new AuthService()

const AUTH_KEY = 'isAuthenticated'

export const useSecurityStore = defineStore('security', () => {

  const { addNotify } = useNotify()
  const router = useRouter()

  const isAuthenticated = ref<boolean>(!!localStorage.getItem('isAuthenticated'))
  const isLogging = ref<boolean>(false)

  const login = (email: string, password: string) => {
    isLogging.value = true
    authService.login(email, password).then(() => {
      localStorage.setItem(AUTH_KEY, 'true')
      isAuthenticated.value = true

      router.push(ROUTE_PATH.HOME)
    }).catch(() => {
      addNotify(i18n.global.t('login.failed'), 'top', NOTIFY_COLORS.ERROR)
    }).finally(() => {
      isLogging.value = false
    })
  }

  const logout = () => {
    isAuthenticated.value = false
    localStorage.removeItem(AUTH_KEY)
    router.push(ROUTE_PATH.LOGIN)
  }

  return {
    isAuthenticated,
    isLogging,
    login,
    logout
  }
})