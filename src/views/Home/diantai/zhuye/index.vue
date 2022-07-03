<template>
<!-- 电台主页 -->
  <div class="nma">
    <div class="jm">
    <div class="tuj">
      <navbar name="推荐节目">
      <template v-slot:gduo><div></div></template>
      </navbar>
      <tuijiem v-for="(item,index) in tuij" :key="index" ac='1' :obj='item' class="tuijs aac" ></tuijiem>
    </div>
    <div class="ph">
      <navbar name='节目排行'><template v-slot:gduo><div></div></template></navbar>
      <tuijiem v-for="(item,index) in sz" ac='0' :key="index" :obj='item' class="phs aac"  ></tuijiem>
    </div>
  </div> 
  <div>
    <fltuijian v-if="yygs.length!=0" class="flac" :name='yygs[0].category' :arr="yygs"></fltuijian>
     <fltuijian v-if="zmjy.length!=0" class="flac" :name='zmjy[0].category' :arr="zmjy"></fltuijian>
     <fltuijian v-if="ttet.length!=0" class="flac" :name='ttet[0].category' :arr="ttet"></fltuijian>
     <fltuijian v-if="gqtp.length!=0" class="flac" :name='gqtp[0].category' :arr="gqtp"></fltuijian>
     <fltuijian v-if="czfc.length!=0" class="flac" :name='czfc[0].category' :arr="czfc"></fltuijian>
     <fltuijian v-if="qt.length!=0" class="flac" :name='qt[0].category' :arr="qt"></fltuijian>
  </div>
  </div>
</template>

<script>
import {tuijian,jiemp,leb} from 'network/home/diantai/diantai.js'
import navbar from 'components/content/navbar.vue'
import Tuijiem from './tuijiem.vue'
import Fltuijian from './fltuijian.vue'
export default {

    components: { navbar, Tuijiem, Fltuijian },
  data() {
    return {
      isShow:-1,
      isShow2:-1,
        tuij:[],
    jiemph:[],
    sz:[],
    yygs:[], //音乐故事分类
    zmjy:[],  //助眠解压分类
    ttet:[],  //侃侃而谈分类
    gqtp:[],  //感情调频分类
    czfc:[],  //创作翻唱分类
    qt:[],    //其他分类
    }
  },
created(){
   //获取推荐节目
  tuijian().then(res=>{
    this.tuij=res.programs
  })
  //获取节目排行
  jiemp().then(res=>{
    this.jiemph=res.toplist
    this.sz=this.jiemph.splice(0,10)
  })
  //获取分类推荐
  leb(2).then(res=>{
this.yygs=res.djRadios.splice(0,4)
  })
    
  leb(6).then(res=>{
this.zmjy=res.djRadios.splice(0,4)
  })
    leb(5).then(res=>{
this.ttet=res.djRadios.splice(0,4)
  })
    leb(3).then(res=>{
this.gqtp=res.djRadios.splice(0,4)
  })
    leb(2001).then(res=>{
this.czfc=res.djRadios.splice(0,4)
  })
    leb(11).then(res=>{
this.qt=res.djRadios.splice(0,4)
  })
}
}
</script>

<style scoped>
.aac:hover{
  background-color: #EEEEEE  !important;
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
    width: 58px;
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
.nma{
  width: 100%;
}

</style>