import Vue from 'vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuelidate)

const token = localStorage.getItem('token')

if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
