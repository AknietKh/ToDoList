import Vue from 'vue'
import store from '../store/index'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import AuthPage from '../views/AuthPage.vue'
import TaskManager from '../views/TaskManager.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'AuthPage',
    component: AuthPage
  },
  {
    path: '/task-manager',
    name: 'task-manager',
    component: TaskManager
    // meta: {
    //   requiresAuth: true
    // }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
