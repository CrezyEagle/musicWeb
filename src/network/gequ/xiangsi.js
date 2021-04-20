import {request} from 'network/request.js'
export default function xiangsi(congf){
  return request({
    url: "/simi/playlist?id="+congf,
    method: 'GET',
    withCredentials: true
  })
}