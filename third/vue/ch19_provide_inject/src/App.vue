<script setup>
import { provide, ref,readonly } from 'vue'
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import Child3 from './Child3.vue'
import Child4 from './Child4.vue'
import Child5 from './Child5.vue'
import Child6 from './Child6.vue'

provide('msg', 'hello')

provide('defaultMsg', 'ok')

const count = ref(123)
provide('count', count)

const msg2 = ref('hello2')
provide('msg2', msg2)

const readonlyCount = ref(111)
provide('readonlyCount', readonly(readonlyCount))

const location = ref('North Pole')
function updateLocation() {
  location.value = 'South Pole'
}
provide('location', {
  location,
  updateLocation
})
</script>

<template>
  <Child1/>

  <child2/>

  <Child3/>

  <Child4/>

  <Child5/>

  <Child6/>
</template>
