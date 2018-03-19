/*
  1 游览器同源，不同源的数据浏览器无法接受，但是服务器还是可以传过来，只是被拦截了
  2 现在要浏览器不拦截，需要浏览器支持的请求
  3 ajax报同源错误，但脚本不会，动态生成一个脚本
  4 脚本请求一个跨域服务器地址，请求成功，服务器传值一个js执行语句，这个语句会调用前端的一个方法，参数就传在回调里，等待前端调用
*/
import originJSONP from 'jsonp'

// 默认导出一个变量，函数，模块
/*
  export default { json的参数 } function(){}
*/
export default jsonp

/*
  jsonp 封装类
  option 返回的方法名
  originJSONP 自动生成一个脚本，请求url，里面前端调用的函数名是option，之后回调中的数据返回data，这里指定正确态和错误态，即返回promise对象
*/
function jsonp(url, data, option) {
  // 判断url中有没有?携带参数，有的话加&，没有的话加?，后面携带data组成的携带参数哦
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  console.log('组个url', url)

  // 返回一个primise对象
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    // 拼接url
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}