// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as $http from './requests'
import store from './store'
import { Uploader, Area, Toast, Icon, GoodsActionIcon, Overlay, Search, Tab, Tabs, Stepper } from 'vant'

Vue.use(Toast)
Vue.use(Uploader)
Vue.use(Area)
Vue.use(Icon)
Vue.use(GoodsActionIcon)
Vue.use(Overlay)
Vue.use(Search)
Vue.use(Stepper)
Vue.use(Tab).use(Tabs)

Vue.prototype.$http = $http
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
