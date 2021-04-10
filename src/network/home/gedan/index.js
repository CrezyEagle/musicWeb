import {request} from 'network/request.js'
//热门推荐歌单
export default function gdan(){
  return request({
    url: '/top/album',
    method: 'GET',
    withCredentials: true
  })
}