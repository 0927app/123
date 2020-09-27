import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bootsrtappage from '../views/bootsrtappage.vue'
import csspage from '../views/csspage.vue'
import htmlpage from '../views/htmlpage.vue'
import javapage from '../views/Javapage.vue'
import javasriptpage from '../views/javasriptpage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
