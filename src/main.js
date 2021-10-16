import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { Button } from 'vant'

const vantComponents = [Button]

const app = createApp(App)

vantComponents.forEach((component) => {
  app.use(component)
})

app.use(store).use(router).mount('#app')
