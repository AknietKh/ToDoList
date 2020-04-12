import Vue from 'vue'
import store from '../store/index'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import TaskManager from '../views/TaskManager.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'AuthPage',
    component: () => import('../views/AuthPage.vue')
  },
  {
    path: '/task-manager',
    name: 'task-manager',
    component: () => import('../views/TaskManager.vue'),
    meta: {
      requiresAuth: true
    }
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
    next('/auth')
  } else {
    next()
  }
})

export default router
