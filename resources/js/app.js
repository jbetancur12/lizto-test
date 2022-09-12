require('./bootstrap')

import { createApp, defineComponent } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'
const root = defineComponent({
    App,
})

const app = createApp(root)
app.use(createPinia())
app.use(router)
app.component('App', App)
app.mount('#app')
