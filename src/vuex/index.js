import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import createLogger from 'vuex/dist/logger'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user
  },
  plugins: [
    createLogger()
    // createPersistedState()
  ]
})

export default store
