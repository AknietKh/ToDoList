import Axios from 'axios'

const url = 'http://31.211.50.217/api/user-login' // ссылка на api

// Здесь потом реализовать регистрацию админов
const auth = {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    errMessage: ''
  },
  mutations: {
    AUTH_REQUEST (state) {
      state.status = 'loading'
    },
    AUTH_SUCCESS (state, { token, user }) {
      // console.log(token);
      state.status = 'success'
      state.token = token
      state.user = user
    },
    AUTH_ERROR (state, { errMessage }) {
      console.log(errMessage)
      state.status = 'error'
      state.errMessage = errMessage
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
        Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        Axios({ url, data: user, method: 'POST' })
          .then(resp => {
            console.log(resp.data.data)
            const { token, user } = resp.data.data
            
            localStorage.setItem('token', token)
            Axios.defaults.headers.common['Authorization'] = token
            // console.log(token, user)
            commit('AUTH_SUCCESS', { token, user })
            resolve(resp)
          })
          .catch(err => {
            const errMessage = err.response.data.message
            console.log(errMessage);
            commit('AUTH_ERROR', {errMessage})
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
    authStatus: state => state.status,
    errMessage: state => state.errMessage
  }
}

export default auth
