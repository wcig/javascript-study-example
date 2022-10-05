<template>
  <p>msg to child: {{ msg }}</p>
</template>

<script setup>
import { inject } from 'vue'

const msg = inject('msg')
console.log(msg) // hello
</script>
