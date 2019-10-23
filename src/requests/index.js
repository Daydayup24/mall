import axios from 'axios'
import qs from 'axios'
import { Toast } from 'vant'

const ajax = axios.create({
  timeout: 1000 * 12,
  baseURL: 'http://192.168.0.13:8090',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

ajax.interceptors.request.use({})

ajax.interceptors.response.use({})

// 获取商家商品列表
export const getMerchantsShopList = params => {
  return ajax.post('/content/api/merchant-product', params)
}
