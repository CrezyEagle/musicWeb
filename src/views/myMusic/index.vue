<template>
  <!-- 我的音乐 -->
  <div class="my" v-if="$store.state.lpa==1">
    <div class="name">
      <div class="name2" @click="fn()">立即登录</div>
    </div>
  </div>
  <div v-else class="mymuc">
    <div class="left">
      <div
        class="zt"
        v-if="Object.keys(yhgs).length != 0"
        @click="ges()"
        :class="{ activ: gesclick }"
      >
        <span class="jt xc"></span>我的歌手（{{ yhgs.data.length }}）
      </div>
      <div
        class="zt"
        v-if="Object.keys(yhmv).length != 0"
        @click="mva()"
        :class="{ activ: mvclick }"
      >
        <span class="jt xc"></span>我的视频（{{ yhmv.data.length }}）
      </div>
      <div
        class="zt"
        v-if="Object.keys(yhdt).length != 0"
        @click="dta()"
        :class="{ activ: dtclick }"
      >
        <span class="jt xc"></span>我的电台（{{ yhdt.djRadios.length }}）
      </div>
      <div class="zt" v-if="yhcjgd.length != 0" @click="xsg()">
        <span :class="{ jt: xs, jt2: !xs }"></span>我的歌单（{{
          yhcjgd.length
        }}）
      </div>
      <div class="xsname" v-if="yhcjgd.length != 0" v-show="!xs">
        <div
          class="bl"
          v-for="(item, index) in yhcjgd"
          :key="index"
          @click="tz(item.id, true, index)"
          :class="{ activ: cjclick == index }"
        >
          <div class="imga">
            <img :src="item.coverImgUrl" alt="" />
          </div>
          <div class="blna">
            <div class="blname">{{ item.name }}</div>
            <div class="blname2">{{ item.trackCount }} 首</div>
          </div>
        </div>
      </div>
      <div class="zt" v-if="yhscgd.length != 0" @click="xsg2()">
        <span :class="{ jt: xs2, jt2: !xs2 }"></span>收藏歌单（{{
          yhscgd.length
        }}）
      </div>
      <div class="xsname" v-if="yhscgd.length != 0" v-show="!xs2">
        <div
          class="bl"
          v-for="(item, index) in yhscgd"
          :key="index"
          @click="tz(item.id, undefined, index)"
          :class="{ activ: scclick == index }"
        >
          <div class="imga">
            <img :src="item.coverImgUrl" alt="" />
          </div>
          <div class="blna">
            <div class="blname">{{ item.name }}</div>
            <div class="blname2">
              {{ item.trackCount }} 首 by
              <span>{{ item.creator.nickname }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isShow: true,
      yhged: {}, //用户歌单
      yhxq: {}, //用户详情

      yhgs: {}, //用户歌手
      yhmv: {}, //用户收藏mv
      yhscgd: [], //用户收藏歌单
      yhcjgd: [], //用户创建的歌单
      yhdt: {}, //用户收藏的电台
      xs: false,
      xs2: true,
      cjclick: 0,
      scclick: -1,
      gesclick: false,
      mvclick: false,
      dtclick:false
    };
  },
  activated() {
    this.cjclick = 0;
    this.scclick = -1;
    this.gesclick = false;
    this.mvclick = false;
    this.dtclick=false
    // this.$store.commit('setsxsj')
    axios.defaults.baseURL = "http://localhost:3000";
    // this.$store.commit("setsxsj");
    if (this.$store.state.lpa != 1) {
      this.isShow = false;
      this.shujqq();
    }
  },
  methods: {
    dta(){
this.gesclick = false;
      this.scclick = -1;
      this.cjclick = -1;
      this.mvclick = false;
      this.dtclick=true
        this.$router.push({
        path: "/mymusic/dt",
      });
    },
    //跳转到歌手
    ges() {
      this.gesclick = true;
      this.scclick = -1;
      this.cjclick = -1;
      this.mvclick = false;
      this.dtclick=false
      this.$router.push({
        path: "/mymusic/gs",
      });
    },
    //跳转到mv
    mva() {
      this.gesclick = false;
       this.dtclick=false
      this.scclick = -1;
      this.cjclick = -1;
      this.mvclick = true;
      this.$router.push({
        path: "/mymusic/mv",
      });
    },
    //跳转到歌单
    tz(id, dy, index) {
      if (dy == undefined) {
        this.scclick = index;
        this.cjclick = -1;
        this.gesclick = false;
         this.dtclick=false
        this.mvclick = false;
        this.$router.push({
          path: "/mymusic/gdan",
          query: {
            id,
          },
        });
      } else {
        this.cjclick = index;
        this.scclick = -1;
        this.gesclick = false;
        this.mvclick = false;
         this.dtclick=false
        this.$router.push({
          path: "/mymusic/gdan",
          query: {
            id,
            dy,
            index
          },
        });
      }
    },
    xsg() {
      this.xs = !this.xs;
    },
    xsg2() {
      this.xs2 = !this.xs2;
    },
    fn() {
      this.$store.commit("setdl", true);
    },
    shujqq() {
      var thi = this;
      // axios({
      //   //刷新登录
      //   url:
      //     `/login/refresh?cookie=` + encodeURIComponent(thi.$store.state.lpa),
      //   withCredentials: true, //关键
      // }).then((res) => {
      //   console.log("刷新登录");
      // });
      let sjc = +new Date();
      // console.log(this.$store.state.uid);
      axios({
        //获取用户详情
        url:
          `/user/detail?uid=` +
          thi.$store.state.uid +
          `&cookie=` +
          encodeURIComponent(thi.$store.state.lpa),
        withCredentials: true, //关键
      }).then(function (res) {
        thi.yhxq = res.data;
      });
      axios({
        //获取用户歌单
        url:
          `/user/playlist?uid=` +
          thi.$store.state.uid +
          `&sjc` +
          sjc +
          `&cookie=` +
          encodeURIComponent(thi.$store.state.lpa),
        withCredentials: true, //关键
      }).then(function (res) {
        thi.yhged = res.data;
        
       if(thi.yhged.playlist.length!=0){
          thi.yhscgd = thi.yhged.playlist.filter((n) => {
          return n.creator.userId != thi.$store.state.uid;
        });
        thi.yhcjgd = thi.yhged.playlist.filter((n) => {
          return n.creator.userId == thi.$store.state.uid;
        });
          thi.$router.push({
          path: "/mymusic/gdan",
          query: {
            id: thi.yhcjgd[0].id,
            dy: true,
            index:'0'
          },
        });
       }
      
      });

      axios({
        //获取收藏的歌手
        url:
          `/artist/sublist?cookie=` +
          encodeURIComponent(thi.$store.state.lpa) +
          `&sjc` +
          sjc,
        withCredentials: true, //关键
      }).then(function (res) {
        thi.yhgs = res.data;

        thi.$store.commit("setyhgs", res.data);
      });
      axios({
        //获取收藏的mv
        url:
          `/mv/sublist?cookie=` +
          encodeURIComponent(thi.$store.state.lpa) +
          `&sjc` +
          sjc,
        withCredentials: true, //关键
      }).then(function (res) {
        thi.yhmv = res.data;
        thi.$store.commit("setmv", thi.yhmv);
      });
      axios({
        //获取收藏的电台
        url:
          `/dj/sublist` +
          `?sjc` +
          sjc +
          `&cookie=` +
          encodeURIComponent(thi.$store.state.lpa),
        withCredentials: true, //关键
      }).then(function (res) {
  
        thi.yhdt = res.data;
        thi.$store.commit("setyhdt", thi.yhdt);
      });
    },
  },
  computed: {
    gdsc(){
      return this.$store.state.gdsca;
    },
    lpg() {
      return this.$store.state.lpa;
    },
    uid(){
      return this.$store.state.uid;
    },
    url(){
      return this.$route.href
    }
  },
  watch: {
    url(a){
       if (a.substr(0, 13) != "/mymusic/gdan"){
         this.cjclick=-1
       }
    },
    uid(a){
      console.log(a);
    },
    lpg(a, b) {
      if(this.$store.state.ncym==true) return
      if (a != 1) {
        this.isShow = false;
        this.shujqq();
      }
    },
    gdsc(){
        this.cjclick = 0;
    this.scclick = -1;
    this.gesclick = false;
    this.mvclick = false;
    this.dtclick=false
      setTimeout(()=>{
        this.shujqq();
      },500)
    }
  },
};
</script>

