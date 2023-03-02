import { createRouter, createWebHistory } from 'vue-router'
import CountryFlag from '../views/Flag.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/country/:numericcode',
      name:"flag",
      component: CountryFlag
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
