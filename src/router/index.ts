import About from '@/About.vue'
import App from '@/App.vue'
import Home from '@/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/about',
      component: About,
      meta: {
        title: 'About'
      }
    },

    {
      path: '/',
      component: Home,

      meta: {
        title: 'Home'
      }
    }

  ],
})

router.afterEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`
  }
})

export default router
