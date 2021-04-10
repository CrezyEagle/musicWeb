<template>
  <div v-if="arr.length != 0" class="paihang">
    <div class="lef">
      <div class="tes">云音乐特色榜</div>
      <rang-lge v-for="(item,index) in arr1" :key="index" :obj="item" @click="fn(index)" :class="{activ:isShow==index}"></rang-lge>
      <div class="tes">全球媒体榜</div>
      <rang-lge v-for="(item,index) in arr2" :key="index" :obj="item" @click="fn2(index)" :class="{activ:isShow2==index}"></rang-lge>
    </div>
    <xq class="rigt" :gedanxq='gedanxq'></xq>
  </div>
</template>

<script>
import rankingList from "network/home/rankingList/rankingList.js";
import gedanxq3 from 'network/home/gedan/index3.js'
import {gedanfz} from 'network/home/gedan/goods.js'
import rangLge from './rangLge.vue';
import Xq from './xq.vue';
export default {
  components: { rangLge, Xq },
  data() {
    return {
      //获取到排行全部歌单
      arr: [],
      arr1:[],
      arr2:[],
      isShow:-1,
      isShow2:-1,
      gedanxq:{}
    };
  },
  watch:{
    arr(){
      this.arr1=this.arr.splice(0,4)
      this.arr2=this.arr.splice(4,30)
      
    }
  },
  created() {
    rankingList().then((res) => {
      //请求排行榜所有歌单
      this.arr = res.list;
      var nm=this.arr[0].updateFrequency
      //封装歌单详情需要的值
      gedanxq3(this.arr[0].id).then(res=>{
        this.gedanxq=new gedanfz(
          res.playlist.name,
          res.playlist.coverImgUrl,
          res.playlist.commentCount,
          res.playlist.shareCount,
          res.playlist.updateTime,
          nm,
          res.playlist.tracks,
          res.playlist.playCount
          )
      })
    });
  },
  methods:{
    fn(index){
      this.isShow=index
      this.isShow2=-1
    },
    fn2(index){
      this.isShow2=index
      this.isShow=-1
    }
  }
};
</script>

<style scoped>
.paihang {
  width: 55%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
}
.lef {
  border: 1px solid #d5d5d5;
  border-top: 0;
  border-bottom: 0;
  width: 25%;
  background-color: #f9f9f9;
  
}
.tes {
  margin-bottom: 20px;
  font-size: 17px;
  margin-left: 10px;
  margin-top: 30px;
}
.activ{
  background-color: #E6E6E6;
}
.rigt{
  flex: 1;
}
</style>