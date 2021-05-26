import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/accounts/LoginView.vue'
import Signup from '@/views/accounts/SignupView.vue'
import Home from '@/views/mains/HomeView.vue'
import review from '@/views/communities/ReviewView.vue'
import MovieRecommendation from '@/views/recommendations/MovieRecommendationView.vue'
import Profile from '@/views/profiles/ProfileView.vue'
import Slider from '@/views/mains/Slider.vue'


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
    // 경로 재수정할 것
    path: '/movies',
    name: 'Home',
    component: Home
  },
  {
    path: '/review',
    name: 'Review',
    component: review
  },
  {
    path: '/recommendations',
    name: 'MovieRecommendation',
    component: MovieRecommendation
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
