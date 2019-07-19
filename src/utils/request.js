import axios from 'axios'

// 统一配置
axios.create({
  baseURL: 'http://127.0.0.1:9527/',
  responseType: 'json',
  validateStatus (status) {
    // 200 外的状态码都认定为失败
    return status === 200
  }
})
// export default request
