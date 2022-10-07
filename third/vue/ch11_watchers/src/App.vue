<script setup>
import { ref, watch, reactive } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const user = reactive({name: 'tom'})

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  console.log('old:', oldQuestion)
  console.log('new:', newQuestion)

  // if (newQuestion.indexOf('?') > -1) {
  //   answer.value = 'Thinking...'
  //   try {
  //     const res = await fetch('https://yesno.wtf/api')
  //     answer.value = (await res.json()).answer
  //   } catch (error) {
  //     answer.value = 'Error! Could not reach the API. ' + error
  //   }
  // }
})

// 深层监听器: 监听对象支持深层修改, 但此时新旧值为同一个对象, 获取不到旧的值.
watch(user, (newValue, oldValue) => {
  console.log(newValue === oldValue) // true
  const newUserName = newValue.name
  const oldUserName = oldValue.name
  console.log(newUserName, oldUserName) // jerry jerry
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <br/>

  <p>{{ user.name }}</p>
  <button @click="user.name='jerry'">modify-username</button>
</template>
