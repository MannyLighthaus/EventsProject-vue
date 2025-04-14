<!-- <script setup>
//Import the veventcard component to display individual events.
import EventCard from '@/components/EventCard.vue'
//import ref and onMounted from Vue for reactive state and lifecycle management
import { ref, onMounted } from 'vue'
//impoort EventService to fetch events from the server
import EventService from '@/services/EventServices.js'

//reactive ref created tob store events data, stinitially to null
const events = ref(null)

//when component is mounted, it should call out events from the server use onMounted lifecycle hook to fetch events
onMounted(() => {
  // call the getRvents method from EventService to fetch events
  EventService.getEvents()
    // handling successful response
    .then((response) => {
      // update events ref with event data from server
      events.value = response.data
      console.log('events:', response.data)
    })
    // handling error response
    .catch((error) => {
      //store the error message to display to the user
      error.value = 'Failed to load events. Please try again later.'
      console.log(error)
    })
})
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
</style> -->

<script setup>
// Import the EventCard component to display individual events
import EventCard from '@/components/EventCard.vue'
// Import ref and onMounted from Vue for reactive state and lifecycle management
import { ref, onMounted } from 'vue'
// Import EventService to fetch events from the server
import EventService from '@/services/EventServices.js'

// Create a reactive ref to store the events data, initially set to null
const events = ref(null)
// Create a reactive ref to track the loading state, initially set to true
const isLoading = ref(true)
// Create a reactive ref to store any error messages, initially set to null
const error = ref(null)

// Use onMounted lifecycle hook to fetch events when the component is mounted
onMounted(() => {
  // Call the getEvents method from EventService to fetch events
  EventService.getEvents()
    // Handle the successful response
    .then((response) => {
      // Update the events ref with the fetched data from the server
      events.value = response.data
      // Log the fetched events for debugging
      console.log('Events fetched successfully:', response.data)
    })
    // Handle any errors during the fetch
    .catch((err) => {
      // Store the error message to display to the user
      error.value = 'Failed to load events. Please try again later.'
      // Log the error for debugging
      console.error('Error fetching events:', err)
    })
    // Finally block to ensure isLoading is set to false after the fetch (success or failure)
    .finally(() => {
      // Set loading to false once the fetch operation is complete
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
/* Style the events container to center its content and match the previous design */
.events {
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center children horizontally */
  min-height: calc(
    100vh - 90px
  ); /* Ensure the container fills the viewport height minus the header */
  background: linear-gradient(
    135deg,
    #ffecd2 0%,
    #fcb69f 100%
  ); /* Peach-to-coral gradient background */
  padding: 20px; /* Add padding around the content */
}

/* Style the heading */
h1 {
  font-family: Arial, Helvetica, sans-serif; /* Use a sans-serif font stack */
  color: #2c3e50; /* Dark teal color for the heading */
  margin: 20px 0; /* Add vertical margin for spacing */
}

/* Style the event cards container to display cards in a grid */
.event-cards {
  display: grid; /* Use CSS Grid for layout */
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* Create a responsive grid with columns at least 250px wide */
  gap: 20px; /* Add spacing between grid items */
  width: 100%; /* Ensure the grid takes the full width */
  max-width: 1200px; /* Limit the maximum width for readability */
}

/* Style the loader container to center the spinner and text */
.loader-container {
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack the spinner and text vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  min-height: calc(100vh - 90px); /* Match the container height for centering */
}

/* Style the loader spinner */
.loader {
  width: 40px; /* Set the width of the spinner */
  height: 40px; /* Set the height of the spinner */
  border: 4px solid #ffecd2; /* Light peach border for the spinner */
  border-top: 4px solid #ff6f61; /* Coral border for the spinning effect */
  border-radius: 50%; /* Make the spinner circular */
  animation: spin 1s linear infinite; /* Apply the spinning animation */
}

/* Style the loading text */
.loader-container p {
  color: #2c3e50; /* Dark teal color for the text */
  margin-top: 10px; /* Add space above the text */
  font-size: 16px; /* Set the font size */
}

/* Style the error message */
.error {
  text-align: center; /* Center the text */
  color: #ff6f61; /* Coral color for the error message */
  min-height: calc(100vh - 90px); /* Match the container height for centering */
  display: flex; /* Use flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
}

/* Style the "no events" message */
.no-events {
  color: #2c3e50; /* Dark teal color for the message */
  font-size: 18px; /* Slightly larger font size */
  text-align: center; /* Center the text */
  margin-top: 20px; /* Add space above the message */
}

/* Keyframes for the spinner animation */
@keyframes spin {
  0% {
    transform: rotate(0deg); /* Start at 0 degrees */
  }
  100% {
    transform: rotate(360deg); /* Rotate to 360 degrees for a full spin */
  }
}
</style>
