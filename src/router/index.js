import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/accounts/LoginView.vue'
import Signup from '@/views/accounts/SignupView.vue'
import Home from '@/views/mains/HomeView.vue'
 

Vue.use(VueRouter)

const routes = [
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
