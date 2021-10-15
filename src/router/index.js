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
      component: () => import('../views/Index.vue'),
    },
    {
      name: 'Mobile',
      path: '/mobile',
      component: () => import('../mobile/views/Index.vue'),
    },
    {
      name: 'MobileSelect',
      path: '/mobile/select',
      component: () => import('../mobile/views/Select.vue'),
    },
  ],
})
