<template>
  <h2>passing-details</h2>
  <p>greetingMessage: {{ greetingMessage }}, title: {{ title }}, likes: {{ likes }}, isPublished: {{ isPublished }}, commentIds: {{ commentIds }}, author: name: {{ author.name }} company: {{ author.company }}</p>
</template>

<script setup>
const props = defineProps({
  greetingMessage: String,
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: {
    type: Object,
    default: {
      name: 'default-name',
      company: 'default-company',
    },
  },
})
</script>
