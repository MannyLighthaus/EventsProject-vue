<script setup>
// Import useRoute from vue-router to access route parameters (e.g., the event ID from the URL)
import { useRoute } from 'vue-router'
// Import ref and onMounted from Vue for reactive state and lifecycle management
import { ref, onMounted } from 'vue'
//impoort EventService to fetch events from the server
import EventService from '@/services/EventServices.js'

// route instance using useRoute to access the current route's parameter(id)
const route = useRoute()
// reactive ref  created to store the event data, initially set to null
const event = ref(null)

// Use onMounted lifecycle hook to run code after the component is mounted to the DOM
onMounted(() => {
  const eventId = route.params.id

  EventService.getEventById(eventId)
    // handling successful response
    .then((response) => {
      // update events ref with event data from server
      event.value = response.data
      console.log('event:', response.data)
    })
})
</script>

<template>
  <div class="event-details-container">
    <div v-if="event" class="event-details">
      <h1>{{ event.title }}</h1>

      <!-- DATE -->
      <div class="event-details-info">
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
        <p class="time-date">{{ event.date }}</p>
      </div>

      <!-- TIME -->
      <div class="event-details-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#2c3e50;"
        >
          <path
            d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"
          />
        </svg>
        <p class="time-date">{{ event.time }}</p>
      </div>

      <!-- LOCATION -->
      <div class="event-details-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#2c3e50;"
        >
          <path
            d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
          />
        </svg>
        <p class="time-date">{{ event.location }}</p>
      </div>

      <hr />

      <div class="details">
        <p><strong>Category:</strong> {{ event.category }}</p>
        <p><strong>Description:</strong> {{ event.description }}</p>

        <p><strong>Organizer:</strong> {{ event.organizer }}</p>
        <p><strong>Pets Allowed:</strong> {{ event.petsAllowed ? 'Yes' : 'No' }}</p>
      </div>

      <hr />

      <router-link to="/" class="back-link">Back to Events</router-link>
    </div>
    <!-- <div v-else class="not-found">
      <h1>Event Not Found</h1>
      <p>Could not find an event with ID {{ route.params.id }}</p>
      <router-link to="/">Back to Events</router-link>
    </div> -->
  </div>
</template>

<style scoped>
.event-details-container {
  /* min-height: calc(100vh - 90px); */
  /* background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.event-details {
  /* max-width: 600px; */
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
  margin-top: 0;
}

.details {
  /* background-color: #2c3e50; */
  color: #2c3e50;
  padding: 15px;
  border-radius: 6px;
  text-align: start;
}

.details p {
  margin: 8px 0;
}

.details strong {
  color: #2c3e50;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 5px;
}

.back-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #ff6f61;

  font-weight: bold;
}

.back-link:hover {
  color: #2c3e50;
}

.not-found {
  text-align: center;
  margin-top: 40px;
}

.not-found h1 {
  color: #2c3e50;
}

.event-details-info {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  margin-top: 10px;
}
</style>
