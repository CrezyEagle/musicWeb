<template>
  <!-- mv -->
  <div class="homemv" v-if="Object.keys(mvSj).length != 0">
    <div class="left">
      <div class="name">
        
        <span class="sp"></span>
        <span class="namet">{{ mvSj.data.name }}</span>
     <div class="fys">
          <span class="ys" v-for="(item, index) in mvSj.data.artists" :key="index"
          >/ {{ item.name }}</span
        >
     </div>
      </div>
      <video :src="mvurla" controls class="mv"  ></video>
      <div>
        <span v-if="!subscribed" class="spa" @click="sca()"
          ><span>{{ mvSj.data.subCount }}</span></span
        >
        <span v-else class="spa1" @click="qxsc()"
          ><span>{{ mvSj.data.subCount }}</span></span
        >
        <!-- 分享 -->
        <span class="zfa" @click="fx()"
          ><span>{{ mvSj.data.shareCount }}</span></span
        >
      </div>
      <!-- 评论 -->
      <div class="zx">最新评论({{ sum }})</div>
      <!-- 用户评论 -->
      <div v-if="Object.keys(pl).length != 0" class="pai">
        <!-- 导入封装好的评论详情 -->
        <yonghu
          v-for="(item, index) in pl.comments"
          :key="index"
          :obj="item"
        ></yonghu>
      </div>
    </div>
    <div class="rit">
      <div class="jj">mv简介</div>
      <div class="jjdiv">发布时间：{{ mvSj.data.publishTime }}</div>
      <div class="jjdiv">播放次数：{{ mvSj.data.playCount }}次</div>
      <div class="jj cd">相关推荐</div>
      <div
        v-for="(item, index) in xs"
        :key="index"
        class="imgaa"
        @click="mvz(item.id)"
      >
        <div class="imga"><img :src="item.cover" alt="" /></div>
        <div class="nam">
          <div class="xl">{{ item.name }}</div>
          <div>{{ item.artistName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mvsj,
  mvurl,
  mvpl,
  mvxs,
  yhmvsj,
  yhscqx,
} from "network/home/MV/index.js";
import yonghu from "components/content/pinlun/yonghu.vue";


export default {
  components: { yonghu, },
  data() {
    return {
      mvSj: {},
      mvurla: "",
      pl: {},
      sum: 0,
      xs: [],
      subscribed: false, //是否订阅
    };
  },
  computed: {
    ida() {
      return this.$route.href;
    },
    lpag() {
      return this.$store.state.lpa;
    },
  },
  watch: {
    ida(a, b) {
      if (a.substr(0, 8) != "/home/mv") return;
      console.log(1);
      this.qq();
    },
    lpag(a, b) {
      if (this.$route.href.substr(0, 8) != "/home/mv") return;
      console.log(2);
      this.qq();
    },
  },
  methods: {
    fx(){
      if(this.$store.state.ncym==true) return
     if(this.$store.state.lpa!=1){
       this.$store.commit('setfxlx',3)
        this.$store.commit('setfxid',this.mvSj.data.id)
      this.$store.commit('setfxname',this.mvSj.data.name)
      
     }else{
       this.$store.commit('setdl',true)
     }
    },
    //收藏歌曲
    sca() {
      if (this.$store.state.lpa == 1) {
        this.$store.commit("setdl", true);
      } else {
        yhscqx(this.mvSj.data.id, this.$store.state.lpa, 1).then((res) => {
          this.subscribed = true;
        });
      }
    },
    qxsc() {
      if (this.$store.state.lpa == 1) {
        this.$store.commit("setdl", true);
      } else {
        yhscqx(this.mvSj.data.id, this.$store.state.lpa, 2).then((res) => {
          this.subscribed = false;
        });
      }
    },
    mvz(id) {
      this.$router.push({
        path: "/home/mv",
        query: {
          id,
        },
      });
    },
    qq() {
      
      if (this.$route.href.substr(0, 8) != "/home/mv") return;
      if (this.$store.state.lpa != 1&&this.$store.state.ncym!=true) {
        yhmvsj(this.$route.query.id, this.$store.state.lpa).then((res) => {
          this.subscribed = res.subed;
        });
      }
      mvsj(this.$route.query.id).then((res) => {
        this.mvSj = res;
      });
      mvurl(this.$route.query.id).then((res) => {
        this.mvurla = res.data.url;
      }),
        mvpl(this.$route.query.id).then((res) => {
          this.pl = res;
          this.sum = this.pl.comments.length;
        });
      mvxs(this.$route.query.id).then((res) => {
        this.xs = res.mvs;
      });
    },
  },
  activated() {
    this.qq();
  },
};
</script>

<style scoped>
.zfa {
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  background-image: url(~assets/img/精灵图5.png);
  background-position: right -1020px;
  display: inline-block;
  cursor: pointer;
  padding: 0 5px 0 0;
}
.zfa span {
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  padding: 0 7px 0 36px;
  background-image: url(~assets/img/精灵图5.png);
  background-position: 0 -1225px;
  display: block;
}
.xl:hover {
  text-decoration: underline;
  color: #333;
}
.nam {
  width: 40%;
  margin-left: 10px;
}
.nam div {
  width: 100%;
  font-size: 0.0625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nam div:nth-child(2) {
  margin-top: 20px;
  color: #999;
  font-size: 0.052083rem;
}
.imgaa {
  cursor: pointer;
  display: flex;
  margin-bottom: 20px;
  width: 100%;
}
.imga {
  width: 96px;
  height: 54px;
}
.imga img {
  width: 100%;
}
.cd {
  margin-top: 30px;
}
.jjdiv {
  font-size: 0.0625rem;
  color: #999;
  margin-bottom: 5px;
}
.jj {
  padding-bottom: 10px;
  margin-bottom: 10px;
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid #cfcfcf;
}
.rit {
  width: 25%;
  border-left: 1px solid #d3d3d3;
  box-sizing: border-box;
  padding: 30px;
}
.spa1 {
  display: inline-block;
  margin-right: 10px;
  padding: 0 5px 0 0;
  white-space: nowrap;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background-position: right -3123px;
  background-image: url(~assets/img/精灵图5.png);
}
.spa {
  display: inline-block;
  margin-right: 10px;
  padding: 0 5px 0 0;
  white-space: nowrap;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background-position: right -1020px;
  background-image: url(~assets/img/精灵图5.png);
}
.spa span {
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background-image: url(~assets/img/精灵图5.png);
  display: block;
  padding: 0 7px 0 36px;
  background-position: 0 -977px;
}
.spa1 span {
  background-position: 0 -3080px;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background-image: url(~assets/img/精灵图5.png);
  display: block;
  padding: 0 7px 0 36px;
}
.spa1:hover {
  background-position: right -1106px;
}
.spa1:hover span {
  background-position: 0 -3180px;
}
.spa:hover {
  background-position: right -1106px;
}
.spa:hover span {
  background-position: 0 -1063px;
}

.pai {
  width: 100%;
}
.zx {
  margin-top: 20px;
  padding-bottom: 10px;
  font-size: 0.073568rem;
  font-weight: 600;
  border-bottom: 1px solid #cfcfcf;
}
.mv {
  width: 100%;
  margin-top: 20px;
}
.namet {
  font-size: 0.104167rem;
  margin-left: 10px;

  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ys {
  color: #0c73c2;
  font-size: 0.0625rem;
  margin-left: 10px;
}
.fys{
display: flex;
flex-wrap: wrap;
 overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    }
.name {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
}
.sp {
  width: 29px;
  height: 18px;
  background-position: -230px -480px;
  background-image: url(~assets/img/精灵图7.png);
}
.homemv {
  background-color: #fff;
  width: 56%;
  margin: 0 auto;
  display: flex;
  border: 1px solid #d3d3d3;
}
.left {
  width: 75%;
  padding: 30px;
  box-sizing: border-box;
}
</style>