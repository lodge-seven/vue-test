// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 加载顺序是按这个代码先后来的，会进入相应文档
import Vue from 'vue'
import App from './App'
import router from './router'
import utils from './utils'
// api里面的index.js 里面有四个方法
import api from './api'
// 这个也可以配置到App这个对象中 也可以在main.js中引用，因为有css-load可以读这个文件
import css from './style/good.css'

/* 阻止 vue 在启动时生成生产提示 就是那一大串说明 */
Vue.config.productionTip = false
/* 原型，跳转到一个新的Vue，会带有一个名为$api的变量 */
Vue.prototype.$api = api
Vue.prototype.$utils = utils

/* 不允许出现分号，不允许单行注释 */
console.log('lq：hi~ 这里是主配置文件哦，这里就像一个最终页面效果哦~')
/* 一个App对象，object类型，里面也有原型链，因为它也是js */
console.log(App)
/* VueRouter对象 */
console.log(router)
/* 测试css-loader 并没打印出什么来啊 */
console.log(css)
/* eslint-disable no-new */
/*  一个实例化对象，App.vue文件是单页面应用，封装了脚本和dom对象，一个项目最好只有一个实例化对象，这里是匿名实例化
    vue文件被webpack生成一个js文件，里面有vue.js这个第三方和我们在这个框架上执行的操作。vue执行，环境搭好，到渲染的时候会先渲染模板，生成<App />，然后App这个组件又进行了一次渲染，调用到路由。
*/
new Vue({
  el: '#app',
  /* VueRoute的对象，调用的是vue-route这个第三方，挂载路由，路由对象在router/index.js文件中创建 */
  router,
  /* 组件，不止一个，可以有多个 */
  components: {
    /*  App是简写，差不多像是：
        App: { template: '<div>你好这是App组件</div>' }
    */
    App
  },
  /* 首先生成，给App组件渲染 */
  template: '<App />'
})
