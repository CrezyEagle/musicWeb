import {request} from 'network/request.js'
export default function swipr(){
  return request({
    url: '/homepage/block/page',
    method: 'GET',
    withCredentials: true
  })
}