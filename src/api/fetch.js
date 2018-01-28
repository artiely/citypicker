import axios from 'axios'
import router from '@/router'
import Cookies from 'js-cookie'
import isJSON from 'is-json'
export default function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: '/PT',
      headers: {},
      transformResponse: [(data) => {
        var flag = isJSON(data)
        /* 后台的逻辑, 返回的是报错页面和登录页面就直接跳转登录 */
        if (!flag) {
          console.log('跑到登录逻辑了')
          Cookies.remove('__userInfo')
          router.replace({
            name: 'Login'
          })
          return {
            code: 1000,
            msg: '请登录'
          }
        } else {
          return JSON.parse(data)
        }
      }]
    })
    instance.interceptors.request.use(
      config => {
        return config
      },
      error => {
        console.error(`来自请求的错误:${error}`)
        return Promise.reject(error)
      })

    instance.interceptors.response.use(
      response => {
        console.log('响应结果', response)
        return response
      },
      error => {
        console.error(`来自响应的的错误:${error}`)
        return Promise.reject(error)
      })

    // 请求处理
    instance(options)
      .then((res) => {
        if (res.code === 1000) {
          Cookies.remove('__userInfo')
          router.replace({
            name: 'Login'
          })
        } else {
          if (res.status === 200) {
            resolve(res.data)
          }
        }
        return false
      })
      .catch((error) => {
        console.error(`来自响应结果的错误:${error}`)
        reject(error)
      })
  })
}
