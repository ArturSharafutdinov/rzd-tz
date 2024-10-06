import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18n } from '@/locale/i18n'

import 'quasar/src/css/index.sass'
import { Notify, Quasar } from 'quasar'
import iconSet from 'quasar/icon-set/mdi-v7'
import '@quasar/extras/mdi-v7/mdi-v7.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Quasar, {
  iconSet: iconSet,
  plugins: {
    Notify
  }
})

app.mount('#app')
