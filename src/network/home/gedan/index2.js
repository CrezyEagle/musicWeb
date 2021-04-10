//歌单详情
import {request} from 'network/request.js'
export default function gdanxq(congf){
  return request({
    url: '/playlist/detail?id='+congf,
    method: 'GET',
    withCredentials: true
  })
}