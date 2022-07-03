import axios from 'axios';

export function request(config,thi) {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    // timeout: 10000,
    withCredentials: true
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
    baseURL: "http://localhost:3000",
    // timeout: 10000,
    withCredentials: true
  })
  //响应拦截

  instance.interceptors.response.use(res => {
    return res
  }, err => {
    console.log(err);
  })
  return instance(config)
}