<template>
  <p>msg to child: {{ defaultMsg }}</p>
</template>

<script setup>
import { inject } from 'vue'

const defaultMsg = inject('defaultMsg')
console.log(defaultMsg) // ok
</script>
