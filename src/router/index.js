import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import StatisticsPage from '../pages/StatisticsPage.vue'

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
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatisticsPage
    },
  ]
}

const router = createRouter(routerOptions)

export default router
