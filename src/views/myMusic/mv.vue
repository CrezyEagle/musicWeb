<template>
<!-- 用户mv -->
<div class="mvyh" v-if="mv.length!=0">
  <div class="wdmv">
    我的视频（{{mv.length}}）
  </div>
  <div  class="mv">
    <div v-for="(item,index) in mv" :key="index" class="imga" @click="fn2(item.vid)" >
      <img :src="item.coverUrl+'?param=159y90'" alt="">
      <div class="namediv"><span class="name"></span><span class="name2">{{item.title}}</span></div>
      <div class="divn"><span v-for="(item2,index) in item.creator" :key="index" class="spname">/ {{item2.userName}}</span></div>
      <div class="bfsl"><span></span>{{fh(item.playTime)}}</div>
    </div>
  </div>
  </div>  
</template>

<script>

export default {
  data() {
    return {
      mv:[]
    }
  },
activated(){
if(this.$store.state.mv!=""){
  this.mv=this.$store.state.mv.data
}
},
methods: {
    fh(item){
    return item>10000?(item/10000).toFixed(2)+"万":item
  },
  //跳转到mv页面
  fn2(id){

    this.$router.push({
      path:"/home/mv",
      query:{
        id
      }
    })
  }
},
}
</script>

<style scoped>
.namediv:hover{
  text-decoration: underline;
}
.divn:hover{
  text-decoration: underline;
}
.bfsl span{
  width: 15px;
  display: inline-block;
  margin-right: 3px;
    height: 10px;
    background-position: -60px -310px;
    background-image: url(~assets/img/精灵图7.png);
}
.bfsl{
  position: absolute;
    top: 0;
    right: 0;
    padding-right: 5px;
    height: 20px;
    line-height: 20px;
    color: #fff;
    box-sizing: border-box;
    text-align: right;
}
.divn{
  width: 100%;
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 2px;
}
.spname{
  color: #999;
}
.namediv{
  margin-top: 3px;
  display: flex;
  align-items: center;
}
.name2{
  width: 70%;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.name{
  display: inline-block;
      width: 26px;
    height: 16px;
    background-position: -270px -480px;
    background-image: url(~assets/img/精灵图7.png);
}
.imga{
  width: 158px;
  margin: 5px 8px;
  position: relative;
}
img{
  width: 100%;
  height: 90px;

}
.mvyh{
  width: 75%;
  padding: 30px;
  height: 1000px;
  box-sizing: border-box;
}
.wdmv{
  padding-bottom: 10px;
  border-bottom: 1px red solid;
  font-size: .104167rem;
  margin-bottom: 10px;
}
.mv{
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  
}
</style>