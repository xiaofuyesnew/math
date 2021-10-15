import { createRouter, createWebHashHistory } from 'vue-router'

const redirect = /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(
  navigator.userAgent
)
  ? '/mobile/select'
  : '/select'

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
      name: "Select",
      path: "/select",
      component: () => import('../views/Select.vue'),
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
