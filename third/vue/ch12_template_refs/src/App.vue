<script setup>
import { ref, onMounted, watchEffect } from 'vue'

// 1.访问模版引用
const input = ref(null)
onMounted(() => {
  input.value.focus()
})
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
})

// 2.v-for中的模版引用
const list = ref([
  1, 2, 3, 4, 5
])
const itemRefs = ref([])
onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <input ref="input" />

  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>
