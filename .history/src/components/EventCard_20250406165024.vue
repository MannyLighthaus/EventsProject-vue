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

const isExpanded = ref(false)

// const toggleDetails = () => {
//   isExpanded.value = !isExpanded.value
// }

function toggleDetails() {
  if (isExpanded.value === true) {
    isExpanded.value = false
  } else {
    isExpanded.value = true
  }
}
</script>

<template>
  <div class="event-card" @click="toggleDetails">
    <!-- Summary view -->
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
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.summary {
  margin: 0;
}

.details {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #39495c;
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
