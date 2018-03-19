<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper">
        <slider>
          <div v-for="item in recommends" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import { getRecommend } from 'api/recommend.js'
import { ERR_OK } from 'api/config.js'

export default {
  data() {
    return {
      recommends: []
    }
  },
  created() {
    // 生命周期：创建虚拟dom对象时调用jsonp数据
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
          console.log(res.data.slider)
        }
      })
    }
  },
  components: {
    Slider
  }
}

</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
/*
  推荐相关：
  弹性布局，里面有轮播图
*/
.recommend
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
    height: 100%
    overflow: hidden
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden
    .recommend-list
      height: 65px
      line-height: 65px
      text-align: center
      font-size: $font-size-medium
      color: $color-theme
    .item
      display: flex
      box-sizing: border-box
      align-items: center
      padding: 0 20px 20px 20px
    .text
      display: flex
      flex-direction: column
      justify-content: center
      flex: 1
      line-height: 20px
      overflow: hidden
      font-size: $font-size-medium
      .name
        margin-bottom: 10px
        color $color-text
      .desc
        color: $color-text-dark
.loading-container
  position: absolute
  width: 100%
  top: 50%
  transform: translateY(-50%)
</style>
