<template>
  <!-- 评论用户封装 -->
  <div class="yhu" v-if="Object.keys(yh).length != 0">
    <!-- 头像 -->
    <img :src="yh.img" alt="" />
    <div class="rt">
      <!-- 用户名加评论 -->
      <div class="pp">
        <span class="yhm">{{ yh.name }}：</span
        ><span class="pl">{{ yh.content }}</span>
      </div>
      <!-- 判断是否是回复评论 -->
      <div class="hf" v-if="yh.hf.length != 0">
        <span class="xj">◆</span>
        <span class="xj2">◆</span>
        <span class="yhm">{{ yh.hf[0].user.nickname }}：</span>
        <span class="pl2">{{ yh.hf[0].content }}</span>
      </div>
      <!-- 评论时间 -->
      <div class="sj">{{ sj }}</div>
      <!-- 点赞回复 -->
      <div class="dianz">
        <div class="dz"></div>
        <span v-if="yh.likedCount != 0">{{ dzsl }}</span
        >|
        <div class="huif">回复</div>
      </div>
    </div>
  </div>
</template>

<script>
import { obja } from "network/home/gedan/pinlun.js";
export default {
  data() {
    return {
      yh: {},
    };
  },
  props: {
    obj: {
      typeof: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    //时间格式化
    sj() {
      var c = this.yh.time;
      var date = new Date(c);
      var date2 = new Date();
      var yue = date.getMonth() + 1;
      var ri = date.getDate()<10?"0"+date.getDate():date.getDate()
      //获取当前的时间
      var yue2 = date2.getMonth() + 1;
      var ri2 = date2.getDate();
      //判断是否大于10
      var h=date.getHours()<10?"0"+ date.getHours(): date.getHours()
      var f=date.getMinutes()<10?"0"+ date.getMinutes(): date.getMinutes()
      return yue2 == yue && ri == ri2
        ? h + ":" + f
        : yue +
            "月" +
            ri +
            "日" +
            " " +
            h +
            ":" +f
            ;
    },
    //点赞数量
    dzsl() {
      return "(" + this.yh.likedCount + ")";
    },
  },
  watch: {
    obj() {
      this.gb();
    },
  },
  mounted() {
    this.gb();
  },
  methods: {
    //提取需要的信息
    gb() {
      this.yh = new obja(
        this.obj.user.avatarUrl,
        this.obj.user.nickname,
        this.obj.content,
        this.obj.time,
        this.obj.likedCount,
        this.obj.user.vipRights,
        this.obj.beReplied
      );
    },
  },
};
</script>

<style scoped>
.yhu {
  position: relative;
  width: 100%;
  display: flex;
  padding: 20px 0px;
  border-bottom: 1px dotted #ccc;
}
.yhu img {
  width: 8%;
  margin-bottom: auto;
}
.rt {
  margin-left: 10px;
  width: 90%;
}
.pp {
  width: 100%;
  display: flex;
}
.yhm {
  font-size: 0.063058rem;
  color: #0c73c2;
  overflow: hidden;
  text-overflow: ellipsis;

  white-space: nowrap;
  /* width: 30%; */
}
.pl {
  display: inline-block;

  color: #333;
  margin-bottom: 20px;
  font-size: 0.063058rem;
  /* overflow: hidden;
    text-overflow: ellipsis;
  
    white-space: nowrap; */
  width: 75%;
}
.pl2 {
    width: 2.101944rem;
  color: rgb(104, 104, 104);
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}
.hf {
  position: relative;
  display: flex;
  width: 95%;
  background-color: #f4f4f4;
  height: 40px;
  margin-bottom: 25px;
  line-height: 40px;
  border: 1px solid #dedede;
  padding-left: 20px;
  z-index: 10;
}
.sj {
  position: absolute;
  bottom: 15px;
  color: #999;
}
.xj {
  position: absolute;
  color: #f4f4f4;
  z-index: 2;
  left: 25px;
  top: -20px;
}
.xj2 {
  position: absolute;
  color: #000;
  z-index: 0;
  left: 25px;
  top: -21px;
}
.dianz {
  display: flex;
  position: absolute;
  right: 25px;
  bottom: 15px;
  align-items: center;
}
.dianz > span {
  margin-right: 10px;
  font-size: 0.073568rem;
}
.dz {
  width: 15px;
  margin-right: 10px;
  height: 14px;
  cursor: pointer;
  background-position: -150px 0;
  background-image: url(~assets/img/精灵图7.png);
}
.huif {
  margin-left: 10px;
  cursor: pointer;
}
</style>