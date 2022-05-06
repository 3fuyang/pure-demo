import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import VueCssDoodle from '@luxdamore/vue-css-doodle'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 创建根存储库并将其传递给应用程序
const pinia = createPinia()
pinia.use(piniaPersist)

app
  .use(pinia)
  .use(router)
  .use(VueCssDoodle)

app.mount('#app')
