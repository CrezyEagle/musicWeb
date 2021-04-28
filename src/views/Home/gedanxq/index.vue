<template>
  <div class="gedanxq" v-if="Object.keys(obj).length!=0">
    <div class="left">
      <tobimg :imgurl="obj.coverImgUrl" :name='obj.name' 
      :zzurl='obj.creator.avatarUrl'
      :zzname='obj.creator.nickname'
      :sja='obj.createTime'
      :sc='String(obj.subscribedCount)'
      :fx='obj.shareCount'
      :pl='obj.commentCount'
      :tags='obj.tags'
      :description='obj.description'
      ></tobimg>
      <!-- 歌曲列表 -->
      <gequlieb :ge="obj.trackCount" :bf="obj.playCount"></gequlieb>
      <tablea :obj='obj' :ac='ac'></tablea>
      <div class="xz">
        <div class="ck">查看更多内容，请下载客户端</div>
      <div class="lj">立即下载</div>
      </div>
      <!-- 评论 -->
      <navbar name="评论">
        <template v-slot:gduo>
          <div></div>
        </template>
      </navbar>
       <div class="zx">最新评论</div>
       <pinlun :id="obj.id" class="pla"></pinlun>
      
    </div>
    <div class="rirt">
      <rir :id='obj.id' :arr='obj.subscribers'></rir>
    </div>
  </div>
</template>

<script>
import gedanxq from 'network/home/gedan/index3.js'
import tobimg from 'components/content/tobimg.vue'
import Gequlieb from 'components/content/gequlieb/gequlieb.vue'
import Tablea from 'components/content/gequlieb/tablea.vue'
import Navbar from '../../../components/content/navbar.vue'
import { gqpinlun } from "network/home/gedan/pinlun.js";
import Pinlun from '../../../components/content/pinlun/pinlun.vue'
import Rir from './rir.vue'

export default {
  components: {
     tobimg, 
     Gequlieb,
     Tablea,
     Navbar,
    Pinlun,
     Rir  
      },

   data() {
    return {
      id:null,
      obj:{},
      ac:false,
      pl:{}
     
    }
  },
  computed:{
    ig(){
     return this.$route.query.id
    }
  },
  watch:{
ig(a,b){
    gedanxq(a).then(res=>{

    this.obj=res.playlist
    gqpinlun(a).then(res=>{
      this.pl=res
      console.log(this.pl);
    })
})
}
  },
created(){
  this.id=this.$route.query.id
  gedanxq(this.id).then(res=>{

    this.obj=res.playlist
    gqpinlun(this.obj.id).then(res=>{
      this.pl=res
    })
})
}
}
</script>

<style scoped>
.rirt{
  width: 25%;
  padding: 30px;
  box-sizing: border-box;
  border: 1px solid #d5d5d5;

}
.pla{
  width: 100%;
}
.zx {
  margin-top: 20px;
  padding-bottom: 10px;
  font-size: 0.073568rem;
  font-weight: 600;
  border-bottom: 1px solid #cfcfcf;
}
.ck{
margin: 0 auto;
width: 170px;
margin-bottom: 15px;
text-align: center;
}
.lj{
  margin: 0 auto;
width: 90px;
padding: 5px 5px;
border-radius: 10px;
color: #fff;
background-color: #FF271C;
text-align: center;
}
.xz{

  margin-top: 30px;

}
.gedanxq{
  width: 56%;
  margin: 0 auto;
  display: flex;
  background-color: #fff;
    border-left: 1px solid #d5d5d5;
}
.left{
  padding: 30px;
 box-sizing: border-box;
  width: 75%;
}
</style>