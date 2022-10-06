<template>
  <div>User {{ username }}</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

// $route信息
const route = useRoute()
console.log(route)
console.log(route.params)

const username = ref(route.params.username)
</script>
