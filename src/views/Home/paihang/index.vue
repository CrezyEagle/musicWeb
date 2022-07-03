<template>
  <!-- 排行首页 -->
  <div v-if="arr.length != 0" class="paihang" ref="tob">
    <!-- 回到顶部 -->
    <div class="hddb" v-show="dbaa" @click="fnc()"></div>
    <!-- 首页左侧全部榜单 -->
    <div class="lef">
      <div class="tes">云音乐特色榜</div>
      <rang-lge
        v-for="(item, index) in arr1"
        :key="index"
        :obj="item"
        @click="fn(index)"
        :class="{ activ: isShow == index }"
      ></rang-lge>
      <div class="tes">全球媒体榜</div>
      <rang-lge
        v-for="(item, index) in arr2"
        :key="index"
        :obj="item"
        @click="fn2(index)"
        :class="{ activ: isShow2 == index }"
      ></rang-lge>
    </div>
    <!-- 首页右侧榜单详情 -->
    <xq class="rigt" :gedanxq="gedanxq"></xq>
  </div>
</template>

<script>
import rankingList from "network/home/rankingList/rankingList.js";
import gedanxq3 from "network/home/gedan/index3.js";
import yhgedanxq from "network/home/gedan/index4.js";
import { gedanfz } from "network/home/gedan/goods.js";
import rangLge from "./rangLge.vue";

