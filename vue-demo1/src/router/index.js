import Vue from 'vue'
import Router from 'vue-router'
/* @绝对路径配置，在webpack.base.conf中 */
import HelloWorld from '@/components/HelloWorld'
/* 匹配，先找vue文件，没有就找目录。是目录的话，找的是下面的index.js文件 */
import Index from '@/page/index'
import Content from '@/page/content'
import { name1, name2 } from '@/router/demo1.js'

/*  注册咯，全局组件，在vue中使用这个第三方，这样第三方可以拿到vue对象
    这个方法是vue提供给第三方用于install的方法哦
*/
Vue.use(Router)

/* eslint，加载的变量必须要使用，不然报错，有时候注释还不能留空格唉 */
/*  #/这样的路由 这个路由的第三方来自vue-router 输出一个路由实例
    es6的模块功能，export对外输出模块，import加载这个接口的模块
    export与export default都可以导出常量，函数，文件，模块，只是export default唯一且不需要加{}，因为它不需要知道加载模块的变量名
    栗子就是name1和name2
*/
console.log('lq：拿取router加载的普通变量哦~')
console.log(name1, name2)

/* 定义路由，组件放在page中，随便了。 */
const routes = [
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    component: Index
  },
  {
    path: '/content/:id',
    component: Content
  }
]

/*  返回一个路由实例对象，这里可以参数是函数，可以是json */
export default new Router({
  routes
})
