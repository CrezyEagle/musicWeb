import {request} from 'network/request.js'
export default function gequ(congf){
  return request({
    url: "/song/detail?ids="+congf,
    method: 'GET',
    withCredentials: true
  })
}