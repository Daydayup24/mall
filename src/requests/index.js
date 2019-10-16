import axios from 'axios'
import { Toast } from 'vant'

const ajax = axios.create({
  timeout: 1000 * 12
})
ajax.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

ajax.interceptors.request.use({

})

ajax.interceptors.response.use({
  
})