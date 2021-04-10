//歌单详情,包含歌曲名称等
import {request} from 'network/request.js'
export default function gdanxq2(congf){
  return request({
    url: '/playlist/detail/dynamic?id='+congf,
    method: 'GET',
    withCredentials: true
  })
}