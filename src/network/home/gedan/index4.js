//歌单详情,包含歌曲名称等,用户
import {request} from 'network/request.js'
export default function yhgd(congf,cookie){
  return request({
    url: '/playlist/detail?id='+congf+'&cookie='+encodeURIComponent(cookie),
    method: 'GET',
    withCredentials: true
  })
}