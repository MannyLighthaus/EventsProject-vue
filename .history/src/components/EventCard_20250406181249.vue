<!-- <script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="event-card">
    <h2>{{ event.title }}</h2>
    <span>@{{ event.time }} on {{ event.date }}</span>
  </div>
</template>

<style scoped>
event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style> -->

<script setup>
import { ref } from 'vue'

defineProps({
  event: {
    type: Object,
    required: true,
  },
})

// initially the eventdetails is collapsed, so its set as False until its expanded(True). since it is a ref, change in its .value will trigger UI update.
const isExpanded = ref(false)

function toggleEventDetails() {
  // checks the current value of isEXpanded if its true, then set it to false which means collapse the details
  if (isExpanded.value === true) {
    isExpanded.value = false
    // otherwise if isExpanded is false(collapsed), set its value to true(expand)
  } else {
    isExpanded.value = true
  }
}
//LEARN TO USE ARROW FUNCTION

// const toggleDetails = () => {
//   isExpanded.value = !isExpanded.value
// }
</script>

<template>
  <div class="event-card" @click="toggleEventDetails">
    <!-- Summary view (this is always visible on the event card) -->
    <div class="summary">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>

    <!-- Detailed view -->
    <transition name="fade">
      <div v-if="isExpanded" class="details">
        <p><strong>Category:</strong> {{ event.category }}</p>
        <p><strong>Description:</strong> {{ event.description }}</p>
        <p><strong>Location:</strong> {{ event.location }}</p>
        <p><strong>Organizer:</strong> {{ event.organizer }}</p>
        <p><strong>Pets Allowed:</strong> {{ event.petsAllowed ? 'Yes' : 'No' }}</p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
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
  /* padding: 15px; */
  background-color: #2c3e50;
  color: #fff;
  border-radius: 6px;
}

.details p {
  margin: 8px 0;
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
</style>
