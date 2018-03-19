<template>
  <div id="app">
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
