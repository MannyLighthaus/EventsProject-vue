<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'

const events = ref([
  {
    id: 5928101,
    category: 'Socials',
    title: 'Lagos Trivia Night',
    description: 'Find a new friend at this event.',
    location:
      ' POP Landmark, Landmark Boulevard, Plot 2 & 3, Water Corporation Dr, Victoria Island, Lagos.',
    date: 'Sunday, April 30th 2025',
    time: '5:00 PM',
    petsAllowed: true,
    organizer: 'Martins Oboh',
  },
  {
    id: 4582797,
    category: 'Religion',
    title: 'CCI Sunday Service',
    description: 'Come and worship with us on Sunday. We can’t wait to fellowship with you.',
    location: 'The Paraclete Event Centre, Opposite Abati Primary School, Shasha Road, Egbeda',
    date: 'Sunday, April 30th 2025',
    time: '8:30 AM',
    petsAllowed: false,
    organizer: 'James Orinze',
  },
  {
    id: 8419988,
    category: 'Technology',
    title: 'Two Weeks Computer Skills Training',
    description:
      'Ready to level up your tech skills? Join our 2 Weeks Intensive Computer Skills Training.',
    location: '5, Adebo Close, Off Wilmer Street, Ilupeju Estate, Ilupeju, Lagos.',
    date: 'Monday, April 7th 2025',
    time: '12:00 PM',
    petsAllowed: false,
    organizer: 'Babatunde Derick',
  },
])
</script>

<template>
  <div class="events">
    <h1>Upcoming Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: calc(100vh - 90px); */
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f);
  padding: 20px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
  margin: 20px 0;
}
</style>
