//排行榜数据请求
import {request} from 'network/request.js'
export default function  rankingList (){
  return request({
    url:'/toplist',
    method:'GET'
  })
}