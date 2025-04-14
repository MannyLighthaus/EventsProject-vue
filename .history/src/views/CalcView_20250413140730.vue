<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <main>
    <p>The Current Score is ....</p>
    <h1>{{ count }}</h1>
    <div>
      <button @click="count--">-</button>
      <button @click="count++">+</button>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
</style>
