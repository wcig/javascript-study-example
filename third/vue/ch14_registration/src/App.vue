<script setup>
import LocalComponent from './LocalComponent.vue'
import GlobalComponent from './GlobalComponent.vue'
import { createApp } from "vue"

const app = createApp({})
app.component('GlobalComponent', GlobalComponent)
</script>

<template>
  <!--全局注册组件-->
  <GlobalComponent></GlobalComponent>

  <!--局部注册组件-->
  <LocalComponent></LocalComponent>
</template>
