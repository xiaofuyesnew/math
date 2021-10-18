import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { Button, NavBar, Dialog } from 'vant'

const vantComponents = [Button, NavBar, Dialog]

const app = createApp(App)

vantComponents.forEach((component) => {
  app.use(component)
})

app.use(store).use(router).mount('#app')
