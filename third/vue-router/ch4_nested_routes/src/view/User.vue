<template>
  <div>User {{ id }}</div>
  <p><router-link to="/user/123">User Home</router-link> |
    <router-link to="/user/123/profile">User Profile</router-link> |
    <router-link to="/user/123/posts">User Posts</router-link>
  </p>
  <router-view></router-view>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

// $route信息
const route = useRoute()
console.log(route)
console.log(route.params.id)

const id = ref(route.params.id)
</script>
