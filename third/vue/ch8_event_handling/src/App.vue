<script setup>
import { ref} from 'vue'

// 1.内联事件处理器
const count = ref(0)

// 2.方法事件处理器
const name = ref('Vue.js')
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}

// 3.在内联处理器中调用方法
function say(msg) {
  alert(msg)
}

// 4.
function warn(message, event) {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>

<template>
  <button @click="count++">Add 1</button>
  <p>Count is {{ count }}</p>
  <br>

  <button @click="greet">Greet</button>
  <br>

  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>
  <br>

  <!-- 使用特殊的 $event 变量 -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- 使用内联箭头函数 -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>
  <br>
</template>
