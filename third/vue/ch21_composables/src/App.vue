<script setup>
import { ref, computed } from 'vue'
import { useMouse1 } from './mouse1.js'
import { useMouse2 } from './mouse2.js'
import { useFetch } from './useFetch.js'

const { x1, y1 } = useMouse1()

const { x2, y2 } = useMouse2()

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
const id = ref('1')
const url = computed(() => baseUrl + id.value)

const { data, error, retry } = useFetch(url)
</script>

<template>
  <p>Mouse is at: {{ x1 }}, {{ y1 }}</p>

  <p>Mouse is at: {{ x2 }}, {{ y2 }}</p>

  Load post id:
  <button v-for="i in 5" @click="id = i">{{ i }}</button>

  <div v-if="error">
    <p>Oops! Error encountered: {{ error.message }}</p>
    <button @click="retry">Retry</button>
  </div>
  <div v-else-if="data">Data loaded: <pre>{{ data }}</pre></div>
  <div v-else>Loading...</div>
</template>
