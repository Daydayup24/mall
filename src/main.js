// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as $http from './requests'
import store from './store'
import VueClipboard from 'vue-clipboard2'
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
  List,
  Image,
  PullRefresh 
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
Vue.use(Image)
Vue.use(Tab).use(Tabs)
Vue.use(Swipe).use(SwipeItem)
Vue.use(PullRefresh)

Vue.use(VueClipboard)

var padDate = function(val) {
  val = val < 10 ? '0' + val : val
  return val
}
// 全局混入
Vue.mixin({
  filters: {
    formateCount(value) {
      return value > 99 ? '99+' : value
    },
    toFix(value) {
      return value.toFixed(2)
    },
    formatDate(val) {
      val = parseInt(val) * 1000
      let value = new Date(val)
      let year = value.getFullYear()
      let month = padDate(value.getMonth() + 1)
      let day = padDate(value.getDate())
      let hour = padDate(value.getHours())
      let minutes = padDate(value.getMinutes())
      let seconds = padDate(value.getSeconds())
      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
    },
    getParseInt(val) {
      return parseInt(val)
    },
    getFloat(val) {
      return (val + '').split('.')[1]
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
