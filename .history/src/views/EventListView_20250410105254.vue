<script setup>
//Import the veventcard component to display individual events.
import EventCard from '@/components/EventCard.vue'
//import ref and onMounted from Vue for reactive state and lifecycle management
import { ref, onMounted } from 'vue'
//impoort EventService to fetch events from the server
import EventService from '@/services/EventServices.js'

//reactive ref created tob store events data, initially to null
const events = ref(null)
// reactive ref created to track the loading state, initially set to true
const isLoading = ref(true)
// reactive ref created to store any error messages, initially set to null
const error = ref(null)

//when component is mounted, it should call out events from the server use onMounted lifecycle hook to fetch events
onMounted(() => {
  // call the getEvents method from EventService to fetch events
  EventService.getEvents()
    // handling successful response
    .then((response) => {
      // update events ref with event data from server
      events.value = response.data
      console.log('events:', response.data)
    })
    // handling error response
    .catch((err) => {
      // error.value = err.data
      //store the error message to display to the user
      error.value = 'Failed to load events. Please try again later.'
      console.log(err)
    })

    // Finally block to ensure isLoading is set to false after the fetch (success or failure)
    .finally(() => {
      //set the loading to false once the fetch operation is complete.
      isLoading.value = false
    })
})
</script>

<template>
  <!-- Container div for the events list -->
  <div class="events">
    <!-- Display the page loader while isLoading is true -->
    <div v-if="isLoading" class="loader-container">
      <!-- Spinner animation for the loader -->
      <div class="loader"></div>
      <!-- Loading message for the user -->
      <p>Loading events...</p>
    </div>
    <!-- Display an error message if there's an error -->
    <div v-else-if="error" class="error">
      <!-- Show the error message -->
      <p>{{ error }}</p>
    </div>
    <!-- Display the events list if loading is complete and there's no error -->
    <div v-else>
      <!-- Display the page title -->
      <h1>Upcoming Events</h1>
      <!-- Check if events array is not empty before rendering EventCards -->
      <div v-if="events && events.length" class="event-cards">
        <!-- Loop through the events array and render an EventCard for each event -->
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </div>
      <!-- Display a message if no events are found -->
      <p v-else class="no-events">No events found.</p>
    </div>
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

/* Style the loader container to center the spinner and text */
.loader-container {
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack the spinner and text vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  /* min-height: calc(100vh - 90px); Match the container height for centering */
}

/* Style the loader spinner */
.loader {
  width: 40px; /* Set the width of the spinner */
  height: 40px; /* Set the height of the spinner */
  border: 4px solid #ffecd2; /* Light peach border for the spinner */
  border-top: 4px solid #ff6f61; /* Coral border for the spinning effect */
  border-radius: 50%; /* Make the spinner circular */
  animation: spin 1s linear infinite; Apply the spinning animation
}

/* Style the loading text */
.loader-container p {
  color: #2c3e50; /* Dark teal color for the text */
  margin-top: 10px; /* Add space above the text */
  font-size: 16px; /* Set the font size */
}
</style>
