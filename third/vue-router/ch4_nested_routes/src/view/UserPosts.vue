<template>
  <div>User Posts</div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params)
</script>
