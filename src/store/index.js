import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import todos from './modules/todos'
import modal from './modules/modal'
import alert from './modules/alert'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    todos,
    modal,
    alert
  },
  strict: debug
})
