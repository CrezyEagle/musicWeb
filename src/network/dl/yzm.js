import {request} from 'network/request.js'
//发送验证码
export function yzm(confg){
  let sjc=+new Date()
  return request({
    url: '/captcha/sent?phone='+confg+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//验证验证码
export function yzmyz(confg,yzm){
  let sjc=+new Date()
  return request({
    url: '/captcha/verify?phone='+confg+'&captcha='+yzm+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//开始注册
export function kszc(confg,mm,yzm,name){
 
  return request({
    url: '/register/cellphone?phone='+confg+'&password='+mm+'&captcha='+yzm,
    method: 'GET',
    withCredentials: true
  })
}
//用户详情
export function yhxq(confg){
  let sjc=+new Date()
  return request({
    url: '/user/detail?uid='+confg+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//用户关注
export function yhgz(confg){
  let sjc=+new Date()
  return request({
    url: '/user/follows?uid='+confg+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//用户动态
export function yhdt(confg){
  let sjc=+new Date()
  return request({
    url: '/user/event?uid='+confg+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//判断手机号是否注册
export function sjhsf(confg){
  let sjc=+new Date()
  return request({
    url: '/cellphone/existence/check?phone='+confg+'&sjc='+sjc,
    method: 'GET',
    withCredentials: true
  })
}
//用户登录
export function yhdl(confg,confg2){
  let sjc=+new Date()
  return request({
  url: `/login/cellphone?phone=${confg}&password=${confg2}`,
  method: "GET",
  withCredentials: true, //关键
})
}
//初始化昵称
export function nmcsh(confg,cookie){
  let sjc=+new Date()
  return request({
  url: "/activate/init/profile?nickname="+encodeURIComponent(confg)+"&cookie=" +encodeURIComponent(cookie)+'&sjc='+sjc,
  method: "GET",
  withCredentials: true, //关键
})
}
//用户账号信息
export function yhzhxx(confg){
  let sjc=+new Date()
  return request({
  //账号信息
  url: `/user/account?cookie=` + encodeURIComponent(confg) +`&sjc=`+sjc,
  withCredentials: true, //关键
})
}