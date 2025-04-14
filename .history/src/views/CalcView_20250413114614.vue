<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <p>The Current Score is ....</p>
  <h1>{{ count }}</h1>
  <button @click="subBtn">-</button>
  <button @click="addBtn">+</button>
</template>
