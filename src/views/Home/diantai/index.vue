<template>
<div class="diant">
  <div v-if="fl.length!=0" class="top">
    <div v-for="(item,index) in fl" :key="index" class="imgaa" @click="fun(item.id,index)" :class="{activ2:index==isShow}" >
      <div class="imga" :class="{activ:index==isShow}" :style="{backgroundImage:'url('+item.picWebUrl+')'}"></div>
      <div class="nm" :class="{activ3:index==isShow}" >{{item.name}}</div>
    </div>
  </div>
  <!-- 推荐信息 -->
     <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

  </div>  
</template>

<script>
import {diantaifl} from 'network/home/diantai/diantai.js'

export default {

created(){
  //获取电台图标
  diantaifl().then(res=>{
    this.fl=res.categories
  })
 
  //获取类别推荐
},
data() {
  return {
    fl:[],
    isShow:-1,
    ac:[]
  
  }
},
methods:{
  fun(id,index){
    this.isShow=index
    this.$router.push({
      path:'/home/diantai/fl',
      query:{
        id:id,
      
      }
    })
    console.log(id);
  }
},
computed:{
  rout(){    
    return  this.$route.path=='/home/diantai/zy'
  },
  root(){
    return this.$route.query.id
  }
},
 //判断是否是在主页，在主页就清除图标的点击特效
watch:{
  rout(a,b){
    if(a){
      this.isShow=-1
    }
  },
  root(a,b){
 this.fl.forEach((element,index) => {
   if(element.id==a){
     this.isShow=index
   }
 });
  }
}
}
</script>

<style scoped>
.activ{
  background-position: -48px 0  !important;
 
}
.activ2{
  box-sizing: border-box;
  border: 2px solid red;
 
}
.activ3{
   color: red  !important;
}
.tuijs:nth-child(odd),.phs:nth-child(odd){
  background-color: #F7F7F7;
}
.tuijs:nth-child(even),.phs:nth-child(even){
  background-color: #FFFFFF;
}
.tuj{
  width: 45%;
}
.ph{
  width: 45%;
}
.jm{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.top{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
 margin-bottom: 30px;
  justify-content: space-around;
}
.diant{
  width: 56%;

  margin: 0 auto;
  background-color: #fff;
  padding-top: 30px;
}
.imgaa{
    width: 68px;
      margin:0 0.5% ;
    cursor: pointer;
    height: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.imga{
  display: inline-block;

  width: 48px;
    height: 48px;
  
    background-position: 0 0;
}
.imgaa:hover{
  background-color: #F6F7F7;
}
.nm{
  text-align: center;
  width: 100%;
    color: #888;
    font-size: .052083rem;
}
</style>