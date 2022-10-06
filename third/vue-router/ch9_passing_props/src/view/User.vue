<template>
  <div>User Name {{ username }}</div>
  <div>User Name {{ props.username }}</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

// 获取参数方式一: useRoute
const route = useRoute()
console.log(route.params)
const username = ref(route.params.username)

// 获取参数方式二: props
const props = defineProps(['username'])
console.log(props)
</script>
