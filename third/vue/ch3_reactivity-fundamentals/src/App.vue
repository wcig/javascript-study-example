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
