import { createRouter, createWebHistory } from 'vue-router'
import Flag from '../views/Flag.vue';
import FlagTemplateVue from '@/components/FlagTemplate.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FlagTemplateVue
    },
    {
      path:'/country/:name',
      name:"flag",
      component: Flag
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w../components/AboutView.vueed.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
