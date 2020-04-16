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
  console.log('yes')
//axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  console.log(axios.defaults.headers.common['Authorization'])
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
