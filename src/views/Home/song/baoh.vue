<template>
  <div v-if="gq.length!=0">
    <div class="xs">相似歌曲</div>
    <div v-for="(item,index) in gq" :key="index">
      <div class="name">{{item.name}}</div>
      <div class="name2">{{item.artists[0].name}}</div>
    </div>
  </div>
</template>

<script>
import xiangsi from "network/gequ/baoh.js";
export default {
  data() {
    return {
      gq:[]
    }
  },
  computed:{
    idg(){
      return this.$store.state.a.id
    }
  },
  watch:{
    idg(){
    xiangsi(this.$store.state.a.id).then((res) => {
      this.gq = res.songs;
    });
    }
  },
 mounted() {
    xiangsi(this.$store.state.a.id).then((res) => {
      this.gq = res.songs;
    });
  },
}
</script>

<style scoped>
.xs{
    padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #d5d5d5;
  font-size: .072917rem;
}
.name{
  margin-top: 20px;
  cursor: pointer;
  color: #333;
  font-size: .0625rem;
  font-weight: 400;
      overflow: hidden;
      width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.name2{
  cursor: pointer;
  color: #999;
  font-size: .0625rem;
  font-weight: 400;
      overflow: hidden;
      width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>