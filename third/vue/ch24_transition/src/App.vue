<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const show1 = ref(true)
const show2 = ref(true)
const show3 = ref(true)

function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1
  })
}

function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)'
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  })
}
</script>

<template>
  <!--1.<Transition> 组件-->
  <button @click="show1 = !show1">Toggle</button>
  <Transition>
    <p v-if="show1">hello</p>
  </Transition>
  <br/>

  <!--2.基于 CSS 的过渡效果-->
  <button @click="show2 = !show2">Toggle Slide + Fade</button>
  <Transition name="slide-fade">
    <p v-if="show2">hello</p>
  </Transition>
  <br/>

  <!--3.JavaScript钩子-->
  <button @click="show3 = !show3">Toggle js hook</button>
  <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      :css="false">
    <div class="gsap-box" v-if="show3"></div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.gsap-box {
  background: #42b883;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
