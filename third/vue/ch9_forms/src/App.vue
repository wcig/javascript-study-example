<script setup>
import { ref } from 'vue'

// 1.基本用户
// 1) 文本
const msg1 = ref('')

// 2) 多行文本
const msg2= ref('')

// 3) 复选框
const checked = ref(true)

// 4) 多值复选框
const checkedNames = ref([])

// 5) 单选按钮
const picked =ref('One')

// 6) 选择器
const selected = ref('')
const multiSelected = ref('')
</script>

<template>
  <p>Message is {{ msg1 }}</p>
  <input v-model="msg1" placeholder="edit me"/>

  <p>Multiline message is</p>
  <p style="white-space: pre-line">{{ msg2 }}</p>
  <textarea v-model="msg2" placeholder="edit me"></textarea>
  <br>

  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
  <br>

  <div>Checked names: {{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>

  <div>Picked: {{ picked }}</div>
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
  <br>

  <div>Selected: {{ selected }}</div>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <div>Selected: {{ multiSelected }}</div>
  <select v-model="multiSelected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

</template>
