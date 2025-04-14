<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <main>
    <p>The Current Score is ....</p>
    <h1>{{ count }}</h1>
    <button @click="count--">-</button>
    <button @click="count++">+</button>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;

  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
