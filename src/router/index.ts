import { createRouter, createWebHistory } from 'vue-router'
import DemoView from '@/views/PiniaDemo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'demo',
      component: DemoView
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('@/views/CSS.vue')
    },    
  ]
})

export default router
