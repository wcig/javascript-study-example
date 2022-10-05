<script setup>
defineEmits(['someEvent'])
</script>

<template>
  <button @click="$emit('someEvent')">click me</button>
</template>
