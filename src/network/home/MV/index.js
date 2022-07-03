import {request} from 'network/request.js'
//mv数据
export  function mvsj(confg){
  return request({
    url: '/mv/detail?mvid='+confg,
    method: 'GET',
    withCredentials: true
  })
}
//url
export  function mvurl(confg){
  return request({
    url: '/mv/url?id='+confg,
    method: 'GET',
    withCredentials: true
  })
}
//mv评论
export  function mvpl(confg){
  return request({
    url: '/comment/mv?id='+confg,
    method: 'GET',
    withCredentials: true
  })
}
export  function mvxs(confg){
  return request({
    url: '/simi/mv?mvid='+confg,
    method: 'GET',
    withCredentials: true
  })
}
export  function yhmvsj(confg,cookie){
  return request({
    url: '/mv/detail?mvid='+confg+'&cookie='+encodeURIComponent(cookie),
    method: 'GET',
    withCredentials: true
  })
}
//收藏取消收藏歌曲
export  function yhscqx(confg,cookie,t){
  return request({
    url: '/mv/sub?mvid='+confg+'&t='+t+'&cookie='+encodeURIComponent(cookie),
    method: 'GET',
    withCredentials: true
  })
}