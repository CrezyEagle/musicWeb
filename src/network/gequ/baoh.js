import {request} from 'network/request.js'
export default function baoh(congf){
  return request({
    url: "/simi/song?id="+congf,
    method: 'GET',
    withCredentials: true
  })
}