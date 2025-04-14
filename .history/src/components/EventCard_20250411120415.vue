<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <!-- router link to generates URL for the EventDetails route, passing the event.id as a parameter -->
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }" class="event-card">
    <div class="summary">
      <h2>{{ event.title }}</h2>
      <span>{{ event.time }} on {{ event.date }}</span>
    </div>
  </router-link>
</template>

<style scoped>
.event-card {
  display: block; /* Ensure router-link behaves as a block */
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #2c3e50;
  margin-bottom: 18px;
  background-color: #fef9e7;
  border-radius: 8px;
  text-decoration: none; /* Remove underline from link */
  color: inherit; /* Inherit text color */
}

.event-card:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border-color: #ff6f61;
  background-color: #ff6f61;
  color: aqua;
}

.summary {
  margin: 0;
  background-color: #fff5e6;
  padding: 10px;
  border-radius: 6px;
}

.summary h2 {
  color: #ff6f61;
  font-size: 18px;
  margin: 0 0 5px 0;
}

.summary span {
  color: #2c3e50;
  font-size: 14px;
}
</style>
