import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'
import router from './router'

import 'mdb-vue-ui-kit/css/mdb.min.css';

const app = createApp(App)
const pinia = createPinia()

app.use(vue3GoogleLogin, {
    clientId: '166661840046-bm0djl915ld90dmidsnffgepk9m0rbc2.apps.googleusercontent.com'
})

pinia.use(({store}) => {
    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')
