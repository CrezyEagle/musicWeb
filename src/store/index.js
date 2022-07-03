import { createStore } from 'vuex'
import modelA from './audi'
import modelB from './singer/index.js'
export default createStore({
  namespaced: true ,
  state:{
    //推荐排行榜前往排行榜
    paih:0,
    top:true,
    bq:false,   //版权显示隐藏
    dl:false,   //登录显示隐藏
    yy:false,   //音源显示隐藏
    lpa:1,     //令牌
    uid:"",     //用户id
    mv:"",      //用户收藏的视频
    yhzh:1,    //用户账号信息
    yhgs:"",    //用户收藏的歌手
    yhdt:"",    //用户收藏的电台
    sxsj:0,     //刷新数据
    zc:false,     //注册
    sjh:"",     //手机号
    sjhmm:'',     //手机号密码
    sjhym:false,  //手机号验证码页面
   yzm:'',    //验证码
   fxlx:-1,    //分享类型
   fxname:"",   //分享名字
   fxid:'',     //分享id
   xzk:false, //下载客户端
   xzk2:false, //下载客户端
   ncym:false,  //昵称页面
   gdsca:0,   //我的歌单收藏变化
   sccgaa:false,  //收藏成功插件
   smym:false,   //扫码登录页面
   sccgaa2:false, //敬请期待
  },
  mutations:{
    setsmym(state,zj){
      state.smym=zj
    },
    setgdsca(state){
      state.gdsca++
    },
    setsccgaa(state){
      state.sccgaa=true
      setTimeout(()=>{
        state.sccgaa=false
      },1500)
    },
    setsccgaa2(state){
      state.sccgaa2=true
      setTimeout(()=>{
        state.sccgaa2=false
      },1500)
    },
    setyhdt(state,dt){
      state.yhdt=dt
    },

    setncym(state,fx){
      state.ncym=fx
    },
    setxzk(state,fx){
      state.xzk=fx
    },
    setxzk2(state,fx){
      state.xzk2=fx
    },
    setfxid(state,fx){
      state.fxid=fx
    },
    setfxname(state,fx){
      state.fxname=fx
    },
    setfxlx(state,fx){
      state.fxlx=fx
    },
    setyzm(state,yzm){
      state.yzm=yzm
    },
    setsjhmm(state,mm){
      state.sjhmm=mm
    },
    setsjhym(state,zj){
      state.sjhym=zj
    },
    setsjh(state,zj){
      state.sjh=zj
    },
    setzc(state,zc){
      state.zc=zc
    },
    setsxsj(state){
     
      state.sxsj++
    },
    setyhzh(state,zh){
      state.yhzh=zh
    },
    setyhgs(state,zh){
      state.yhgs=zh
    },
    setuid(state,id){
      state.uid=id
    },
    setmv(state,mv){
      state.mv=mv
    },
    setlpa(state,lp){
      state.lpa=lp
    },
    paihgb(state,index){

      state.paih=index
     
    },
    settopa(state,be){
      state.top=be
    },
    setyy(state,yy){
      state.yy=yy
    },
    setbq(state,bq2){
      state.bq=bq2
    },
    setdl(state,dl2){
      state.dl=dl2
    }
  },
  modules:{
    a:modelA,
    b:modelB
  }
  
})
