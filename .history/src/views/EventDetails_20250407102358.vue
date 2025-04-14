<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

// Sample event data (in a real app, you'd fetch this from an API or store)
const events = [
  {
    id: 5928101,
    category: 'socials',
    title: 'Lagos Trivia Night',
    description: 'Find a new friend at this event.',
    location:
      'POP Landmark, Landmark Boulevard, Plot 2 & 3, Water Corporation Dr, Victoria Island, Lagos.',
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

const route = useRoute()
const event = ref(null)

onMounted(() => {
  const eventId = parseInt(route.params.id) // Convert string to number
  event.value = events.find((e) => e.id === eventId) || null
})
</script>

<template>
  <div class="event-details" v-if="event">
    <h1>{{ event.title }}</h1>
    <p class="time-date">@{{ event.time }} on {{ event.date }}</p>
    <div class="details">
      <p><strong>Category:</strong> {{ event.category }}</p>
      <p><strong>Description:</strong> {{ event.description }}</p>
      <p><strong>Location:</strong> {{ event.location }}</p>
      <p><strong>Organizer:</strong> {{ event.organizer }}</p>
      <p><strong>Pets Allowed:</strong> {{ event.petsAllowed ? 'Yes' : 'No' }}</p>
    </div>
    <router-link to="/" class="back-link">Back to Events</router-link>
  </div>
  <div v-else class="not-found">
    <h1>Event Not Found</h1>
    <router-link to="/">Back to Events</router-link>
  </div>
</template>

<style scoped>
.event-details {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fef9e7; /* Light cream, matching EventCard */
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

h1 {
  color: #ff6f61; /* Coral */
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
}

.time-date {
  color: #2c3e50;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
}

.details {
  background-color: #2c3e50; /* Dark teal, matching EventCard */
  color: #fff;
  padding: 15px;
  border-radius: 6px;
}

.details p {
  margin: 8px 0;
}

.details strong {
  color: #ffecd2; /* Light peach */
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 5px;
}

.back-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #ff6f61;
  text-decoration: none;
  font-weight: bold;
}

.back-link:hover {
  color: #e65a50;
}

.not-found {
  text-align: center;
  margin-top: 40px;
}

.not-found h1 {
  color: #2c3e50;
}
</style>
