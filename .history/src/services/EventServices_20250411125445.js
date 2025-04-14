import axios from 'axios'

// single Axios instance for our app
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/MannyLighthaus/project-vue/events', // base URL for all calls to use
  withCredentials: false,
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvents(id) {
    return apiClient.get('/')
  },
}
