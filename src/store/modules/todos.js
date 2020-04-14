import Axios from 'axios'
import Vue from 'vue'

const url = 'http://31.211.50.217/api' // ссылка на api

// Здесь потом реализовать регистрацию админов
const auth = {
  state: {
    status: '',
    // token: localStorage.getItem('token') || '',
    todos: [
      {
        "id": 81,
        "created_at": "2020-04-13T05:49:06.000000Z",
        "updated_at": "2020-04-13T05:49:06.000000Z",
        "name": "Купить овощей",
        "user_id": 1,
        "status": false,
        "task": []
      },
      {
        "id": 9,
        "created_at": "2020-03-29T00:16:30.000000Z",
        "updated_at": "2020-04-14T07:08:09.000000Z",
        "name": "Купить сьедобной еды",
        "user_id": 1,
        "status": false,
        "task": [
          {
            "id": 120,
            "name_list": "Купить молоко",
            "created_at": "2020-04-02T00:48:14.000000Z",
            "updated_at": "2020-04-14T06:54:23.000000Z",
            "short_description": null,
            "status": true,
            "user_id": 1,
            "task_list_id": 9,
            "urgency": true
          },
          {
            "id": 151,
            "name_list": "Купить хлебушка",
            "created_at": "2020-04-05T01:43:03.000000Z",
            "updated_at": "2020-04-14T07:00:08.000000Z",
            "short_description": null,
            "status": true,
            "user_id": 1,
            "task_list_id": 9,
            "urgency": false
          },
          {
            "id": 159,
            "name_list": "Купить водички",
            "created_at": "2020-04-06T02:43:20.000000Z",
            "updated_at": "2020-04-14T07:08:09.000000Z",
            "short_description": null,
            "status": false,
            "user_id": 1,
            "task_list_id": 9,
            "urgency": false
          }
        ]
      }
    ]
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
    getTodos ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('TODOS_REQUEST')
        Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
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
            commit('TODOS_ERROR', {errMessage})
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