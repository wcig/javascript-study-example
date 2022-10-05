<template>
  <p>
    Message to grand child: {{ msg2 }}
  </p>
</template>

<script setup>
import { inject } from 'vue'

const msg2 = inject('msg2')
console.log(msg2.value) // hello2
</script>