import Xq from "./xq.vue";
export default {
  components: { rangLge, Xq },
  data() {
    return {
      //获取到排行全部歌单
      arr: [],
      arr1: [],
      arr2: [],
      isShow: 0,
      isShow2: -1,
      gedanxq: {},
      fd: null,
    };
  },
  watch: {
    arr() {
      this.arr1 = this.arr.slice(0, 4);
      this.arr2 = this.arr.slice(4, 30);
    },
    lpg(){
       this.isShow = this.$store.state.paih;
      this.isShow2=-1
      rankingList().then((res) => {
        //请求排行榜所有歌单
        this.arr = res.list;
        var nm = this.arr[this.isShow].updateFrequency;
        //封装歌单详情需要的值
        
             if(this.$store.state.lpa!=1&&this.$store.state.ncym!=true){
               this.dlqq(this.arr[this.isShow].id,nm)
               return
             }
        gedanxq3(this.arr[this.isShow].id).then((res) => {

          this.gedanxq = new gedanfz(
            res.playlist.name,
            res.playlist.coverImgUrl,
            res.playlist.commentCount,
            res.playlist.shareCount,
            res.playlist.updateTime,
            nm,
            res.playlist.tracks,
            res.playlist.playCount,
            res.playlist.id,
            res.playlist.subscribedCount
          );
        });
      });
    },
    rout() {
      this.isShow = this.$store.state.paih;
      this.isShow2=-1
      rankingList().then((res) => {
        //请求排行榜所有歌单
        this.arr = res.list;
        var nm = this.arr[this.isShow].updateFrequency;
        //封装歌单详情需要的值
             if(this.$store.state.lpa!=1&&this.$store.state.ncym!=true){
               this.dlqq(this.arr[this.isShow].id,nm)
               return
             }
        gedanxq3(this.arr[this.isShow].id).then((res) => {

          this.gedanxq = new gedanfz(
            res.playlist.name,
            res.playlist.coverImgUrl,
            res.playlist.commentCount,
            res.playlist.shareCount,
            res.playlist.updateTime,
            nm,
            res.playlist.tracks,
            res.playlist.playCount,
            res.playlist.id,
            res.playlist.subscribedCount
          );
        });
      });
    },
  },


  activated() {
    window.scroll(0, 0);
  },
  created() {
    this.isShow = this.$store.state.paih;
    rankingList().then((res) => {
      //请求排行榜所有歌单
      this.arr = res.list;
      var nm = this.arr[this.isShow].updateFrequency;
      //封装歌单详情需要的值
        if(this.$store.state.lpa!=1&&this.$store.state.ncym!=true){
               this.dlqq(this.arr[this.isShow].id,nm)
               return
             }
      gedanxq3(this.arr[this.isShow].id).then((res) => {
        this.gedanxq = new gedanfz(
          res.playlist.name,
          res.playlist.coverImgUrl,
          res.playlist.commentCount,
          res.playlist.shareCount,
          res.playlist.updateTime,
          nm,
          res.playlist.tracks,
          res.playlist.playCount,
          res.playlist.id,
          res.playlist.subscribedCount,
         
        );
      });
    });
  },
  computed: {
    dba() {
      return this.db > 700;
    },
    rout() {
      return this.$store.state.paih;
    },
    lpg(){
      return this.$store.state.lpa
    }
  },
  methods: {
    dlqq(id,nm){
      let thi=this
 
        yhgedanxq(id,this.$store.state.lpa).then(res=>{
          // console.log(res);
           thi.gedanxq = new gedanfz(
            res.playlist.name,
            res.playlist.coverImgUrl,
            res.playlist.commentCount,
            res.playlist.shareCount,
            res.playlist.updateTime,
            nm,
            res.playlist.tracks,
            res.playlist.playCount,
            res.playlist.id,
            res.playlist.subscribedCount,
             res.playlist.subscribed
          );
        })
      
    },
    fn(index) {
      this.isShow = index;
      this.isShow2 = -1;
      this.db(window, 0);
      var nm = this.arr1[index].updateFrequency;
        if(this.$store.state.lpa!=1&&this.$store.state.ncym!=true){
               this.dlqq(this.arr[this.isShow].id,nm)
               return
             }
      gedanxq3(this.arr1[index].id).then((res) => {
        // console.log(res);
        this.gedanxq = new gedanfz(
          res.playlist.name,
          res.playlist.coverImgUrl,
          res.playlist.commentCount,
          res.playlist.shareCount,
          res.playlist.updateTime,
          nm,
          res.playlist.tracks,
          res.playlist.playCount,
          res.playlist.id,
          res.playlist.subscribedCount
        );
      });
    },
    db(obj, distance) {
      animation(obj, distance);
      //动画缓动封装
      //obj要添加动效的元素，distancce移动距离的终点，chenge元素移动终点后的效果函数
      function animation(obj, distance, change) {
        //排他思想，为了避免多次调用定时器
        clearTimeout(obj.timer);
        //将定时器以对象赋值的方式添加给调用元素
        obj.timer = setInterval(function move() {
          //缓动特效公式
          var step = (distance - window.pageYOffset) / 10;
          //取整
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          //判断是否达到终点
          if (window.pageYOffset == distance) {
            //如果到达终点即结束定时器
            clearTimeout(obj.timer);
            //判断用户是否要添加终点效果
            if (change) {
              //达到终点后要执行的效果，效果在调用者参数里以回调函数执行
              change();
            }
          } else {
            // obj.style.left = obj.offsetLeft + step + 'px';
            window.scroll(0, window.pageYOffset + step);
          }
        }, 20);
      }
    },
    fn2(index) {
      this.isShow2 = index;
      this.isShow = -1;
      this.db(window, 0);
      var nm = this.arr2[index].updateFrequency;
      gedanxq3(this.arr2[index].id).then((res) => {
        this.gedanxq = new gedanfz(
          res.playlist.name,
          res.playlist.coverImgUrl,
          res.playlist.commentCount,
          res.playlist.shareCount,
          res.playlist.updateTime,
          nm,
          res.playlist.tracks,
          res.playlist.playCount,
          
          res.playlist.id,
           res.playlist.subscribedCount,
        );
      });
    },

    
  },
  props: {
    dbaa: {
      typeof: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

.paihang {
  width: 56%;
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
  font-size: 0.089333rem;
  margin-left: 10px;
  margin-top: 30px;
}
.activ {
  background-color: #e6e6e6;
}
.rigt {
  width: 75%;
}
</style>