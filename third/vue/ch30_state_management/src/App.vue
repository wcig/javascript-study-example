<script setup>
import { ref } from 'vue'
import ComponentA from "./ComponentA.vue"
import ComponentB from "./ComponentB.vue"

// 状态
const count = ref(0)
// 动作
function increment() {
  count.value++
}
</script>

<template>
  <!--视图-->
  <button @click="increment">Add</button>
  <p>{{ count }}</p>
  <br/>

  <ComponentA/>
  <ComponentB/>
</template>
