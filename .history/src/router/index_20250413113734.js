import { createRouter, createWebHistory } from 'vue-router'
//import views from the views directly depending on what you want to view
import EventListView from '../views/EventListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //url
      name: 'event-list',
      component: EventListView, // which view component to render
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },

    {
      // routing for the event details with param(id)
      path: '/:id',
      name: 'EventDetails',
      component: () => import('../views/EventDetailsView.vue'),
      props: true, // passing route params as props
    },
    {
      path: '/calc',
      name: 'calcview',
      component: () => import('../views/CalcView.vue'),
    },
  ],
})

export default router
