import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import todos from './modules/todos'
import modal from './modules/modal'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    todos,
    modal
  },
  strict: debug
})
