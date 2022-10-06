<script setup>

</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link> |
    <router-link to="/about">Go to About</router-link> |
    <router-link to="/user/123">Go to User</router-link><br/>

    <router-link to="/product/123">Go to Product1</router-link> |
    <router-link to="/product/abc">Go to Product2</router-link><br/>

    <router-link to="/chapter/one/two/three">Go to Chapter1</router-link> |
    <router-link to="/chapter/">Go to Chapter2</router-link><br/>

    <router-link to="/order/one">Go to Order1</router-link> |
    <router-link to="/order/123">Go to Order2</router-link><br/>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>
