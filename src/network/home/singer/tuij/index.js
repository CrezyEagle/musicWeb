//歌手主页推荐歌手
import {request} from 'network/request.js'
export default function tuij(){
  return request({
    url: '/top/artists?offset=0&limit=110',
    method: 'GET',
    withCredentials: true
  })
}