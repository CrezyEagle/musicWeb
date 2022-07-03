<template>
  <div class="xq" v-if="Object.keys($props.gedanxq).length != 0">
    <div class="hd">
      <div class="timg"><img :src="gedanxq.imga" alt="" /> <span class="imgsp"></span></div>
      <div class="wz">
        <div class="name">{{ gedanxq.name }}</div>
        <div class="sj">
          <span class="bb"></span>最近更新：{{ sj }}（{{
            gedanxq.updateFrequency
          }}）
        </div>
        <bftb lx='1' :fxname='gedanxq.name' :id='gedanxq.id' :fx='gedanxq.shareCount' :subscribed='subscribed' :sc='String(gedanxq.subscribedCount)' @sca='sca' :pl='gedanxq.commentCount' @bfa='bfg()'>
     
        </bftb>
      </div>
    </div>
    <!-- 歌曲列表 -->
   <gequlieb :ge='gedanxq.tracks.length' :bf='gedanxq.playCount'></gequlieb>
    <tablea :obj="gedanxq" :bf='bf'></tablea>
    <!-- 评论导航 -->
    <navbar name="评论">
      <template v-slot:gduo>
        <div>
          
        </div>
      </template>
    </navbar>
    <div class="zx">最新评论</div>
    <pinlun :id="gedanxq.id" class="pla"></pinlun>
  </div>
</template>

<script>
import Navbar from 'components/content/navbar.vue';
import gedansc from "network/home/gedan/gedansc.js";
import Pinlun from 'components/content/pinlun/pinlun.vue';
import tablea from 'components/content/gequlieb/tablea.vue';
import Bftb from 'components/content/bftb.vue';
import Gequlieb from 'components/content/gequlieb/gequlieb.vue';
export default {
  components: { tablea, Navbar, Pinlun, Bftb, Gequlieb },
  data() {
    return {
      bf:0,
      subscribed:false
    }
  },
  methods:{
    bfg(){
this.bf++
    },
    sca(sc){
   if(sc){
        gedansc(this.gedanxq.id,this.$store.state.lpa,1).then(res=>{
          console.log('歌单收藏成功');
this.subscribed=sc
        })
      }else{
gedansc(this.gedanxq.id,this.$store.state.lpa,2).then(res=>{
          console.log('歌单收藏成功');
this.subscribed=sc
        })
      }
    }
  },
  watch:{
    lpa(){
   
  this.subscribed=this.gedanxq.scmy
   
    }
  },
  computed: {
    lpa(){
      if(Object.keys(this.gedanxq).length == 0) return
      return this.gedanxq.scmy
    },
    //时间格式化
    sj() {
      var c = this.gedanxq.sj;
      var date = new Date(c);
      var yue = "";
      var ri = "";
      if (date.getMonth() + 1 < 10) {
        yue = "0" + (date.getMonth() + 1);
      } else {
        yue = date.getMonth() + 1;
      }
      if (date.getDate() < 10) {
        ri = "0" + date.getDate();
      } else {
        ri = date.getDate();
      }
      return yue + "月" + ri + "日";
    },
  },
  props: {
    gedanxq: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.pla{
  width: 100%;
}

.bb {
  width: 13px;
  height: 13px;
  display: inline-block;
  background-image: url(~assets/img/精灵图4.png);
  background-position: -18px -682px;
  margin-right: 5px;
}
.xq {
  padding: 30px 30px;
  box-sizing: border-box;
    border-right: 1px solid #d5d5d5;
}
.timg{
  position: relative;
  padding: 3px;
  border: 1px solid #CCCCCC;
}
img {
  width: 150px;
  height: 150px;
  background-position: -230px -380px;
}
.imgsp{
  width: 150px;
    height: 150px;
    background-position: -230px -380px;
    top: 0px;
          background-image: url(~assets/img/精灵图3.png);
    position: absolute;
    left: 0px;
}
.hd {
  width: 100%;
  display: flex;
}
.wz {
  margin-left: 20px;
}
.name {
  font-size: .094587rem;
  margin: 10px 0px;
}
.sj {
  font-size: .058854rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  color: #666666;
}
.zx{
  margin-top: 20px;
  padding-bottom: 10px;
  font-size: .073568rem;
  font-weight: 600;
  border-bottom: 1px solid #cfcfcf;
}

</style>