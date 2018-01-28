import * as types from '../mutation-types'
// import api from '@/api/api'
// import Cookies from 'js-cookie'

// initial state
const state = {
  userInfo: {} // 登录用户信息
}

// getters
const getters = {
}

// mutations
const mutations = {
  [types.GET_USER_INFO] (state, payload) {
    state.userInfo = { ...state.userInfo,
      ...payload
    }
  }
}

// actions
const actions = {
  getUserInfo ({
    commit
  }, payload) {
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
