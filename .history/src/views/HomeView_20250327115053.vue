<script setup>
import EventCard from '@/components/EventCard.vue'
// import { ref } from 'vue'
</script>

<template>
  <div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
