
<template>

  <div dropzone="" v-if='Object.keys(obj).length!=0'>
      <!-- 首页榜单详情 -->
    <div class="zj">
      <img :src="obj.coverImgUrl" alt="">
      <a href="JavaScript:;"></a>
      <div class="zuid">
        <h3>{{obj.name}}</h3>
        <div class="div1"></div>
        <div class="div2"></div>
      </div>
    </div>
    <rangequ class="ran" v-for="(item,index) in arr" :key="index" :obj="item.id" :ov="ov" :index="index" @mouseout="fn2(index)"  @mouseover="fn(index)"></rangequ>
    <div class="qbaa"><div>全部查看></div></div>
  </div>
</template>

<script>
import gedanxq from 'network/home/gedan/index2.js'
import rangequ from './rangequ.vue'
export default {
  data() {
    return {
      arr:[],
      ov:-1
    }
  },
  components: { rangequ },
props:{
  obj:{
    type:Object,
    ddefault(){
      return {}
    }
  }
},
methods:{
fn(index){
  this.ov=index
},
fn2(index){
  this.ov=-1
}
},
mounted(){
  console.log(this.obj.id);
  gedanxq(this.obj.id).then(res=>{
    // console.log(res.privileges);
    // setTimeout(()=>{
      this.arr=res.privileges.splice(0,10)
      console.log(this.arr);
    // },200)
  }).catch(err=>{
    console.log(err);
  })
}
}
</script>

<style scoped>
.zj{
  position: relative;
  display: flex;
  width: 80%;
  margin: 20px auto;
}
.zj img{
  width: 40%;
   height: 40%;
  margin-right: 10px;
}
/* a{
     background: url(~assets/img/精灵图3.png) no-repeat;
      background-position: -145px -57px;
      background-size: 100%;
      position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 40%;
} */
.ran:nth-child(even){
background-color: #E8E8E8;
}
.ran:nth-child(odd){
background-color: #F4F4F4;
}
.ran{
      color: #666;
      width: 100%;
}
.ran:nth-child(-n+4){
  color: #c10d0c;
}
.zuid{

  width: 60%;
}
.qbaa{

      height: 20px;

          padding: 8px;
  color: #000;
  background-color: #E8E8E8;
}
.qbaa div{
  float: right;
  margin-right: 20px;
}
.div1{
      background: url(~assets/img/精灵图1.png) no-repeat 0 9999px;
          background-position: -267px -205px;
              width: 22px;
    height: 22px;
    margin-right: 10px;
    float: left;
}
.div2{
   background: url(~assets/img/精灵图1.png) no-repeat 0 9999px;
   background-position: -300px -205px;
      width: 22px;
    height: 22px;
    float: left;
}
</style>