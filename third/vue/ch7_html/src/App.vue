<script setup>
import { ref, reactive, computed } from 'vue'

// 1.v-for
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const parentMessage = ref('Parent')

// 2.v-for与对象
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

// 3.在v-for里使用范围值 (n从1开始)

// 4.v-for与v-if
const todos = reactive([
  {
    name: 'tom',
    complete: true
  },
  {
    name: 'jerry',
    complete: false
  }
])

// 5.通过 key 管理状态
const items2 = ref([
  {
    id: 1,
    name: 'tom',
  },
  {
    id: 2,
    name: 'jerry',
  },
])

// 6.数组变化侦测
defineProps(['title'])
defineEmits(['remove'])
const newTodoText = ref('')
const todos2 = ref([
  {
    id: 1,
    title: 'aaa',
  },
  {
    id: 2,
    title: 'bbb',
  },
  {
    id: 3,
    title: 'ccc',
  }
])
let nextTodoId = 4
function addNewTodo() {
  todos2.value.push({
    id: nextTodoId++,
    title: newTodoText.value
  })
  newTodoText.value = ''
}

// 7.展示过滤或排序后的结果
const numbers = ref([1, 2, 3, 4, 5])
const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])
function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}
</script>

<template>
  <li v-for="item in items" >{{ item.message }}</li>

  <li v-for="(item, index) in items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li>

  <ul>
    <li v-for="value in myObject">{{ value }}</li>
  </ul>

  <ul>
    <li v-for="(value, key) in myObject">{{ key }} : {{ value }}</li>
  </ul>

  <ul>
    <li v-for="(value, key, index) in myObject">{{ index }} . {{ key }} : {{ value }}</li>
  </ul>

  <span v-for="n in 10">{{ n }}</span>

  <ul v-for="todo in todos">
    <li v-if="!todo.complete">{{ todo.name }}</li>
  </ul>

  <ul>
    <li v-for="item in items2" :key="item.id">{{ item.name }}</li>
  </ul>

  <ul>
    <li v-for="n in evenNumbers">{{ n }}</li>
  </ul>

  <ul v-for="numbers in sets">
    <li v-for="n in even(numbers)">{{ n }}</li>
  </ul>

  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
    />
    <button>Add</button>
  </form>
  <ul>
    <li v-for="(todo, index) in todos2" :key="todo.id">
      {{ todo.title }}
      <button @click="todos2.splice(index, 1)">Remove</button>
    </li>
  </ul>
</template>
