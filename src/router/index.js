import { createRouter, createWebHashHistory } from 'vue-router'

const redirect = /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(
  navigator.userAgent
)
  ? '/mobile'
  : ''

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Index',
      path: '/',
      redirect,
      component: () => import('/src/views/index.vue'),
    },
    {
      name: 'Mobile',
      path: '/mobile',
      component: () => import('/src/mobile/views/Index.vue'),
    },
    {
      name: 'MobileSelect',
      path: '/mobile/select',
      component: () => import('/src/mobile/views/Select.vue'),
    },
  ],
})
