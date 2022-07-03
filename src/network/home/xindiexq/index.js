import {request} from 'network/request.js'
//新碟上架2
export default function xindiexq(confg){
  return request({
    url: '/album?id='+confg,
    method: 'GET',
  
  })
}