// 用axios封装一个ajax方法
import axios from 'axios'

console.log('lq：api加载哦~')

/* 让一个对象使用转字符串，使用匹配首字母小写 */
function toType (obj) {
  console.log('lq: 这是api里的类型判断方法哦~')
  console.log(obj)
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/* 参数过滤空值哎，有递归 */
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios (method, url, root, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  /*  get使用params携带参 post使用data请求体
      axiossh使用需要配置参数
  */
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
  /*  promise写法 异步结构 先把可能的结果做出处理 事件触发
      success，failure 自定义事件
  */
    .then(function (res) {
      // console.log(res)
      if (res.data.success === true) {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data)
        } else {
          window.alert('error: ' + JSON.stringify(res.data))
        }
      }
    })
    .catch(function (err) {
      let res = err.response
      if (err) {
        window.alert('api出错, HTTP状态码为: ' + res.status)
      }
    })
}

/* 把这四个方法输出 { get, post, put, delete } */
export default {
  get: function (url, params, root, success, failure) {
    return apiAxios('GET', url, root, params, success, failure)
  },
  post: function (url, params, root, success, failure) {
    return apiAxios('POST', url, root, params, success, failure)
  },
  put: function (url, params, root, success, failure) {
    return apiAxios('PUT', url, root, params, success, failure)
  },
  delete: function (url, params, root, success, failure) {
    return apiAxios('DELETE', url, root, params, success, failure)
  }
}
