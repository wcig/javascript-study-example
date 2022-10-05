<script setup>
import { ref } from 'vue'
import FancyButton from './FancyButton.vue'
import AwesomeIcon from './AwesomeIcon.vue'
import SubmitButton from './SubmitButton.vue'
import BaseLayout from './BaseLayout.vue'
import MyComponent from './MyComponent.vue'
import FancyList from './FancyList.vue'
import MouseTracker from './MouseTracker.vue'

const msg = ref('hello')
</script>

<template>
  <!--1.插槽内容与出口-->
  <FancyButton>
    Click me <!-- slot content -->
  </FancyButton>
  <br/>

  <FancyButton>
    <span>Click me</span>
    <AwesomeIcon/>
  </FancyButton>
  <br/>

  <!--2.渲染作用域-->
  <span>
    {{ msg }}
  </span>
  <FancyButton>
    {{ msg }}
  </FancyButton>
  <br/>

  <!--3.默认内容-->
  <SubmitButton></SubmitButton>
  <SubmitButton>ParentSubmit</SubmitButton>

  <!--4.具名插槽-->
  <BaseLayout>
    <template #header>
      <h1>Here might be a page title</h1>
    </template>

    <template #default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </BaseLayout>
  <br/>

  <!--5.作用域插槽-->
  <MyComponent v-slot="slotProps">
    {{ slotProps.text }} {{ slotProps.count }}
  </MyComponent>
  <br/>

  <FancyList :api-url="url" :per-page="10">
    <template #item="{ body, username, likes }">
      <div class="item">
        <p>{{ body }}</p>
        <p class="meta">by {{ username }} | {{ likes }} likes</p>
      </div>
    </template>
  </FancyList>
  <br/>

  <!--无渲染组件-->
  <MouseTracker v-slot="{ x, y}">
    Mouse is at: {{ x }}, {{ y }}
  </MouseTracker>
</template>

<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
