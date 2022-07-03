import {request} from 'network/request.js'
//登录后获取歌曲
export  function gequ(congf,cookie){
  return request({
    url: "/song/detail?ids="+congf+'&cookie='+encodeURIComponent(cookie),
    method: 'GET',
    withCredentials: true
  })
}
//喜欢歌曲
export  function xih(congf,like,cookie){
  let sjc=+new Date()
  return request({
    url: "/like?id="+congf+'&like='+like+'&cookie='+encodeURIComponent(cookie)+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}