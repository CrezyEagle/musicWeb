// 歌手详情
let sjc=+new Date()
import {request} from 'network/request.js'
export  function gequ(confg){
  let sjc=+new Date()
  return request({
    url: '/artists?id='+confg+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
export  function zj(confg){
  return request({
    url: '/artist/album?id='+confg+'&limit=15'+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
export  function xq(confg){
  return request({
    url: '/artist/desc?id='+confg+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
export  function mv(confg){
  return request({
    url: '/artist/mv?id='+confg+'&limit=12'+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
export  function rm(confg){
  return request({
    url: '/simi/artist?id='+confg+'&limit=6'+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
export  function bdxq(confg){
  return request({
    url: '/artist/detail?id='+confg+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
