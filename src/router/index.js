import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

export default new Router({
  base: '/mall',
  mode: 'history',
  routes
})
