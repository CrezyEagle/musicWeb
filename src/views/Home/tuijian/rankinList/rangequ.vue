<template>
<div class="rang" v-if='Object.keys($props.obj).length!=0'>
  <!-- 首页歌单排行榜歌曲 -->
  <div class="px" :class="{acitv2:index==ov}">{{index+1}}</div>
  <div class="gm" :class="{acitv:index==ov}">{{obj.al.name}}</div>
  
  <div class="dp" v-show="index==ov" >
    <div class="bf"></div>
    <div class="tj"></div>
    <div class="wj"></div>
  </div>
  </div>  
</template>

<script>
// import geq from 'network/gequ/gequ.js'
export default {
data() {
  return {
    gq:[]
  }
},
methods:{
  fn(){
    this.inedx
  }
},


props:{
  obj:{
    type:Object,
    ddefault(){
      return {}
    }
  },
  index:{
    type:Number,
    ddefault(){
      return 0
    }
  },
   ov:{
    type:Number,
    ddefault(){
      return -1
    }
  }
},
}
</script>

<style scoped>
.acitv{
  text-decoration: underline;
  width: 50% !important;
  font-size: .092486rem;
}
a{
  width: 100%;
}
.acitv2{
  margin-left: 15px !important;
}
.gm{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  width: 80%;
  color: #000;
  margin-left: 20px;
  font-weight: 400;
}
.px{
  margin-left: 20px;
  width: 20px;
  text-align: center;
  float: left;
  font-size: .100893rem;
}
.dp{
  height: 20px;
  display: flex;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
}
.rang{
  display: flex;
  width: 100%;
align-items: center;
  box-sizing: border-box;
  padding: 8px;
  /* justify-content: space-between; */
}
.bf{
  background: url(~assets/img/精灵图1.png) no-repeat 0 9999px;
      width: 17px;
    height: 17px;
    margin-right: 10px;
    background-position: -267px -268px;
}.tj{
  width: 17px;
    background: url(~assets/img/精灵图4.png) no-repeat 0 9999px;
    height: 17px;
        background-position: 0 -698px;
        margin-right: 10px;
}
.wj{
      width: 17px;
    height: 17px;
       background: url(~assets/img/精灵图1.png) no-repeat 0 9999px;
    margin-right: 10px;
    background-position: -297px -268px;
}

</style>