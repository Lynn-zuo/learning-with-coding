import axios from "axios"
import Config from "./config"

const options = {
  baseURL: Config.BASE_URL,
  timeout: Config.TIMEOUT,
  maxRedirects: 0, // 不允许重定向
}

const gatewayAPI = axios.create(options)

// 请求拦截
gatewayAPI.interceptors.request.use(requestInterceptors, (err) => {
  console.error(err)
  return Promise.reject(err)
})
// 响应拦截
gatewayAPI.interceptors.response.use(responseInterceptors, (err) => {
  console.error(err)
  return Promise.reject(err)
})

function requestInterceptors(req) {
  // 此处进行请求拦截处理，如改变header、token等
  return req
}

function responseInterceptors(res) {
  // 此处进行响应数据拦截处理，如格式化响应数据等
  return res?.data
}

export default gatewayAPI
