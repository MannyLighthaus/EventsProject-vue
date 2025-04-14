<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})

// initially the eventdetails is collapsed, so its set as False until its expanded(True). since it is a ref, change in its .value will trigger UI update.
</script>

<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }" class="event-card">
    <div class="summary">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </router-link>
</template>

<!-- <style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #2c3e50;
  margin-bottom: 18px;
  background-color: #fef9e7;
  border-radius: 8px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  border-color: #ff6f61;
}

.summary {
  margin: 0;
  background-color: #fff5e6;
  border-radius: 6px;
  padding: 10px;
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

.details {
  margin-top: 15px;
  padding: 15px;
  background-color: #2c3e50;
  color: #fff;
  border-radius: 6px;
}

.details p {
  margin: 8px 0;
}

.details strong {
  color: #ffecd2;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 5px;
}

/* Transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> -->

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
