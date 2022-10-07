<script setup>

</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <router-link to="/">Go to Home</router-link> |
    <router-link to="/about">Go to About</router-link> |
    <router-link to="/count">Go to Count</router-link>
  </p>
  <router-view></router-view>
</template>
