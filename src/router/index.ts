import { createRouter, createWebHistory } from 'vue-router'
import DemoView from '@/views/PiniaDemo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/pinia'
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: DemoView
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('@/views/CSSDemo.vue')
    },    
  ]
})

export default router
