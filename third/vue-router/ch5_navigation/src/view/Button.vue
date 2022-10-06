<template>
  <div>Button</div>
  <button @click="jump1">btn1</button>
  <button @click="jump2">btn2</button>
  <button @click="jump3">btn3</button>
  <button @click="jump4">btn4</button>
  <button @click="jump5">btn5</button>
  <button @click="jump6">btn6</button>
  <button @click="jump7">btn7</button>
  <button @click="jump8">btn8</button>
  <button @click="jump9">btn9</button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router)

// 字符串路径
function jump1() {
  router.push('/about')
}

// 带有路径的对象
function jump2() {
  router.push({path: '/about'})
}

// 命名的路由: 不带参数
function jump3() {
  router.push({name: 'about'})
}

// 命名的路由: 带参数
function jump4() {
  router.push({name: 'user', params: {id: 321}})
}

// 带查询参数, 结果是: /user/321?key=val
function jump5() {
  router.push({name: 'user', params: {id: 321}, query: {key: 'val'}})
}

// 带hash, 结果是: /about#team
function jump6() {
  router.push({path: '/about', hash: '#team'})
}

// 与router.push类似, 但不会向history添加记录
function jump7() {
  router.replace({name: 'about'})
}

// 前进
function jump8() {
  router.go(1)
  // 等价于 router.forward()
}

// 后退
function jump9() {
  router.go(-1)
  // 等价于 router.back()
}
</script>
