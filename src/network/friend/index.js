import {request} from 'network/request.js'
//删除动态
export function scdt(confg,cookie){
  let sjc=+new Date()
  return request({
    url: '/event/del?evId='+confg+'&cookie='+encodeURIComponent(cookie)+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
export function fxdt(confg,type,msg,cookie){
  let sjc=+new Date()
  return request({
    url: '/share/resource?id='+confg+'&type='+type+'&msg='+msg+'&cookie='+encodeURIComponent(cookie)+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}