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
      path: '/css-animation',
      name: 'css-animation',
      component: () => import('@/views/CSSAnimation.vue')
    },
    {
      path: '/photo-wall',
      name: 'photo-wall',
      component: () => import('@/views/PhotoWall.vue')
    },
    {
      path: '/vue-debug',
      name: 'vue-debug',
      component: () => import('@/components/vue-debug/InfiniteUpdate.vue')
    },
    {
      path: '/rtf',
      name: 'rtf',
      component: () => import('@/views/RTF.vue')
    }
  ]
})

export default router
