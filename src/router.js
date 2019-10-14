import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detaile from '@/pages/detaile/Detaile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detaile/:id',
    name: 'Detaile',
    component: Detaile
  }],
  // 使用keep-alive标签后部分安卓机返回缓存页位置不精确问题
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
