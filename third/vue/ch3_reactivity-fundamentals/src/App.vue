<script setup>
import { reactive } from 'vue'
import { nextTick } from 'vue'
import { ref } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
  nextTick(() => {
    // 访问更新后的 DOM
  })
}

// 响应式代理对象等 != 原始对象
const raw = {}
const proxy = reactive(raw)
console.log(proxy === raw) // false

// ref()定义响应式变量
const count = ref(0)
function incrementRef() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>

  <br>
  <button @click="incrementRef">
    {{ count }}
  </button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
