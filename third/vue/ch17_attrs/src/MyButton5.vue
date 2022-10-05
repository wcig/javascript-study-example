<template>
  <div class="btn-wrapper">
    <button class="btn" v-bind="$attrs">click me</button>
  </div>
</template>

<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>

<script setup>
</script>

<style>
.btn-wrapper {
  padding: 6px;
}
.btn {
  background-color: green;
}
</style>