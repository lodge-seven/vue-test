// es6的编译补丁
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
// Vue.config.productionTip = false
import 'common/stylus/index.styl'

// 快速点击，去掉延迟
fastclick.attach(document.body)

// console.log(App)
/* eslint-disable no-new */
/* h 是creatElement的简写，代表了一个异步函数，用来生成虚拟dom数，是可以嵌套的creatElement('string', ['string', creatElment(...)])
  用babel插件写jsx会更快一点
  render: h => h(App) App是jsx语法 */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
