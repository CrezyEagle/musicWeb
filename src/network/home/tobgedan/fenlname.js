//歌单分类名称
import {request} from 'network/request.js'
export default function fenlname(){
  return request({
    url: '/playlist/catlist',
    method: 'GET',
    withCredentials: true
  })
}