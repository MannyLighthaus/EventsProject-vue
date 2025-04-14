<script setup>
// Import useRoute from vue-router to access route parameters (e.g., the event ID from the URL)
import { useRoute } from 'vue-router'
// Import ref and onMounted from Vue for reactive state and lifecycle management
import { ref, onMounted } from 'vue'

//events array
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

// route instance using useRoute to access the current route's parameter(id)
const route = useRoute()
// reactive ref  created to store the event data, initially set to null
const event = ref(null)

console.log('EventDetails Initial Route Params:', route.params)

// Use onMounted lifecycle hook to run code after the component is mounted to the DOM
onMounted(() => {
  console.log('Component Mounted') // confirm the component has mounted
  console.log('Route Params on Mount:', route.params) // string

  // the route paramater(id) is converted to a number since URLs are textbased and passed as strings in VUE
  const eventId = parseInt(route.params.id)
  console.log('Parsed eventId:', eventId)

  // check if the parsed event id is truly a number, if not return an error
  if (isNaN(eventId)) {
    console.error('Invalid event ID:', route.params.id)
    return
  }
  // find the event that matches the event id
  event.value = events.find((e) => e.id === eventId) || null
  console.log('Found Event:', event.value)
})
</script>

<template>
  <div class="event-details-container">
    <div v-if="event" class="event-details">
      <h1>{{ event.title }}</h1>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#2c3e50;"
        >
          <path
            d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"
          />
        </svg>
        <p class="time-date">{{ event.time }}</p>
      </div>

      <p class="time-date">@{{ event.date }}</p>
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
      <p>Could not find an event with ID {{ route.params.id }}</p>
      <router-link to="/">Back to Events</router-link>
    </div>
  </div>
</template>

<style scoped>
.event-details-container {
  /* min-height: calc(100vh - 90px); */
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.event-details {
  max-width: 600px;
  width: 100%;
  margin: 40px auto;
  padding: 20px;
  background-color: #fef9e7;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

h1 {
  color: #ff6f61;
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
  background-color: #2c3e50;
  color: #fff;
  padding: 15px;
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
