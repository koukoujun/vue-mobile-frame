import axios from './axios'
import qs from 'qs'

const requests = {
  // post 请求
  requestPost (data:string, path:string) {
    return axios(path, {
      // 请求方式
      method: 'post',
      // 数据体
      data: qs.stringify(data)
    }).then(res => {
       return res
    }, (error) => {
      return Promise.reject(error)
    })
  },
  // get 请求
  requestGet (data:string, path:string) {
	  return axios(path, {
		  method: 'get',
		  data: qs.stringify(data)
	  }).then(res => {
		  return res
	  }, (error) => {
		  return Promise.reject(error)
	  })
  },
  // formdata 上传文件
  requestFormData (data:FormData, path:string) {
    return axios(path, {
      headers: { 'Content-Type': 'multipart/form-data',},
      method: 'post',
      data: data,
      onUploadProgress:(progressEvent:any) => {
        console.log(progressEvent)
      },
    }).then(res => {
      return res
    }, (error) => {
      return Promise.reject(error)
    })
  }
}

export default requests
