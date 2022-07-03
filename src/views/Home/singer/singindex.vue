<template>
  <!-- 歌手主页   -->
  <div class="sing">
    <div class="top1">
      <div class="tuij">
        <div class="t">推荐</div>
        <div class="tuijian" @click="fn()">推荐歌手</div>
      </div>
      <topf v-for="(item, index) in arr" :key="index" :obj="item"></topf>
    </div>
    <div class="ri">
      <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    </div>
  </div>
</template>

<script>
import topf from "./tobfz/topf.vue";
export default {
  components: { topf },
  data() {
    return {
      arr: [
        { name: "华语", area: 7 },
        { name: "欧美", area: 96 },
        { name: "日本", area: 8 },
        { name: "韩国", area: 16 },
        { name: "其他", area: 0 },
      ],
    };
  },

  methods:{
    fn(){
      this.$router.push({
        path:'/home/geshou/tuij'
      })
    }
  }
};
</script>

<style scoped>
.ri{
  width: 81.5%;
}
.sing {
  width: 1057px;
  background-color: #ffff;
  margin: 0 auto;
  display: flex;
  border: 1px solid #d5d5d5;
}
.tuij {
  padding-bottom: 10px;
  border-bottom: 1px solid #d5d5d5;
  margin-bottom: 20px;
}
.top1 {
  width: 18.5%;
  box-sizing: border-box;
  padding: 60px 20px;
  background-color: #f9f9f9;
  border: 1px solid #d5d5d5;
}
.tuijian {
  padding: 6.5px 30px;
  background-image: url(~assets/img/点.png);
  background-position: 0 -30px;
  padding-right: 0;
  margin-right: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tuijian:hover {
  background-image: url(~assets/img/点.png);
  color: #c20c0c;
  background-position: 0 0;
  border-right: 1px solid #d5d5d5;
  text-decoration: underline;
  cursor: pointer;
}
.t {
  font-size: 0.078125rem;
  color: #333;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>