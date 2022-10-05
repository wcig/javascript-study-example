<script setup>
import i18nPlugin from './i18n.js'
import { createApp } from "vue"

const app = createApp({})
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})
</script>

<template>
  <!--App.vue:14 Uncaught TypeError: _ctx.$translate is not a function-->
  <h1>{{ $translate('greetings.hello') }}</h1>
</template>
