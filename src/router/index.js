import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import novice from '@/pages/novice/novice'
import index from '@/pages/index/index'
import api from '@/pages/api/api'
import about from '@/pages/about/about'
import landing from '@/pages/landing/landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/novice',
      name: 'novice',
      component: novice
    },
    {
      path: '/api',
      name: 'api',
      component: api
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/landing',
      name: 'landing',
      component: landing
    },
    {
      path:"/",
      redirect:"/index"
    }
  ]
})
