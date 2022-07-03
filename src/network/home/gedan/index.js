import {request} from 'network/request.js'
//新碟上架
export default function gdan(){
  return request({
    url: '/top/album',
    method: 'GET',
  
  })
}