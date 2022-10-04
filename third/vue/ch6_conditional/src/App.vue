<script setup>
import { ref } from 'vue'

// 1.条件绑定
// 1) v-if, v-else, v-else-if
const awesome = ref(true)

const type = ref('D')

// 2) v-show (修改的display属性)
const show = ref(true)
</script>

<template>
  <button @click="awesome = !awesome">Toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no</h1>

  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>

  <div v-show="show">Hello!</div>
</template>