<style scoped>
.xc {
  position: relative;
  z-index: -10;
}
.jt {
  display: inline-block;
  border: 8px solid #ccc;
  position: absolute;
  border-color: transparent transparent transparent #ccc;
  border-style: dashed dashed dashed solid;
  margin-right: 0;
  left: 0;
}
.jt2 {
  display: inline-block;
  position: absolute;
  border-color: #ccc transparent transparent;
  border-style: solid dashed dashed;
  border-width: 8px 7px 0;
  left: 0;
  top: 5px;
}
.blna {
  width: 70%;
  margin-left: 10px;
}
.blname {
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
}
.activ {
  background-color: #e6e6e6;
}
.blname2 {
  color: #999;
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.xsname {
  width: 100%;
}
.bl {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
}
.imga {
  width: 40px;
  height: 40px;
}
img {
  width: 100%;
}
.left {
  width: 25%;
  padding: 30px;
  border-right: 1px solid #d3d3d3;
  box-sizing: border-box;
}
.rit {
  width: 75%;
  padding: 30px;
  box-sizing: border-box;
}
.mymuc {
  display: flex;
  width: 56%;
  margin: 0 auto;
  background-color: #ffff;
  border: 1px solid #d3d3d3;
}
.my {
  width: 56%;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 100px;
  border: 1px solid #d3d3d3;
  padding-bottom: 400px;
  border-bottom: 0;
}
.name {
  width: 807px;
  height: 168px;
  margin: 0 auto 0;
  position: relative;
  padding-top: 104px;
  background-position: 0 0px;
  background-image: url(~assets/img/我的音乐.png);
  background-repeat: no-repeat;
}
.name2 {
  display: block;
  width: 167px;
  height: 45px;
  cursor: pointer;
  margin: 98px 0 0 482px;
  background-position: 0 9999px;
  text-indent: -9999px;
}
.name2:hover {
  background-position: 0 -278px;
  background-image: url(~assets/img/我的音乐.png);
}
.zt {
  font-weight: 600;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 0.072917rem;

  position: relative;
  padding: 5px;
  padding-left: 15px;
}
</style>