import {request} from 'network/request.js'
//推荐专辑
export default function xindiexq(){
  return request({
    url: '/album/newest',
    method: 'GET',
  
  })
}