<template>
  <div class="gedanxq" v-if="Object.keys(obj).length != 0">
    <div class="left">
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
        :subscribed="subscribed"
        @bfa1="bfa"
        @sca="sca"
        lx="1"
        :id="$route.query.id"
      ></tobimg>
      <!-- 歌曲列表 -->
      <gequlieb :ge="obj.trackCount" :bf="obj.playCount"></gequlieb>
      <tablea :obj="obj" :ac="ac" :bf="bf"></tablea>
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
      <plxx lxa="2" @sx="sxa"></plxx>
      <div class="zx">最新评论</div>
      <pinlun :sxpl='shuax' :id="obj.id" class="pla"></pinlun>
    </div>
    <div class="rirt">
      <rir :id="obj.id" :arr="obj.subscribers"></rir>
      <xzkh></xzkh>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import gedansc from "network/home/gedan/gedansc.js";
import gedanxq from "network/home/gedan/index3.js";
import tobimg from "components/content/tobimg.vue";
import Gequlieb from "components/content/gequlieb/gequlieb.vue";
import Tablea from "components/content/gequlieb/tablea.vue";
import Navbar from "components/content/navbar.vue";
import { gqpinlun } from "network/home/gedan/pinlun.js";
import Pinlun from "components/content/pinlun/pinlun.vue";
import Rir from "./rir.vue";
import Xzkh from "components/common/xz/xzkh.vue";
import Plxx from '../../../components/content/plxx.vue';

export default {
  components: {
    tobimg,
    Gequlieb,
    Tablea,
    Navbar,
    Pinlun,
    Rir,
    Xzkh,
    Plxx,
   
  },

  data() {
    return {
      id: null,
      obj: {},
      ac: false,
      pl: {},
      bf: 0,
      subscribed: false,
       shuax:1,
    };
  },
  computed: {
    ig() {
      return this.$route.query.id;
    },
    lpgb() {
      return this.$store.state.lpa;
    },
  },
  watch: {
    ig(a, b) {
      if (
        this.$route.href.substr(0, 13) == "/home/gedanxq"
      ) {
      } else {
        return;
      }

      this.qqsj();
    },
    lpgb(a, b) {
      if (
        this.$route.href.substr(0, 13) == "/home/gedanxq" 
      ) {
      } else {
        return;
      }
      this.qqsj();
    },
  },
  created() {
    axios.defaults.baseURL = "https://autumnfish.cn";
    this.qqsj();
  },
  methods: {
    //刷新评论
    sxa(){
      this.shuax++
      console.log(1);
      },
    sca(sc) {
      if (sc) {
        gedansc(this.obj.id, this.$store.state.lpa, 1).then((res) => {
          console.log("歌单收藏成功");
          this.subscribed = sc;
        });
      } else {
        gedansc(this.obj.id, this.$store.state.lpa, 2).then((res) => {
          console.log("歌单取消收藏成功");
          this.subscribed = sc;
        });
      }
    },
    bfa() {
      this.bf++;
    },
    qqsj() {
      var thi = this;
      
      if (this.$store.state.lpa != 1&&this.$store.state.ncym!=true) {
        axios({
          //获取用户歌单
          url:
            `/playlist/detail?id=` +
            this.$route.query.id +
            `&cookie=` +
            encodeURIComponent(thi.$store.state.lpa),
          withCredentials: true, //关键
        }).then((res) => {
          // console.log(res);
          this.subscribed = res.data.playlist.subscribed;
          this.obj = res.data.playlist;
          gqpinlun(this.$route.query.id).then((res) => {
            this.pl = res;
          });
        });
      } else {
        gedanxq(this.$route.query.id)
          .then((res) => {
            this.obj = res.playlist;
            // console.log(res);
            gqpinlun(this.$route.query.id).then((res) => {
              this.pl = res;
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  activated() {
    window.scroll(0, 0);
    this.qqsj();
  },
};
</script>

<style scoped>
.rirt {
  width: 25%;
  padding: 30px;
  box-sizing: border-box;
  border: 1px solid #d5d5d5;
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
.ck {
  margin: 0 auto;
  width: 170px;
  margin-bottom: 15px;
  text-align: center;
}
.lj {
  margin: 0 auto;
  width: 90px;
  padding: 5px 5px;
  border-radius: 10px;
  color: #fff;
  background-color: #ff271c;
  text-align: center;
}
.xz {
  margin-top: 30px;
}
.gedanxq {
  width: 56%;
  margin: 0 auto;
  display: flex;
  background-color: #fff;
  border-left: 1px solid #d5d5d5;
}
.left {
  padding: 30px;
  box-sizing: border-box;
  width: 75%;
}
</style>