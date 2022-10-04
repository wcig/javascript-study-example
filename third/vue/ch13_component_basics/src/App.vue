<script setup>
import { ref } from 'vue'
import ButtonCounter from './ButtonCounter.vue'
import BlogPost from './BlogPost.vue'
import AlertBox from './AlertBox.vue'
import Home from './Home.vue'
import Posts from './Posts.vue'
import Archive from './Archive.vue'

const posts = ref([
  {
    id: 1,
    title: '111',
  },
  {
    id: 2,
    title: '222',
  },
  {
    id: 3,
    title: '333',
  },
])

const postFontSize = ref(1)

const currentTab = ref('Home')
const tabs = {
  Home,
  Posts,
  Archive
}
</script>

<template>
  <!--1.使用组件-->
  <h1>Here is a child component!</h1>
  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />

  <!--2.传递props 3.监听事件-->
  <BlogPost title="ok"/>
  <div :style="{ fontSize: postFontSize + 'em'}">
    <BlogPost v-for="item in posts"
              :id="item.id"
              :title="item.title"
              @enlarge-text="postFontSize += 0.1"
    ></BlogPost>
  </div>

  <!--4.通过插槽来分配内容-->
  <AlertBox>
    Something bad happened.
  </AlertBox>

  <!--5.动态组件-->
  <div class="demo">
    <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]" class="tab"></component>
  </div>
</template>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
