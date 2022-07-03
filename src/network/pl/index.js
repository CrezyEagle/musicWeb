import {request} from 'network/request.js'
//t发送还是回复type评论类型id要评论的id，content是要评论的话
export default function fspl(t,type,id,content,cookie){
  return request({
    url: "/comment?t="+t+"&type="+type+"&id="+id+"&content="+content+"&cookie="+encodeURIComponent(cookie),
    method: 'GET',
    withCredentials: true
  })
}