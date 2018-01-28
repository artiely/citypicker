/**
 * Created by Artiely on 2017/7/20.
 */
import fetch from './fetch'

/**
 * 登录
 * @param {String} username
 * @param {String} password
 */
const LOGIN = params => {
  return fetch({
    url: '/api/sys/login',
    method: 'post',
    data: params
  })
}

const apiList = {
  LOGIN
}

export default apiList
