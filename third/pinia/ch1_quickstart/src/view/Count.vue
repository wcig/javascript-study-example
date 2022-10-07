<template>
  <h3>Store id: {{ countStore.$id }}</h3>

  <p>count: {{ count }}, double count: {{ doubleCount }}</p>
  <button @click="increment">Add 1</button>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCountStore } from '../stores/modules/count.js'

const countStore = useCountStore()
console.log(countStore)
console.log(countStore.$id) // count
console.log(countStore.secret) // 123456

const { count, doubleCount } = storeToRefs(countStore)
const { increment } = countStore
</script>
