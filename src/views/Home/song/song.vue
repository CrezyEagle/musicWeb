<template>
  <!-- 歌曲歌词页面-->
  <div class="songq">
    <div class="left">
      <div class="xqaa">
        <!-- 歌曲图片 -->
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
          <!-- 播放组件 -->
          <bftb lx="5" :id="id" :fxname="gqname" @sca="sca" :pl="sum"></bftb>
          <div class="gca">
            <div
              class="sbl"
              v-if="texts2.length == 0 && texts3.length == 0"
              @click="fn()"
            >
              歌曲获取失败了(点击重新获取歌曲)
            </div>
            <div
              class="sbl"
              v-else-if="texts2.length == 0 && texts3.length != 0"
            >
              纯音乐，无歌词
            </div>
            <div class="sw" :style="{ top: -isShow * 17 + 'px' }" v-else>
              <p
                v-for="(item, index) in texts2"
                :key="index"
                :class="{ activ: index == isShow - 1 }"
              >
                {{ item.value }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 评论 -->
      <navbar name="评论" :suma="sum">
        <template v-slot:gduo>
          <div></div>
        </template>
      </navbar>
      <div class="zx">最新评论({{ sum }})</div>
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
    <div class="rita">
      <xiangsi></xiangsi>
      <baoh></baoh>
      <xzkh></xzkh>
    </div>
  </div>
</template>

<script>
import bftb from "components/content/bftb.vue";
import yonghu from "components/content/pinlun/yonghu.vue";
import Navbar from "components/content/navbar.vue";
import { gqpinlun } from "network/home/gedan/pinlun.js";
import geci from "network/gequ/geci.js";
import Xiangsi from "./xiangsi.vue";
import { xih } from "network/home/song/index.js";
import Baoh from "./baoh.vue";
import Xzkh from "components/common/xz/xzkh.vue";

export default {
  components: {
    bftb,
    yonghu,
    Navbar,
    Xiangsi,
    Baoh,
    Xzkh,
  },
  data() {
    return {
      imega: "", //  图片
      name: "", //作者名
      gqname: "", //歌曲名
      id: "", //歌曲id
      zj: "",
      pl: {}, //评论信息
      sum: 0,
      texts: "", //歌词
      texts2: [],
      texts3: ["1", "2"],
      isShow: 0,
    };
  },
  computed: {
    ba() {
      return this.$store.state.a.imega;
    },
    sj() {
      return this.$store.state.a.itema;
    },
    //监听有没有手动改变进度条
    jdt() {
      return this.$store.state.a.jd;
    },
    lpa() {
      return this.$store.state.lpa;
    },
  },

  methods: {
    sca(a) {
      // console.log(1);
      xih(this.id, true, this.$store.state.lpa).then((res) => {
        // console.log(res);
        this.$store.commit("setsccgaa");
      });
    },
    //手动改变进度条时
    pd(a) {
      a = Number(a);
      // console.log('进度条');
      if (this.texts2.length == 0) return;

      for (let i = 0; i < this.texts2.length; i++) {
        //  console.log('开始循环');
        // if (a >= this.texts2.length) return;
        // console.log('循环');
        if (
          a >= Number(this.texts2[i].sj) &&
          a < Number(this.texts2[i + 2].sj)
        ) {
          //  console.log(1);
          this.isShow = i;
          return;
        }
      }
    },
    //歌词格式化
    parsea(texts) {
      let lines = texts.split("\n");
      let zze = /\[\d{2}:\d{2}.(\d{3}|\d{2})\]/g; //正则匹配前面的时间
      let result = [];

      //判断歌词格式是否正确
      if (!/\[.+\]/.test(texts)) {
        console.log("歌词格式不正确");
        return [[0, texts]];
      }

      //   //去除格式不正确的一排
      // for (let a = 0; a < lines.length; a++) {
      //   if (!zze.test[lines[a]]) {
      //     lines = lines.slice(1);
      //   }
      // }

      for (let item of lines) {
        let time = item.match(zze);
        if (time == null) break;
        let value = item.replace(zze, "");

        for (let item1 of time) {
          let t = item1.slice(1, -1).split(":"); //取出时间转换为数组
          if (value != "") {
            let obj = {};
            obj.sj = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
            obj.value = value;
            result.push(obj);
          }
        }
      }
      //根据歌曲时间排序
      result.sort(function (a, b) {
        return a.sj - b.sj;
      });

      return result;
    },
    //重新获取歌词
    fn() {
      geci(this.id)
        .then((res) => {
          this.texts = res.lrc.lyric;
          this.texts2 = this.parsea(this.texts);
        })
        .catch((err) => {
          this.texts2 = [];
        });
    },
  },
  watch: {
    // lpa(a,b){
    //   if(a==1)return
    //     gequ(this.id,this.$store.state.lpa).then(res=>{
    //       console.log(res);
    //     })
    // },
    ba() {
      this.texts2 = [];
      this.texts3 = ["1", "2"];
      this.texts = "";
      this.imega = this.$store.state.a.imega;
      this.name = this.$store.state.a.name;
      this.id = this.$store.state.a.id;
      this.gqname = this.$store.state.a.gqname;
      this.zj = this.$store.state.a.zj;
      gqpinlun(this.id).then((res) => {
        this.pl = res;
        this.sum = this.pl.hotComments.length;
      });
      //请求歌词
      geci(this.id)
        .then((res) => {
          if (res.nolyric) return;
          this.texts = res.lrc.lyric;
          this.texts2 = this.parsea(this.texts);
          this.isShow = 0;
        })
        .catch((err) => {
          this.texts3 = [];
          console.log(err);
        });
    },
    //当音乐播放时
    sj(a, b) {
      //当计数的值等于总歌词数量时
      if (this.texts2.length == 0 || this.isShow == this.texts2.length) return;
      if (this.texts2[this.isShow].sj <= this.$store.state.a.itema) {
        this.isShow = this.isShow + 1;
      }
    },
    //判断有没有改变进度条
    jdt(a, b) {
      // console.log(a);
      this.pd(a);
    },
  },
  activated() {
    this.imega = this.$store.state.a.imega;
    this.name = this.$store.state.a.name;
    this.id = this.$store.state.a.id;
    this.gqname = this.$store.state.a.gqname;
    this.zj = this.$store.state.a.zj;
    gqpinlun(this.id).then((res) => {
      this.pl = res;
      this.sum = this.pl.hotComments.length;
    });
    //请求歌词
    geci(this.id)
      .then((res) => {
        if (res.nolyric) return;
        this.texts = res.lrc.lyric;
        this.texts2 = this.parsea(this.texts);
      })
      .catch((err) => {
        this.texts3 = [];
        console.log(err);
      });
  },
};
</script>

<style scoped>
.rita {
  width: 25%;
  height: 1000px;
  border: 1px solid #d5d5d5;
  font-weight: 600;
  padding: 20px;
  box-sizing: border-box;
}
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
  border-left: 1px solid #d5d5d5;
  background-color: #ffffff;
  display: flex;
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
  font-size: 0.072917rem;
}
.gs span,
.zj span {
  color: #0c73c2;
}
.zx {
  margin-top: 20px;
  padding-bottom: 10px;
  font-size: 0.073568rem;
  font-weight: 600;
  border-bottom: 1px solid #cfcfcf;
}

.sw {
  width: 100%;
  margin: 20px;
  position: absolute;
  font-size: 0.067708rem;
}
.activ {
  color: red;
  font-size: 0.09375rem;
}
.sbl {
  font-size: 0.130208rem;
  text-align: center;
  padding-top: 100px;
  color: #818181b9;
  cursor: pointer;
}
.gca {
  position: relative;
  height: 800px;
  overflow: hidden;
  margin-top: 40px;
}
</style>