<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'
</script>
const events = ref([ { id: 5928101, category: 'animal welfare', title: 'Cat Adoption Day',
description: 'Find your new feline friend at this event.', location: 'Meow Town', date: 'January 28,
2022', time: '12:00', petsAllowed: true, organizer: 'Kat Laydee', }, ])
<template>
  <div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
