import {request} from 'network/request.js'
//新碟上架2
export default function xind(area){
  let scj=+new Date()
  return request({
    url: '/album/new?area='+area+'&limit=28'+'&sjc='+scj,
    method: 'GET',
  
  })
}