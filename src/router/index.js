import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
     component: () => import('@/view/index') 
    },
    {
      path: 'index',
      name: 'index',
     component: () => import('@/view/index') 
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('@/view/case')
    }
  ]
})