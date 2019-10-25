import axios from 'axios'
import qs from 'qs'

const ajax = axios.create({
  timeout: 1000 * 12,
  baseURL: 'http://192.168.0.13:8090'
})

ajax.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if (config.method === 'post') {
    // post请求时，处理数据
    config.data = qs.stringify({
      ...config.data //后台数据接收这块需要以表单形式提交数据，而axios中post默认的提交是json数据,所以这里选用qs模块来处理数据
    })
  }
  return config
})

ajax.interceptors.response.use(data => {
  if (data.data.code === 1) {
    return data.data
  }
})


// 获取商家商品列表
export const getMerchantsShopList = params => {
  return ajax.post('content/api/merchant-product', params)
}

// 商品上传
export const uploadShop = params => {
  return ajax.post('/content/api/product-upload', params)
}

// 获取商品详情
export const getShopDetail = data => {
  return ajax.get('/content/api/product-detail', {params: data})
}

// 删除商品
export const deleteShop = params => {
  return ajax.post('/content/api/product-delete', params)
}

// 新增地址
export const addAddress = params => {
  return ajax.post('/content/api/add-address', params)
}

// 获取我的地址列表
export const getAddressList = params => {
  return ajax.post('/content/api/user-address', params)
}

// 创建订单
export const createOrder = parmas => {
  return ajax.post('/content/api/order-create', parmas)
}

// 获取订单列表
export const getOrderList = params => {
  return ajax.post('/content/api/user-order', params)
}
