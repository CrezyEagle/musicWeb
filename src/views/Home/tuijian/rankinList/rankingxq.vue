
<template>
  <div dropzone="" v-if="Object.keys(obj).length != 0">
    <!-- 首页榜单详情 -->
    <div class="zj">
      <img :src="obj.playlist.coverImgUrl" alt="" />
      <a href="JavaScript:;"></a>
      <div class="zuid">
        <h3  >{{ obj.playlist.name}}</h3>
        <div class="div1"></div>
        <div class="div2"></div>
      </div>
    </div>
    <rangequ
      class="ran"
      v-for="(item, index) in obj.playlist.tracks.slice(0, 10)"
      :key="index"
      :obj="item"
      :ov="ov"
      :index="index"
      @mouseout="fn2(index)"
      @mouseover="fn(index)"
    ></rangequ>
    <div class="qbaa"><div>全部查看></div></div>
  </div>
</template>

<script>
import gedanxq from "network/home/gedan/index3.js";
import rangequ from "./rangequ.vue";
export default {
  data() {
    return {
      obj: {},
      ov: -1,
    };
  },
  components: { rangequ },
  
  props: {
    //得到歌单的id
    ida: {
      type: Number,
      ddefault: 0,
    },
  },
  methods: {
    //鼠标移入移出触发事件
    fn(index) {
      this.ov = index;
    },
    fn2(index) {
      this.ov = -1;
    },
   
  },
  mounted() {
    //组件挂载后获取到歌单的详情
    gedanxq(this.ida)
      .then((res) => {
        this.obj = res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.zj {
  position: relative;
  display: flex;
  width: 80%;
  margin: 20px auto;
}
.zj img {
  width: 40%;
  cursor: pointer;
  height: 40%;
  margin-right: 10px;
}
/* a{
     background: url(~assets/img/精灵图3.png) no-repeat;
      background-position: -145px -57px;
      background-size: 100%;
      position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 40%;
} */
.ran:nth-child(even) {
  background-color: #e8e8e8;
}
.ran:nth-child(odd) {
  background-color: #f4f4f4;
}
.ran {
  color: #666;
  width: 100%;
}
.ran:nth-child(-n + 4) {
  color: #c10d0c;
}
.zuid {
  width: 60%;
}
h3:hover{
  text-decoration: underline;
  cursor: pointer;
}
.qbaa {
  height: 20px;

  padding: 8px;
  color: #000;
  background-color: #e8e8e8;
}
.qbaa div {
  float: right;
  margin-right: 20px;
}
.div1 {
  background: url(~assets/img/精灵图1.png) no-repeat 0 9999px;
  background-position: -267px -205px;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  float: left;
}
.div2 {
  background: url(~assets/img/精灵图1.png) no-repeat 0 9999px;
  background-position: -300px -205px;
  width: 22px;
  height: 22px;
  float: left;
}
</style>