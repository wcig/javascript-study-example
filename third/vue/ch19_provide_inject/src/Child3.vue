<template>
  <p>msg to child: {{ count }}</p>
</template>

<script setup>
import { inject } from 'vue'

const count = inject('count')
console.log(count.value) // 123
</script>
