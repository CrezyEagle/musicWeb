<template>
  <div class="zj" v-if="Object.keys(obj).length != 0">
    <div class="left">
      <!-- 大图片 -->
      <tobimg
        sc="收藏"
        :name="obj.album.name"
        :pl="obj.album.info.commentCount"
        :fx="obj.album.info.shareCount"
        @bfa1="bfa"
        lx='4'
      >
        <!-- 大图片 -->
        <template v-slot:imga>
          <div class="tobimga">
            <img :src="obj.album.blurPicUrl" alt="" />
            <span></span>
          </div>
        </template>
        <template v-slot:xq>
          <div class="xqq"></div>
        </template>
        <template v-slot:zz>
          <div class="sj2">
            歌手：<span
              class="sp"
              v-for="item in obj.album.artists"
              :key="item"
              >{{ "/  " + item.name + "  " }}</span
            >
          </div>
          <div class="sj">发行时间：{{ sj }}</div>
          <div class="sj">发行公司：{{ obj.album.company }}</div>
        </template>
        <template v-slot:xq2>
          <div></div>
        </template>
      </tobimg>
      <!-- 专辑介绍 -->
      <div>
        <div class="zjjs">专辑介绍</div>
        <div v-for="(item, index) in txt" :key="index" class="js">
          {{ item }}
        </div>
      </div>
      <!-- 歌曲 -->
      <gequlieb :ge="obj.songs.length">
        <template v-slot:cs>
          <div></div>
        </template>
      </gequlieb>
      <tableaaa :obj="obj" :ac="ac" :bf="bf"></tableaaa>
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
    <div class="ric">
      <div class="zjt">其他热门专辑</div>
      <div
        v-for="(item, index) in tj"
        :key="index"
        class="tja"
        @click="fnn(item.id)"
      >
        <div class="taimg"><img :src="item.blurPicUrl" alt="" /></div>
        <div class="namea">
          <div class="namaaa">{{ item.name }}</div>
          <div class="sjaa">{{ sj2(item.publishTime) }}</div>
        </div>
      </div>
      <xzkh></xzkh>
    </div>
  </div>
</template>

<script>
import zjqq from "network/home/xindiexq/index.js";
import tuij from "network/home/xindiexq/tuij.js";
import { zjpl } from "network/home/gedan/pinlun.js";
import tobimg from "components/content/tobimg.vue";
import Conplate from "components/content/conplate.vue";
import Gequlieb from "components/content/gequlieb/gequlieb.vue";
import Tableaaa from "components/content/gequlieb/tableaaa.vue";
import Yonghu from "components/content/pinlun/yonghu.vue";
import Xzkh from 'components/common/xz/xzkh.vue';
export default {
  components: { tobimg, Conplate, Gequlieb, Tableaaa, Yonghu,Xzkh },
  data() {
    return {
      obj: {},
      txt: null,
      ac: false,
      zj: true,
      pl: {},
      sum: 0,
      tj: null,
      bf: 0,
    };
  },

  watch: {
    idgaa(a,b) {
      if(a.substr(0,14) != "/home/xindiexq") return
      this.qq();
    },
  },
  activated() {
   this.qq()
  },
  computed: {
      idgaa() {
     return this.$route.href;
    },
    //时间格式
    sj() {
      var date = new Date(this.obj.album.publishTime);
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    },
  },
  methods: {
    qq(){
       //页面请求所有数据
    zjqq(this.$route.query.id).then((res) => {
      this.obj = res;
      this.txt = this.js(res.album.description);
      // console.log(res);
    });
    zjpl(this.$route.query.id).then((res) => {
      this.pl = res;
      this.sum = res.comments.length;
    });
    tuij(this.$route.query.id).then((res) => {
      this.tj = res.albums.splice(0, 5);
      // console.log(this.tj);
    });
    },
    bfa() {
      this.bf++;
    },
    fnn(id) {
      this.$router.push({
        path: "/home/xindiexq",
        query: {
          id,
        },
      });
    },
    //介绍格式化
    js(txt) {
      var text = txt.split("\n");
      return text;
    },
    sj2(sj) {
      var date = new Date(sj);
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    },
  },
};
</script>

<style scoped>
.zjt {
  padding-bottom: 10px;
  border-bottom: 1px solid #d3d3d3;
  font-weight: 600;
}
.namea {
  width: 50%;
}
.sjaa {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  color: #666;
  margin: 10px 0px 0px 10px;
}
.namaaa {
  overflow: hidden;
  color: #000;
  font-size: 0.078125rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  margin-left: 10px;
}
.namaaa:hover {
  text-decoration: underline;
}
.tja {
  margin-top: 10px;
  display: flex;
  cursor: pointer;
  margin-bottom: 20px;
}
.taimg {
  width: 50px;
  height: 50px;
}
.taimg img {
  width: 100%;
}
.ric {
  padding-left: 30px;
  box-sizing: border-box;
  padding: 30px;
  border-left: 1px solid #d3d3d3;
  width: 25%;
}
.zjjs {
  color: #333;
  font-weight: 600;
  margin-top: 20px;
}
.js {
  color: #666;
  text-indent: 2em;
  line-height: 19px;
  font-size: 0.052083rem;
  margin-top: 6px;
}
.sj2 {
  margin-top: 20px;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.sp {
  color: #0c73c2;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.zj {
  width: 56%;
  margin: 0 auto;
  background-color: #fff;

  display: flex;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
}
.left {
  width: 75%;
  padding: 30px;
}
.tobimga {
  width: 177px;
  height: 177px;
  position: relative;
  margin-right: 30px;
}
.tobimga img {
  width: 100%;
  height: 100%;
}
.tobimga span {
  position: absolute;
  width: 209px;
  height: 177px;
  background-position: 0 -986px;
  background-image: url(~assets/img/精灵图3.png);
  left: 0;
  top: 0;
}
.xqq {
  width: 54px;
  height: 24px;
  background-position: 0 -186px;
  background-image: url(~assets/img/精灵图4.png);
}
.sj {
  margin-top: 5px;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.zx {
  margin-top: 20px;
  padding-bottom: 10px;
  font-size: 0.073568rem;
  font-weight: 600;
  border-bottom: 1px solid #cfcfcf;
}
.pai {
  width: 100%;
}
</style>