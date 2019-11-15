import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

// import store from '../store'
Vue.use(Router)

const router =  new Router({
  base: '/mall/',
  mode: 'history',
  routes
})

// router.beforeEach((to, form, next) => {
//   alert(store.state.userId)
//   next()
// })

export default router