import config from '../utils/config';
import qs from 'qs';
//axios配置
import axios from 'axios';
// 基础路径
axios.defaults.baseURL = config.baseURL
// 拦截器
axios.interceptors.response.use((response) => {
  // 响应成功拦截
  let res = {
    ...response,
    data: response.data.data,
    status: response.status,
    statusText: response.data.message
  }
  return res
}, (error) => {
  // 响应失败拦截
  return Promise.reject(error)
})

// 请求发送前拦截
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
export default axios