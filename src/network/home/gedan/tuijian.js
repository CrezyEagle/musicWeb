//歌单详情,包含歌曲名称等
import {request} from 'network/request.js'
export default function tuijian(congf){
  return request({
    url: '/related/playlist?id='+congf,
    method: 'GET',
    withCredentials: true
  })
}