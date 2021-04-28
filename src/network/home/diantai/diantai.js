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
  return request({
    url: '/program/recommend',
    method: 'GET',
    withCredentials: true
  })
}
//节目排行
export function jiemp(){
  return request({
    url: '/dj/program/toplist',
    method: 'GET',
    withCredentials: true
  })
}
//类别推荐4个
export function leb(confg){
  return request({
    url: '/dj/recommend/type?type='+confg,
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
  return request({
    url: '/dj/detail?rid='+confg,
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