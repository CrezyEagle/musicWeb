//歌手主页详情歌手
import {request} from 'network/request.js'
export function xqgs1(type,area,){
  return request({
    url: '/artist/list?type='+type+'+&area='+area+'&limit=50' ,
    method: 'GET',
    withCredentials: true
  })
}
export function xqgs2(type,area,initial){
  return request({
    url: '/artist/list?type='+type+'+&area='+area+'&initial='+initial+'&limit=80',
    method: 'GET',
    withCredentials: true
  })
}