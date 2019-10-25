// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as $http from './requests'
import store from './store'
import {
  Uploader,
  Area,
  Toast,
  Icon,
  GoodsActionIcon,
  Overlay,
  Search,
  Tab,
  Tabs,
  Stepper,
  Dialog,
  Swipe,
  SwipeItem,
  ImagePreview,
  List
} from 'vant'

Vue.use(Toast)
Vue.use(Uploader)
Vue.use(Area)
Vue.use(Icon)
Vue.use(GoodsActionIcon)
Vue.use(Overlay)
Vue.use(Search)
Vue.use(Stepper)
Vue.use(Dialog)
Vue.use(ImagePreview)
Vue.use(List)
Vue.use(Tab).use(Tabs)
Vue.use(Swipe).use(SwipeItem)

// 全局混入
Vue.mixin({
  filters: {
    formateCount(value) {
      return value > 99 ? '99+' : value
    },
    toFix(value) {
      return value.toFixed(2)
    }
  }
})

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
