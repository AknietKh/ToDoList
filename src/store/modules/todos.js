import Axios from 'axios'
// import Vue from 'vue'

const url = 'http://31.211.50.217/api' // ссылка на api

// Здесь потом реализовать регистрацию админов
const auth = {
  state: {
    status: '',
    todos: []
  },
  mutations: {
    TODOS_REQUEST (state) {
      state.status = 'loading'
    },
    TODOS_SUCCESS (state, { todos }) {
      state.status = 'success'
      state.todos = todos
    },
    TODOS_ERROR (state, { errMessage }) {
      console.log(errMessage)
      state.status = 'error'
      state.errMessage = errMessage
    }
  },
  actions: {
    getAllTodos ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('TODOS_REQUEST')
        // Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        Axios.get(`${url}/show-list/?status_list=all`)
          .then(resp => {
            // console.log(resp.data.data)
            const todos = resp.data.data
            commit('TODOS_SUCCESS', { todos })
            resolve(resp)
          })
          .catch(err => {
            const errMessage = err.response.data.message
            // console.log(err.response.data);
            commit('TODOS_ERROR', { errMessage })
            reject(err)
          })
      })
    },
    getNotCompletedTodos ({ commit }) {
      return new Promise ((resolve, reject) => {
        commit('TODOS_REQUEST')
        // Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        Axios.get(`${url}/show-list`)
          .then(resp => {
            // console.log(resp.data.data)
            const todos = resp.data.data
            commit('TODOS_SUCCESS', { todos })
            resolve(resp)
          })
          .catch(err => {
            const errMessage = err.response.data.message
            // console.log(err.response.data);
            commit('TODOS_ERROR', { errMessage })
            reject(err)
          })
      })
    },
    getCompletedTodos ({ commit }) {
      return new Promise ((resolve, reject) => {
        commit('TODOS_REQUEST')
        // Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        Axios.get(`${url}/show-list/?status_list=true`)
          .then(resp => {
            // console.log(resp.data.data)
            const todos = resp.data.data
            commit('TODOS_SUCCESS', { todos })
            resolve(resp)
          })
          .catch(err => {
            const errMessage = err.response.data.message
            // console.log(err.response.data);
            commit('TODOS_ERROR', { errMessage })
            reject(err)
          })
      })
    }
  },
  getters: {
    getTodos: state => state.todos
    // errMessage: state => state.errMessage
  }
}

export default auth
