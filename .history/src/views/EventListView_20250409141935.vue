<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const events = ref([null])

onMounted(() =>)
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
  /* background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); */
  padding: 20px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
  margin: 20px 0;
}
</style>
