<template>
  <div>User {{ $route.params.id }}</div>
  <div>User {{ id }}</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

// $route信息
const route = useRoute()
console.log(route)
console.log(route.params.id)

const id = ref(route.params.id)
</script>
