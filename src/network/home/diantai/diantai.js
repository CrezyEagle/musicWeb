import {request} from 'network/request.js'
//热门推荐歌单
export function diantaifl(){
  return request({
    url: '/dj/catelist',
    method: 'GET',
    withCredentials: true
  })
}
//推荐节目
export function tuijian(){
  let sjc=+new Date()
  return request({
    url: '/program/recommend?sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//节目排行
export function jiemp(){
  let sjc=+new Date()
  return request({
    url: '/dj/program/toplist?sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//类别推荐4个
export function leb(confg){
  let sjc=+new Date()
  return request({
    url: '/dj/recommend/type?type='+confg+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//电台详情排行
export function xqph(confg){
  return request({
    url: '/dj/radio/hot?cateId='+confg,
    method: 'GET',
    withCredentials: true
  })
}
//电台详情
export function dtxq(confg){
  let sjc=+new Date()
  return request({
    url: '/dj/detail?rid='+confg+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//登录后电台详情
export function dldtxq(confg,cookie){
  let sjc=+new Date()
  return request({
    url: '/dj/detail?rid='+confg+'&cookie='+encodeURIComponent(cookie)+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
let sjc=+new Date()
//登录后电台订阅
export function diantdy(confg,cookie,t){
  return request({
    url: '/dj/sub?rid='+confg+'&cookie='+encodeURIComponent(cookie)+'&t='+t+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//电台节目详情
export function jiemxq(confg){
  return request({
    url: '/dj/program?rid='+confg,
    method: 'GET',
    withCredentials: true
  })
}