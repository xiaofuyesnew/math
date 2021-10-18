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
      component: () => import('../mobile/Index.vue'),
    },
    {
      name: 'MobileSelect',
      path: '/mobile/select',
      component: () => import('../mobile/Select.vue'),
    },
    {
      name: 'MobileQuiz',
      path: '/mobile/quiz',
      component: () => import('../mobile/Quiz.vue'),
    }
  ],
})
