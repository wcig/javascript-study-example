<template>
  <div class="container">
    <header>
      <slot name="header"/>
    </header>

    <slot/>

    <footer>
      <slot name="footer"/>
    </footer>
  </div>
</template>

<style>
footer {
  border-top: 1px solid #ccc;
  color: #666;
  font-size: 0.8em;
}
</style>
