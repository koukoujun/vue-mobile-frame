import axios from 'axios'
import DOMAIN_NAME from './config'
/*
* 请求拦截器
*/
axios.interceptors.request.use((config) => {
  // 预处理请求信息
  console.log('RequestMessage:',config)
  return config
}, (error) => {
  // 预处理请求异常时抛出error
  return Promise.reject(error)
})

/*
* 响应拦截器
*/
axios.interceptors.response.use((res:any) => {
  // 进行响应事件处理
  const status = parseInt(res.status)
  switch (status) {
    case 200 :
      return res
    break;
    case 400 :
      return Promise.reject({ code: status, msg: '请求错误' })
    break;
    case 403 :
      return Promise.reject({ code: status, msg: '服务器拒绝请求' })
    break;
    case 404 :
      return Promise.reject({ code: status, msg: '页面丢失' })
    break;
    case 500 :
      return Promise.reject({ code: status, msg: '服务器内部错误' })
    break;
    case 503 :
      return Promise.reject({ code: status, msg: '服务不可用' })
    break;
    default:
    break;
  }
}, (error) => {
  return Promise.reject(error)
})

/* 多环境打包配置 */
let requestUrl = ''
if (process.env.VUE_APP_ENV == 'test') {
  requestUrl = DOMAIN_NAME.URL_TEST_MICRO
} else if (process.env.VUE_APP_ENV == 'preview') {
  requestUrl = DOMAIN_NAME.URL_PREVIEW_MICRO
} else if(process.env.VUE_APP_ENV == 'production'){
  requestUrl = DOMAIN_NAME.URL_PRODUCTION_MICRO
} else {
  requestUrl = DOMAIN_NAME.URL_DEVELOPMENT_MICRO
}
/**
 * 返回axios方法
 * @param url（如果传绝对地址则baseURL不会追加到url之前）
 * @param method
 * @param timeout
 * @param data
 * @param headers
 * @param dataType
 * @returns {AxiosPromise}
 */
export default function (url:any, {
  // 默认求情方式post
  method = 'post',
  // 超时
  timeout = 6000,
  // 请求主题
  data = {},
  // 请求头
  headers = {
	  'Content-Type':DOMAIN_NAME.REQUEST_HEADER.application
	  //'token':DOMAIN_NAME.TOKEN
	  },
  // 文件类型
  dataType = 'json',
  //上传进度
  onUploadProgress = {}
}) {
  const config:any = {
    method: method,
    timeout: timeout,
    url: url,
    baseURL: requestUrl,
    data: data,
    headers: headers,
    dataType: dataType,
    async:true,
    withCredentials:true, //表示跨域请求时是否需要使用凭证
    onUploadProgress:onUploadProgress,//上传进度
  }
  return axios(config)
}
