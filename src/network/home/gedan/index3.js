//歌单详情,包含歌曲名称等
import {request} from 'network/request.js'
export default function gdanxq2(congf){
  return request({
    url: '/playlist/detail?id='+congf,
    method: 'GET',
    withCredentials: true
  })
}