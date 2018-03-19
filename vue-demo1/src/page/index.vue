<template>
    <div>
      <div class="main-container">
        <div class="sidebar">
            <h1 class="logo">小七管理平台</h1>
            <ul class="sidebar-list">
              <li>
                <a href="#" class="d-block"><img src="../img/fenrun-1.png" alt="分润">分润记录</a>
              </li>
              <li>
                <a href="#" class="d-block"><img src="../img/shangpin.png" alt="分润">商城商品</a>
              </li>
            </ul>
        </div>
        <!-- <iframe class="main-frame"  src="./shop.html" frameborder="0"></iframe> -->
      </div>
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
