<template>
  <div class="songq">
    <div class="left">
      <div class="xqaa">
        <div class="tp">
          <img :src="imega" alt="" />
          <div class="imga"></div>
        </div>
        <div class="xq">
          <div class="top">
            <span class="lab"></span><span class="namea">{{ gqname }}</span>
          </div>
          <div class="gs">
            歌手：<span>{{ name }}</span>
          </div>
          <div class="zj">
            所属专辑：<span>{{ zj }}</span>
          </div>
          <bftb :pl='sum'></bftb>
        </div>
      </div>
      <!-- 评论 -->
      <navbar name="评论" :suma='sum'>
        <template v-slot:gduo>
          <div></div>
        </template>
      </navbar>
      <div class="zx">最新评论({{sum}})</div>
      <!-- 用户评论 -->
      <div v-if="Object.keys(pl).length != 0" class="pai">
        <!-- 导入封装好的评论详情 -->
        <yonghu
          v-for="(item, index) in pl.hotComments"
          :key="index"
          :obj="item"
        ></yonghu>
      </div>
    </div>
  </div>
</template>

<script>
import bftb from "components/content/bftb.vue";
import yonghu from "components/content/pinlun/yonghu.vue";
import Navbar from "components/content/navbar.vue";
import { gqpinlun } from "network/home/gedan/pinlun.js";
export default {
  components: {
    bftb,
    yonghu,
    Navbar,
  },
  data() {
    return {
      imega: "", //  图片
      name: "", //作者名
      gqname: "", //歌曲名
      id: "", //歌曲id
      zj: "",
      pl: {}, //评论信息
      sum:0
    };
  },
  computed:{
    ba(){
      return this.$store.state.a.imega
    }
  },
  watch:{
    ba(){
         this.imega = this.$store.state.a.imega;
    this.name = this.$store.state.a.name;
    this.id = this.$store.state.a.id;
    this.gqname = this.$store.state.a.gqname;
    this.zj = this.$store.state.a.zj;
    gqpinlun(this.id).then((res) => {
      this.pl = res;
     this.sum= this.pl.hotComments.length

    });
    }
  },
  activated() {
    this.imega = this.$store.state.a.imega;
    this.name = this.$store.state.a.name;
    this.id = this.$store.state.a.id;
    this.gqname = this.$store.state.a.gqname;
    this.zj = this.$store.state.a.zj;
    gqpinlun(this.id).then((res) => {
      this.pl = res;
     this.sum= this.pl.hotComments.length

    });
  },
};
</script>

<style scoped>
.pai {
  width: 100%;
}
.xqaa {
  display: flex;
}
.tp {
  position: relative;
  width: 206px;
  height: 206px;
  margin-right: 0.260417rem;
}
.imga {
  top: -4px;
  left: -4px;
  width: 206px;
  position: absolute;
  height: 205px;
  background-position: -140px -580px;
  background-image: url(~assets/img/精灵图3.png);
  overflow: hidden;
}
img {
  height: 130px;
  margin: 34px;
  width: 130px;
}
.songq {
  width: 56%;
  background-color: #ffffff;
 
  margin: 0px auto;
  margin-bottom: 53px;
}
.left {
  width: 75%;

  padding: 30px 30px;
  box-sizing: border-box;

}
.top {
  display: flex;
  align-items: center;
}
.lab {
  width: 54px;
  height: 24px;
  margin-right: 10px;
  background-position: 0 -463px;
  background-image: url(~assets/img/精灵图4.png);
}
.namea {
  font-size: 0.130208rem;
}
.gs,
.zj {
  color: #999;
  margin: 10px 0;
  font-size: .072917rem;
}
.gs span,
.zj span {
  color: #0c73c2;
}
.zx{
  margin-top: 20px;
  padding-bottom: 10px;
  font-size: .073568rem;
  font-weight: 600;
  border-bottom: 1px solid #cfcfcf;
}
</style>