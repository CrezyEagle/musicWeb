//排行榜数据请求
import {request} from 'network/request.js'
export default function  rankingList (){
  let sjc=+new Date()
  return request({
    url:'/toplist?sjc'+sjc,
    method:'GET'
  })
}
