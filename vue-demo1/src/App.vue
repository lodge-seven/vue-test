<template>
  <div id="app">
    <router-link to="/">主页</router-link>
    <router-link to="/content/123">内容</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log('lq：创建了App.vue实例对象哦~')
  }
}
</script>
