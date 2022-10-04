<script setup>
import { ref, reactive, computed } from 'vue'

// 1.绑定 HTML class
// 1) 绑定对象
const isActive = ref(true)
const hasError = ref(false)

const classObject = reactive({
  active: true,
  'text-danger': false
})

const error = ref(null)
const computeClassObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))

// 2) 绑定数组
const activeClass = ref('active')
const errorClass = ref('text-danger')

// 2.绑定内联样式
// 1) 绑定对象
const activeColor = ref('red')
const fontSize = ref(30)

const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})

// 2.绑定数组
const baseStyles = reactive({
  color: 'red'
})
const overridingStyles = reactive({
  fontSize: '14px'
})

</script>

<template>
  <!--<div class="static active"></div>-->
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>

  <!--<div class="active"></div>-->
  <div :class="classObject"></div>

  <!--<div class="active"></div>-->
  <div :class="computeClassObject"></div>

  <!--<dive class="active text-danger"></dive>-->
  <div :class="[activeClass, errorClass]"></div>

  <!--<div style="color: red; font-size: 30px;"></div>-->
  <div :style="{color: activeColor, fontSize: fontSize + 'px'}"></div>

  <!--<div style="color: red; font-size: 30px;"></div>-->
  <div :style="styleObject"></div>

  <!--<div style="color: red; font-size: 14px;"></div>-->
  <div :style="[baseStyles, overridingStyles]"></div>
</template>
