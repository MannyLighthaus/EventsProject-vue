<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <main>
    <div>
      <p>The Current Score is ....</p>
      <h1>{{ count }}</h1>
      <div class="button">
        <button @click="count--">-</button>
        <button @click="count++">+</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
div {
  display: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
</style>
