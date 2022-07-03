import {request} from 'network/request.js'
//收藏取消收藏歌曲
export default function gdsc(confg,cookie,t){
  return request({
    url: '/playlist/subscribe?t='+t+'&id='+confg+'&cookie='+encodeURIComponent(cookie),
    method: 'GET',
    withCredentials: true
  })
}