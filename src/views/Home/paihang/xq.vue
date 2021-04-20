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
        <bftb :fx='gedanxq.shareCount' :pl='gedanxq.commentCount' @bfa='bfg()'>
          <template v-slot:sc>
            <div></div>
          </template>
        </bftb>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="gqlb">
      <div>歌曲列表</div>
      <div>{{gedanxq.tracks.length}}首歌</div>
      <div>播放：<span>{{gedanxq.playCount}}</span>次</div>
    </div>
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
import Pinlun from 'components/content/pinlun/pinlun.vue';
import tablea from './tablea.vue';
import Bftb from 'components/content/bftb.vue';
export default {
  components: { tablea, Navbar, Pinlun, Bftb },
  data() {
    return {
      bf:0
    }
  },
  methods:{
    bfg(){
this.bf++
    }
  },
  computed: {
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
      ddefault() {
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
.gqlb{
  margin-top: 40px;
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;
  border-bottom: 2px solid #C20C0C;
  align-items: center;
  width: 100%;
}
.gqlb div:nth-child(1){
  font-size: .089333rem;
}
.gqlb div:nth-child(2){
  flex: 1;
  margin-left: 20px;
  font-size: .058854rem;
  color: #666666;
}
.gqlb div:nth-child(3){

  margin-left: 20px;
  font-size: .066211rem;
  color: #666666;
}
.gqlb div:nth-child(3) span{
 

  font-size: 0.89em;
  color: #C20C0C;
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