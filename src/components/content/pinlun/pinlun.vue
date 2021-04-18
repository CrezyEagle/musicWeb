<template>
<!-- 用户评论 -->
  <div v-if="Object.keys(pl).length != 0">
    <!-- 导入封装好的评论详情 -->
    <yonghu
      v-for="(item, index) in pl.comments"
      :key="index"
      :obj="item"
    ></yonghu>
  </div>
</template>

<script>
import { pinlun } from "network/home/gedan/pinlun.js";
import yonghu from "./yonghu.vue";
export default {
  components: { yonghu },
  data() {
    return {
      pl: {},
    };
  },
  props: {
    id: {
      typeof: Number,
      default: 0,
    },
  },
  watch: {
    //监听id有没有更新，前面点击了别的歌单id就会更新
    id() {
      //更新后重新请求评论
      pinlun(this.id).then((res) => {
        this.pl = res;
      });
    },
  },
  mounted() {
    pinlun(this.id).then((res) => {
      this.pl = res;
    });
  },
};
</script>

<style>
</style>