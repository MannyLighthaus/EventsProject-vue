import { createRouter, createWebHistory } from 'vue-router'
//import views from the views directly depending on what you want to view
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //url
      name: 'home',
      component: HomeView, // which view compenent to render
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      // routing for the event details
      path: '/event/:id',
      name: 'EventDetails',
      component: () => import('../views/EventDetailsView.vue'),
      props: true, // passing route params as props
    },
  ],
})

export default router
