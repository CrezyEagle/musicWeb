<template>
  <!-- 歌手详情 -->
  <div class="sin">
    <div class="letf">
      <!-- 名称 -->
      <div class="name">
        <span class="name1">{{ name }}</span
        ><span class="name2">{{ name2 }}</span>
      </div>
      <!-- 图片 -->
      <div class="imga">
        <img :src="img" alt="" />
        <div v-if="!subscribed" class="sc" @click="sc"></div>
        <div v-show="!jga" v-else class="sc2" @mouseover="jg()"></div>
        <div v-if="subscribed && jga" class="sc3" @mouseout="lk()" @click="qxsc()"></div>
      </div>
      <!-- 东西呢 -->
      <div class="top">
        <div
          v-for="(item, index) in arr"
          :key="index"
          @click="fn(index)"
          :class="{ activ: isShow == index }"
          class="ll"
        >
          {{ item }}
        </div>
      </div>
      <!-- 歌手详情内容 -->
      <tableaa v-if="isShow == 0" :obj="obj" :ac="ac" class="gq1"></tableaa>
      <div v-else-if="isShow == 1" class="gq">
        <conplate
          v-for="(item, index) in zj.hotAlbums"
          :key="index"
          :weekData="item"
          @click="fnn(item.id)"
        ></conplate>
      </div>
      <div v-if="isShow == 2" class="gq">
        <div v-for="(item, index) in mvs" :key="index" class="mv">
          <div class="mvimg">
            <img :src="item.imgurl" alt="" />
            <a href="JavaScript:;" class="aa"></a>
            <a href="JavaScript:;" class="aa2" @click="fnmv(item.id)"></a>
          </div>
          <div class="mvname">{{ item.name }}</div>
        </div>
      </div>
      <div v-else-if="isShow == 3">
        <div class="mm"><span class="sp"></span>{{ name }}简介</div>
        <div class="jj">{{ xq.briefDesc }}</div>
        <div v-for="item in xq.introduction" :key="item">
          <div class="mm">{{ item.ti }}</div>
          <div class="jj2" v-for="(item, index) in gsh(item.txt)" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <!-- 右 -->
    <div class="rti">
      <div class="rmgs">热门歌手</div>
      <div class="imgxq">
        <div
          v-for="(item, index) in arr2"
          :key="index"
          class="rma"
          @click="ff(item.id, item.name, item.picUrl, item.alias)"
        >
          <img :src="item.img1v1Url" alt="" class="imgg" />
          <div>{{ item.name }}</div>
        </div>
      </div>
      <xzkh></xzkh>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import tableaa from "components/content/gequlieb/tableaa.vue";
import { gequ, zj, xq, mv, rm, bdxq } from "network/home/singerxq/index.js";
import Conplate from "components/content/conplate.vue";
import Xzkh from "components/common/xz/xzkh.vue";
export default {
  components: { tableaa, Conplate, Xzkh },
  data() {
    return {
      name: "",
      name2: "",
      id: "",
      img: "",
      arr: ["热门作品", "所有专辑", "相关MV", "艺人介绍", ""],
      isShow: 2,
      obj: {},
      ac: false,
      zj: {},
      xq: {},
      txt1: "",
      mvs: [],
      arr2: [],
      subscribed: false,
      jga: false,
    };
  },
  created() {
      axios.defaults.baseURL = "https://autumnfish.cn";
    this.qqiu();
    
  },
  activated() {
    window.scroll(0, 0);
  },
  computed: {
    idg() {
      return this.$route.href;
    },
    lpgb() {
      return this.$store.state.lpa
    },
  },
  watch: {
    idg(a, b) {
      if (a.substr(0, 14) != "/home/geshouxq") return;
      console.log(1);
      this.qqiu();
    },
    lpgb(a, b) {
      console.log("令牌改变");
      if (this.$route.href.substr(0, 14) != "/home/geshouxq") return;
      this.qqiu();
     
    },
  },
  methods: {
    sc(){
      var thi=this
      //判断有没有登录
      if(this.$store.state.lpa==1){
        this.$store.commit('setdl',true)
      }else{
         axios({
        //收藏歌手
        url:
          `/artist/sub?id=`+thi.id+`&t=1&cookie=` + encodeURIComponent(thi.$store.state.lpa),
        withCredentials: true, //关键
      }).then(res=>{
        console.log('收藏成功');
        thi.subscribed=true
        
      })
      }
    },
    qxsc(){
      var thi=this
       axios({
        //取消收藏歌手
        url:
          `/artist/sub?id=`+thi.id+`&t=2&cookie=` + encodeURIComponent(thi.$store.state.lpa),
        withCredentials: true, //关键
      }).then(res=>{
        console.log("取消收藏");
        thi.subscribed=false

      })
    },
    lk() {
      this.jga = false;
    },
    jg() {
      this.jga = true;
    },
    fnmv(id) {
      this.$router.push({
        path: "/home/mv",
        query: {
          id,
        },
      });
    },
    ff(id, name, img, name3) {
      let name2 = "";
      if (name3 != 0) {
        name2 = name3[0];
      }
      this.$router.push({
        path: "/home/geshouxq",
        query: {
          id,
          name,
          img,
          name2,
        },
      });
    },
    gsh(txt) {
      var text = txt.split("\n");
      return text;
    },
    fnn(id) {
      this.$router.push({
        path: "/home/xindiexq",
        query: {
          id,
        },
      });
    },
    qqiu() {
      var thi=this
      this.id = this.$route.query.id;
      this.name = this.$route.query.name;
      this.name2 = this.$route.query.name2;

      gequ(this.id).then((res) => {
        this.obj = res;
        this.img = res.artist.picUrl + "?param=640y300";
        // console.log(res);
      });

      zj(this.id).then((res) => {
        this.zj = res;
      });
      xq(this.id).then((res) => {
        this.xq = res;
      });
      mv(this.id).then((res) => {
        this.mvs = res.mvs;
      });
      rm(this.id).then((res) => {
        this.arr2 = res.artists.splice(0, 6);
      });
            if (this.$store.state.lpa != 1&&this.$store.state.ncym!=true) {
         axios({
        //获取收藏的歌手
        url:
          `/artist/sublist?cookie=` + encodeURIComponent(thi.$store.state.lpa),
        withCredentials: true, //关键
      }).then((res)=> {
       for(let i=0;i<res.data.data.length;i++){
         if(res.data.data[i].name==this.name){
           this.subscribed=true 
           return
         }
       }
       this.subscribed=false
      });
      }
    },
    fn(index) {
      this.isShow = index;
    },
  },
};
</script>

