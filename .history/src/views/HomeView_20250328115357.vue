<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'

const events = [
  {
    id: 5928101,
    category: 'socials',
    title: 'Lagos Trivia Night',
    description: 'Find a new friend at this event.',
    location:
      ' POP Landmark, Landmark Boulevard, Plot 2 & 3, Water Corporation Dr, Victoria Island, Lagos.',
    date: 'Sunday, March 30th 2025',
    time: '5:00 PM',
    petsAllowed: true,
    organizer: 'Kat Laydee',
  },
  {
    id: 4582797,
    category: 'religion',
    title: 'CCI Sunday Service',
    description: 'Come and worship with us on Sunday. We can’t wait to fellowship with you.',
    location: 'The Paraclete Event Centre, Opposite Abati Primary School, Shasha Road, Egbeda',
    date: 'Sunday, March 30th 2025',
    time: '8:30 AM',
    petsAllowed: false,
    organizer: 'Fern Pollin',
  },
  {
    id: 8419988,
    category: 'tech',
    title: 'Two Weeks Computer Skills Training',
    description:
      'Ready to level up your tech skills? Join our 2 Weeks Intensive Computer Skills Training.',
    location: '5, Adebo Close, Off Wilmer Street, Ilupeju Estate, Ilupeju, Lagos.',
    date: 'Monday, April 7th 2025',
    time: '12:00 PM',
    petsAllowed: false,
    organizer: 'Carey Wales',
  },
]
</script>

<template>
  <h1>Upcoming Events</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aqua;
}
</style>
