//歌单评论
import {request} from 'network/request.js'
export  function pinlun(congf){
  return request({
    url: '/comment/playlist?id='+congf,
    method: 'GET',
    withCredentials: true
  })
}
export  function zjpl(congf){
  return request({
    url: '/comment/album?id='+congf,
    method: 'GET',
    withCredentials: true
  })
}

export  function gqpinlun(congf){
  if(congf==undefined) return
  return request({
    url: '/comment/music?id='+congf+'&limit=1',
    method: 'GET',
    withCredentials: true
  })
}
export class obja{
  constructor(img,name,content,time,likedCount,vip,hf){
    //头像
    this.img=img
    //用户名
    this.name=name
    //评论
    this.content=content
    //时间
    this.time=time
    //点赞
    this.likedCount=likedCount
    //vip
    this.vip=vip
    //是否回复他人
    this.hf=hf

  }
}