<style scoped>
.ll{
  cursor: pointer;
}
.rmgs {
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
  margin-bottom: 10px;
}
.rma div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.rma {
  width: 50px;
  cursor: pointer;
  margin: 7px 5px;
}
.imgxq {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.imgg {
  width: 50px;
  height: 50px;
}
.mvname {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.072917rem;
}
.mv {
  width: 137px;
  margin: 10px 10px;
  
}
.mvimg {
  cursor: pointer;
  width: 137px;
  position: relative;
  height: 103px;
}
.mvimg img {
  height: 100%;
}
.aa {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(~assets/img/精灵图3.png);
  z-index: 10;
  background-position: 0 -1170px;
  top: 0;
  left: 0;
}
.aa2 {
  width: 44px;
  height: 44px;
  top: 50%;
  left: 50%;
  margin: -22px 0 0 -22px;
  background-position: -30px -135px;
  position: absolute;
  background-image: url(~assets/img/精灵图2.png);
  z-index: 11;
}
.aa2:hover {
  background-position: -30px -85px;
}
.jj {
  line-height: 25px;
  margin-top: 5px;
  color: #666;
  font-size: 0.057292rem;
  text-indent: 2em;
}
.jj2 {
  line-height: 25px;
  margin-top: 5px;
  color: #666;
  font-size: 0.057292rem;
}
.mm {
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-size: 0.072917rem;
}
.sp {
  display: inline-block;
  height: 14px;
  width: 3px;
  margin-right: 7px;
  background: #c10d0c;
}
.gq1 {
  margin-top: 20px;
}
.gq {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.top {
  display: flex;
  background-color: #f7f7f7;

  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.top div {
  width: 20%;
  text-align: center;
  padding: 10px 10px;
  font-size: 0.078125rem;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
.top div:hover {
  border-top: 1px solid red;
}
.activ {
  border-top: 1px solid red !important;
  box-sizing: border-box;
  border-bottom: 1px solid #fff !important;
  background-color: #fff;
}
.sin {
  width: 56%;
  margin: 0px auto;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  border: 1px solid #d3d3d3;
}
.letf {
  width: 75%;
  padding: 30px;
  box-sizing: border-box;
  border-right: 1px solid #d3d3d3;
}
.rti {
  width: 25%;
  padding: 30px;
  box-sizing: border-box;
}
.imga {
  position: relative;
  width: 100%;
}
.sc {
  position: absolute;
  bottom: 18px;
  right: 20px;
  width: 76px;
  height: 32px;
  background-position: 0 -500px;
  background-image: url(~assets/img/精灵图2.png);
  cursor: pointer;
}
.sc2 {
  position: absolute;
  bottom: 18px;
  right: 20px;
  width: 76px;
  background-position: 0 -735px;
  background-image: url(~assets/img/精灵图2.png);
  height: 32px;
  cursor: pointer;
}
.sc3 {
  position: absolute;
  background-position: 0 -781px;
  bottom: 18px;
  right: 20px;
  width: 76px;
  height: 32px;
  cursor: pointer;
  background-image: url(~assets/img/精灵图2.png);
}
img {
  width: 100%;
}
.name1 {
  font-size: 0.125rem;
}
.name2 {
  font-size: 0.072917rem;
  color: #999;
  display: inline-block;
  margin-left: 10px;
}
.name {
  margin-bottom: 20px;
}
</style>