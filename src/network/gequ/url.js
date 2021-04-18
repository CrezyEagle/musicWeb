import {request} from 'network/request.js'
export default function url(congf){
  return request({
    url: "/song/url?id="+congf,
    method: 'GET',
    withCredentials: true
  })
}