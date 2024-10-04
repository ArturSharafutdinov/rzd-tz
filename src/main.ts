import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18n } from '@/locale/i18n'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { Quasar } from 'quasar'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Quasar, {})

app.mount('#app')
