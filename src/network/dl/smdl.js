import {request} from 'network/request.js'
//获取key
export function keyz(){
  return request({
    url: '/login/qr/key'+`?timerstamp=${Date.now()}`,
    method: 'GET',
    withCredentials: true
  })
}
//获取二维码
export function ewm(key){
  return request({
    url: "/login/qr/create?key="+key+`&qrimg=true&timerstamp=${Date.now()}`,
    method: 'GET',
    withCredentials: true
  })
}
//检查二维码状态
export function ewmzt(key){
  return request({
    url: `/login/qr/check?key=${key}&timerstamp=${Date.now()}`,
    method: 'GET',
    withCredentials: true
  })
}
