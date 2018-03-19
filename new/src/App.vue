<template>
  <div id="app">
    <Top/>
    <Content/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Top from './components/Top'
import Content from './components/Content'
export default {
  name: 'App',
  components: {
    Top,
    Content
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
