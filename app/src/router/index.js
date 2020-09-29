import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bootsrtappage from '../views/bootsrtappage.vue'
import csspage from '../views/csspage.vue'
import htmlpage from '../views/htmlpage.vue'
import javapage from '../views/Javapage.vue'
import javasriptpage from '../views/javasriptpage.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
import UpPassword from '../views/UpPassword.vue'
import History from '../views/History.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/Reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/UpPassword',
    name: 'UpPassword',
    component: UpPassword
  },
  {
    path: '/History',
    name: 'History',
    component: History
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/b4',
    name: 'b4',
    component: bootsrtappage
  },
  {
    path: '/css',
    name: 'css',
    component: csspage
  },
  {
    path: '/html',
    name: 'html',
    component: htmlpage
  },
  {
    path: '/java',
    name: 'java',
    component: javapage
  },
  {
    path: '/js',
    name: 'js',
    component: javasriptpage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router