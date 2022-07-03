import {request} from 'network/request.js'
export default function suos(congf){
  return request({
    url: "/cloudsearch?keywords="+congf,
    method: 'GET',
    withCredentials: true
  })
}