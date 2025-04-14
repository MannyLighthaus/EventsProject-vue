<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'
</script>

const events = ref([ { id: 12345, category: 'animal welfare', title: 'cat adoption day',
description: 'find your new feline friend at this event', location }])
<template>
  <div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
