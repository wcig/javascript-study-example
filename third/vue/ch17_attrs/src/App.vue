<script setup>
import MyButton1 from './MyButton1.vue'
import MyButton2 from './MyButton2.vue'
import MyButton3 from "./MyButton3.vue";
import MyButton4 from "./MyButton4.vue";
import MyButton5 from "./MyButton5.vue";
</script>

<template>
  <!--1.Attributes 继承-->
  <!--<button class="large">click me</button>-->
  <MyButton1 class="large"/>
  <br/>

  <!--<button class="btn large">click me</button>-->
  <MyButton2 class="large"/>
  <br/>

  <!--2.深层组件继承-->
  <!--<button class="large">click me</button>-->
  <MyButton3 class="large"/>
  <br/>

  <!--3.禁用 Attributes 继承-->
  <!--<button class="btn">click me</button>-->
  <MyButton4 class="large"/>
  <br/>

  <!--<div class="btn-wrapper"><button class="btn large">click me</button></div>-->
  <MyButton5 class="large"/>
</template>

<style>
.large {
  font-size: 1.2em;
}
</style>