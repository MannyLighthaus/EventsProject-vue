import { createRouter, createWebHistory } from 'vue-router'
//import views from the views directly depending on what you want to view
import EventListView from '../views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //url
      name: 'event-list',
      component: EventListView, // which view component to render
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: AboutView,
    // },
    {
      // routing for the event details
      path: '/',
      name: 'EventDetails',
      component: EventDetailsView,
      props: true, // passing route params as props
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
