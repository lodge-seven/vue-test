<template>
  <div>
      <myHeader></myHeader>
      <h2 v-text="dat.title"></h2>
      <p>作者：{{ dat.name }}  发表于：{{ $utils.goodTime(dat.create_at) }}</p>
      <hr>
      <article v-html="dat.content"></article>
      <h3>网友回复：</h3>
      <ul>
          <li v-for="i in dat.replies" :key="i.id">
              <p>评论者：{{ i.author.loginname }} 评论于：{{ $utils.goodTime(i.create_at) }}</p>
              <article v-html="i.content"></article>
          </li>
      </ul>
      <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '../components/header'
import myFooter from '../components/footer'

export default {
  components: { myHeader, myFooter },
  data () {
    return {
      id: this.$route.params.id,
      dat: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      const root = '/api/v1'
      this.$api.get('topic/' + this.id, null, root, (r) => {
        this.dat = r.data
        this.dat.name = r.data.author.loginname
        // console.log(this.name)
      })
    }
  }
}
</script>
