<script setup>
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <!--自动对焦-->
  <input v-focus placeholder="This should be focused">
</template>
