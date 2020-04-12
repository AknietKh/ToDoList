import Axios from 'axios'

const url = '' // ссылка на api

// Здесь потом реализовать регистрацию админов
const auth = {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    AUTH_REQUEST (state) {
      state.status = 'loading'
    },
    AUTH_SUCCESS (state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    AUTH_ERROR (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        Axios({ url, data: user, methods: 'POST' })
          .then(resp => {
            const { token, user } = resp.data

            localStorage.setItem('token', token)
            Axios.defaults.headers.common['Authorization'] = token
            commit('AUTH_SUCCESS', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('AUTH_ERROR')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete Axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
}

export default auth
