import {request} from 'network/request.js'
export default function geci(congf){
  return request({
    url: "/lyric?id="+congf,
    method: 'GET',
    withCredentials: true
  })
}