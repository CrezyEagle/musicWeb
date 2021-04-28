import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL : "https://autumnfish.cn",
    // timeout: 10000,
    
  })
  //响应拦截

  instance.interceptors.response.use(res => {

    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}
export function request2(config) {
  const instance = axios.create({
    baseURL : "https://autumnfish.cn",
    // timeout: 10000,
    
  })
  //响应拦截

  instance.interceptors.response.use(res => {

    return res
  }, err => {
    console.log(err);
  })
  return instance(config)
}