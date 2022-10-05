<template>
  <h2>props-declaration</h2>
  <p>title: {{ title }}, likes: {{ likes }}</p>
</template>

<script setup>
defineProps({
  title: String,
  likes: Number
})
</script>
