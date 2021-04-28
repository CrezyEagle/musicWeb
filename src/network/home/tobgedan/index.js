//歌单分类的50个歌单
import {request} from 'network/request.js'
export default function indexxq(congf){
  //解决ajax的特殊字符请求问题
  let encodeStr=encodeURIComponent(congf);
  return request({
    url: '/top/playlist?cat='+encodeStr,
    method: 'GET',
    withCredentials: true
  })
}