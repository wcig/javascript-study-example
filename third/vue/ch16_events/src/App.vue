<script setup>
import { ref } from 'vue'
import Simple1 from './Simple1.vue'
import CustomInput from './CustomInput.vue'
import MyComponent from './MyComponent.vue'
import UserName from './UserName.vue'
import FormComponent from './FormComponent.vue'

function simple1Click() {
  alert('simple1 click')
}

const searchTest = ref('hello')

const bookTitle = ref('')

const userName = ref({
  firstName: 'John',
  lastName: 'Doe',
})

const myText = ref('')
</script>

<template>
  <Simple1 @click="simple1Click"></Simple1>
  <br/>

  <CustomInput v-model="searchTest"/> {{ searchTest }}
  <br/>

  <MyComponent v-model:title="bookTitle"/> {{ bookTitle }}
  <br/>

  <h2> {{ userName.firstName }} {{ userName.lastName }}</h2>
  <UserName v-model:first-name="userName.firstName" :last-name="userName.lastName"/>
  <br/>

  <FormComponent v-model.capitalize="myText"/>
</template>
