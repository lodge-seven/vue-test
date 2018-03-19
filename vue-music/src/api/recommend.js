import jsonp from 'common/js/jsonp'
import { commonParams, options } from 'api/config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platfrom: 'h5', // 请求来源
    uin: 0,
    needNewCode: 1
  })

  // 返回一个promise对象
  return jsonp(url, data, options)
}
