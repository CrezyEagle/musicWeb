<template>
  <!-- 歌单详情右侧 -->
  <div class="rir">
    <div class="bh">喜欢这个歌单的人</div>
    <div class="imga">
      <img
        :src="item.avatarUrl"
        alt=""
        v-for="(item, index) in arr"
        :key="index"
      />
    </div>
    <div class="bh">相关推荐</div>
    <xig :arr="arr2"></xig>
  </div>
</template>

<script>
import tuijian from "network/home/gedan/tuijian.js";
import xig from './xig.vue';
export default {
  components: { xig },
  data() {
    return {
      arr2:[]
    }
  },
  props: {
    arr: {
      type: Array,
      default() {
        return [];
      },
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  watch:{
    id(a,b){
      tuijian(a).then((res) => {
      this.arr2=res.playlists
    });
    }
  },
  mounted() {
    tuijian(this.id).then((res) => {
      this.arr2=res.playlists
    });
  },
};
</script>

<style scoped>
.imga {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 30px;
}
img {
  display: inline-block;
  width: 21%;
  margin-top: 10px;
}
.rir {
  width: 100%;
}
.bh {
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #d5d5d5;
  font-size: 0.072917rem;
  font-weight: 600;
}
</style>