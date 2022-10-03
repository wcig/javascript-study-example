<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 计算属性
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

// 计算属性 vs 方法: 计算属性会缓存,方法总是每次渲染时重新执行.
const now1 = Date.now()
const now2 = computed(() => Date.now())
console.log(now1)
console.log(now2.value)
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>
