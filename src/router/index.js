import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'

const routerOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactIndex
    },
    {
      path: '/contact/:id',
      name: 'details',
      component: ContactDetails
<<<<<<< HEAD
    },

=======
    }
>>>>>>> ac7b1aeda4a60fa01a29d81abddef26cac762297
  ]
}

const router = createRouter(routerOptions)

export default router
