<template>
    <div>
        <Header></Header>
        <div class="article_list" >
          <!-- <img src="static/image/one/good.jpg" alt="hh"> -->
          <ul>
            <!-- time自定义的标签，html5允许 -->
            <li v-for="i in list" :key="i.id">
              <time v-text="$utils.goodTime(i.create_at)"></time>
              <router-link :to="'/content/'+ i.id">
                {{ i.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
/* 严格的两个空格啊 */
import Header from '../components/header'
import Footer from '../components/footer'

export default {
  component: { Header, Footer },
  /* data: function(){}的简写，约定了不能使用变量json直接作用到data中 */
  data () {
    return {
      /* 先要初始化，就像预处理一样 */
      list: []
    }
  },
  /* 生命周期钩子，创建实例化对象 */
  created () {
    // Vue实例中的全局对象
    // console.log(this.$api)
    console.log('lq：创建了index.vue实例对象哦~')
    // var root = 'http://cnodejs.org/api/v1'
    // var root = '/api/v1'
    /* 这样就跨域了，用反向代理进行域名重定向 */
    // var root = 'http://121.201.67.222:20111/Tpl/admin'
    // var root = '/Tpl/admin'
    // this.$api.get('topics', null, root, (r) => {
    //   console.log(r)
    // })
    this.getData()
  },
  /* 创建节点数据 */
  mounted () {
    console.log('lq：创建了index.vue节点数据哦~')
  },
  methods: {
    getData () {
      const root = '/api/v1'
      this.$api.get('topics', null, root, (r) => {
        console.log('lq：在index.vue中使用ajax请求接口哦~')
        this.list = r.data
      })
    }
  }
}
</script>

<style>
.article_list {
  background: url('../../static/image/one/good.jpg') no-repeat center/cover;
}
</style>
