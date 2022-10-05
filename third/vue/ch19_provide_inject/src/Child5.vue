<template>
  <p>msg to child: {{ readonlyCount }}</p>
</template>

<script setup>
import { inject } from 'vue'

const readonlyCount = inject('readonlyCount')
console.log('before:', readonlyCount.value) // before: 111
readonlyCount.value++
console.log('after:', readonlyCount.value) // after: 111
</script>
