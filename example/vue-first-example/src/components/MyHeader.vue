<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="header-wrapper">
    <img data-v-4ce31beb="" src="../assets/logo.png" class="header-logo" alt="logo">
    <a class="header-download">下载 APP</a>
  </div>
</template>

<style scoped>
.header-wrapper {
  padding: 0 40px;
  height: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.header-logo{
  flex: 0 1 auto;
  height: 62px;
}

.header-download{
  flex: 0 1 auto;
  display: block;
  color: #64b5ff;
  font-size: 24px;
  border: 2px solid #64b5ff;
  border-radius: 200px;
  height: 54px;
  line-height: 54px;
  padding: 0 32px;
  margin-left: auto;
}
</style>
