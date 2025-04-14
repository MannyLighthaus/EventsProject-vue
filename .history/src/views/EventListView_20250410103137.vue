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
