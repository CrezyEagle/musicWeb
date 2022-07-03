<template>
  <!-- 用户歌单 -->
  <div class="left" v-if="Object.keys(obj).length != 0">
    <tobimg
      :imgurl="obj.coverImgUrl"
      :name="obj.name"
      :zzurl="obj.creator.avatarUrl"
      :zzname="obj.creator.nickname"
      :sja="obj.createTime"
      :sc="String(obj.subscribedCount)"
      :fx="obj.shareCount"
      :pl="obj.commentCount"
      :tags="obj.tags"
      :description="obj.description"
      @bfa1="bfa"
      :subscribed="subscribed"
      @sca="sca"
      @sjsx='cxsx2'
    >
    <template v-slot:xq2>
     <div></div>
    </template></tobimg>
    <!-- 歌曲列表 -->
    <gequlieb :ge="obj.trackCount" :bf="obj.playCount"></gequlieb>
    <tablea :inde='inde' @cxsx='cxsx' :obj="obj" :ac="ac" :bf="bf"></tablea>
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
</template>

<script>
import axios from "axios";
import gedanxq from "network/home/gedan/index3.js";
import gedansc from "network/home/gedan/gedansc.js";
import tobimg from "components/content/tobimg.vue";
import Gequlieb from "components/content/gequlieb/gequlieb.vue";
import Tablea from "components/content/gequlieb/tablea.vue";
import Navbar from "components/content/navbar.vue";
import { gqpinlun } from "network/home/gedan/pinlun.js";
import Pinlun from "components/content/pinlun/pinlun.vue";
export default {
  data() {
    return {
      id: null,
      obj: {},
      ac: false,
      pl: {},
      bf: 0,
      subscribed: false,
      inde:'-1'
    };
  },
  computed: {
    ig() {
      return this.$route.query.id;
    },
    indeg(){
      return this.$route.query.index
    }
  },
  watch: {
    indeg(a){
      if( this.$route.href.substr(0, 13) == "/mymusic/gdan"){
        this.inde=a
      }
    },
    ig(a, b) {
      if (
        this.$route.href.substr(0, 13) == "/home/gedanxq" ||
        this.$route.href.substr(0, 13) == "/mymusic/gdan"
      ) {
      } else {
        return;
      }
      this.qqsj();
    },
  },
  created(){
 axios.defaults.baseURL = "http://localhost:3000";
    this.qqsj();
  },

  methods: {
    cxsx2(){
      this.$store.commit('setgdsca')
    },
    cxsx(){
       this.$store.commit('setgdsca')
      this.qqsj();
      
    },
    sca(sc) {
      if (sc) {
        gedansc(this.obj.id, this.$store.state.lpa, 1).then((res) => {
          console.log("歌单收藏成功");
          this.subscribed = sc;
       
          setTimeout(() => {
            this.qqsj();
               this.$store.commit("setsxsj");
          }, 1000);
        });
      } else {
        gedansc(this.obj.id, this.$store.state.lpa, 2).then((res) => {
          console.log("歌单取消收藏成功");
          this.subscribed = sc;
     
          setTimeout(() => {
            this.qqsj();
                 this.$store.commit("setsxsj");
          }, 1000);
        });
      }
    },
    bfa() {
      this.bf++;
    },
    qqsj() {
      console.log("请求收藏歌单");
      var thi = this;
      if (this.$store.state.lpa != 1) {
        if(this.$route.query.id==undefined) return
        let sjc=+new Date()
        axios({
          //获取用户歌单
          url:
            `/playlist/detail?id=` +
            thi.$route.query.id +`&sjc=`+sjc+
            `&cookie=` +
            encodeURIComponent(thi.$store.state.lpa),
          withCredentials: true, //关键
        }).then((res) => {
          if (this.$route.query.dy != undefined) {
            this.subscribed = this.$route.query.dy;
          } else {
            // this.subscribed = res.data.playlist.subscribed;
          }
          // console.log(res);
          this.obj = res.data.playlist;
        
          if(this.$route.query.id == undefined) return
          gqpinlun(this.$route.query.id).then((res) => {
            this.pl = res;
          });
        });
      }
    },
  },
  activated() {
    window.scroll(0, 0);
    if( this.$route.href.substr(0, 13) == "/mymusic/gdan"){
        this.inde=this.$route.query.index
      }
  },
  components: {
    tobimg,
    Gequlieb,
    Tablea,
    Navbar,
    Pinlun,
  },
};
</script>

<style scoped>
.lj {
  margin: 0 auto;
  width: 90px;
  padding: 5px 5px;
  border-radius: 10px;
  color: #fff;
  background-color: #ff271c;
  text-align: center;
}
.pla {
  width: 100%;
}
.zx {
  margin-top: 20px;
  padding-bottom: 10px;
  font-size: 0.073568rem;
  font-weight: 600;
  border-bottom: 1px solid #cfcfcf;
}
.left {
  padding: 30px;
  box-sizing: border-box;
  width: 75%;
}
.xz {
  margin-top: 30px;
}
.ck {
  margin: 0 auto;
  width: 170px;
  margin-bottom: 15px;
  text-align: center;
}
</style>