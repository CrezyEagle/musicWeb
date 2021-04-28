<template>
  <div class="diant" v-if="Object.keys(obj).length!=0">
    <div class="left">
      <tobimg :imgurl='obj.picUrl' :name='obj.name' :zzurl='obj.dj.avatarUrl' :zzname='obj.dj.nickname' :fx='obj.shareCount'>
         <template v-slot:xq>
           <div class="mmm"></div>
        </template>
        <template v-slot:xq2><div class="xq">
          <span>{{obj.category}}</span>{{obj.desc}}
          </div>
          </template>
      </tobimg>
      <div class="tob">
        <div class="jm">节目列表</div>
        <div class="qq">共{{obj.programCount}}期</div>
      </div>
      <!-- 节目列表 -->
      <div v-for="(item,index) in arr" :key="index" class="jiemlb">
        <div class="nbr">{{item.serialNum}}</div>
        <div class="sp" @click="fn(item.id)"></div>
        <div class="nm">{{item.name}}</div>
        <div class="bf">播放{{item.listenerCount}}</div>
        <div class="zz">赞{{item.likedCount}}</div>
        <div>{{sj(item.scheduledPublishTime)}}</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>

import Tobimg from 'components/content/tobimg.vue'
import { dtxq,jiemxq } from "network/home/diantai/diantai.js";

import Tablea from 'components/content/gequlieb/tablea.vue';
export default {
  data() {
    return {
      obj:{},
      arr:[]
    }
  },
  components: {Tobimg,Tablea },
  computed:{
    rot(){
      return this.$route.query.id;
    }
  },
  watch:{
rot(a,b){
  window.scroll(0,0)
  dtxq(a).then(res=>{
    this.obj=res.data
  console.log(res);
})
 jiemxq(a).then(res=>{
    this.arr=res.programs
  console.log(res);
})
}
  },
  created(){
dtxq(this.rot).then(res=>{
    this.obj=res.data
  console.log(res);
})
jiemxq(this.rot).then(res=>{
    this.arr=res.programs
  console.log(res);
})
  },
  methods:{
    sj(sj){
var date = new Date(sj);
var y=0
var r=0
if(date.getMonth()+1<10){
  y="0"+(date.getMonth()+1)
}else{
  y=(date.getMonth()+1)
}
if(date.getDate()<10){
r='0'+date.getDate()
}else{
  r=date.getDate()
}
return date.getFullYear()+"-"+y+'-'+r
    },
    fn(id){
      alert('无歌源码')
    }
  }

}
</script>

<style scoped>
.sp{
  width: 17px;
    height: 17px;
    cursor: pointer;
    cursor: pointer;
    display: inline-block;
    margin: 0px 10px;
    background-position: 0 -103px;
    margin-right: 23px;
    background-image: url(~assets/img/精灵图6.png);

}
.sp:hover{
  background-position: 0 -128px;
}
.nbr{
  width: 9%;
}
.bf{
width: 15%;
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.zz{
 width: 10%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.nm{
  width: 40%;
  margin-right: 10px;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
}
.nm:hover{
  text-decoration: underline;
}
.jiemlb:nth-child(odd){
  background-color: #FFFFFF;
}
.jiemlb:nth-child(even){
  background-color: #F7F7F7;
}
.jiemlb{
  display: flex;
  padding: 10px 5px;
  justify-content: space-between;
}
.qq{
  font-size: .052083rem;
  color: #999;
}
.jm{
  font-size: .09375rem;
  margin-right: 20px;
}
.tob{
  display: flex;
  margin-top: 30px;
  padding-bottom: 10px;
  align-items: center;
  border-bottom: 1px solid red;
}
.xq span{
display: inline-block;
padding: 2px 3px;
border: 1px solid red;
color: red;
margin-right: 10px;
}
.mmm{
  width: 54px;
    height: 24px;
    
    background-image: url(/img/精灵图4.29cd8439.png);
        background-position: 0 -1014px;
}
.xq{
  font-size:.052083rem;
      color: #666;
      margin-top: 20px;
}
.diant{
  width: 56%;
  margin: 0px auto;
  display: flex;
  background-color: #fff;
  padding: 30px;
  box-sizing: border-box;
}
.left{
  width: 75%;
}

</style>