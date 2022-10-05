<script setup>
import { ref } from 'vue'
import Declaration from './Declaration.vue'
import PassingDetails from './PassingDetails.vue'

const post = ref({
  title: 'title001',
  likes: 125,
  isPublished: true,
  commentIds: [234, 266, 273],
})

// props校验:
// defineProps({
//   // 基础类型检查
//   // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
//   propA: Number,
//   // 多种可能的类型
//   propB: [String, Number],
//   // 必传，且为 String 类型
//   propC: {
//     type: String,
//     required: true
//   },
//   // Number 类型的默认值
//   propD: {
//     type: Number,
//     default: 100
//   },
//   // 对象类型的默认值
//   propE: {
//     type: Object,
//     // 对象或数组的默认值
//     // 必须从一个工厂函数返回。
//     // 该函数接收组件所接收到的原始 prop 作为参数。
//     default(rawProps) {
//       return { message: 'hello' }
//     }
//   },
//   // 自定义类型校验函数
//   propF: {
//     validator(value) {
//       // The value must match one of these strings
//       return ['success', 'warning', 'danger'].includes(value)
//     }
//   },
//   // 函数类型的默认值
//   propG: {
//     type: Function,
//     // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
//     default() {
//       return 'Default function'
//     }
//   }
// })
</script>

<template>
  <!--Props 声明和使用-->
  <Declaration title="title321" :likes=100></Declaration>

  <!--传递 prop 的细节-->
  <!--Prop 名字格式-->
  <PassingDetails greeting-message="hello"></PassingDetails>
  <!--静态 vs. 动态 Prop-->
  <passing-details title="My journey with Vue" :likes="12" :is-published="false" :comment-ids="[234, 266, 273]" :author="{name: 'tom', company: 'abc'}"></passing-details>
  <PassingDetails :title="post.title" :likes="post.likes" :is-published="post.isPublished" :comment-ids="post.commentIds"></PassingDetails>
</template>
