<template>
  <!-- 电台分类详情 -->
  <div class="flxq">
    <!-- 优秀电台 -->
    <navbar name="优秀新电台">
      <template v-slot:gduo><div></div></template>
    </navbar>
    <div class="youxa">
      <youx v-for="(item, index) in youx" :key="index" :obj="item"></youx>
    </div>
    <navbar name="电台排行榜" class="dt">
      <template v-slot:gduo><div class="zr">最热电台</div></template>
    </navbar>
    <div class="dtxq" v-if="ph.length!=0">
      <div v-for="(item,index) in ph" :key="index" class="dtx" @click="fun(item.id)">
        <div class="imga"><img :src="item.picUrl" alt=""></div>
        <div class="nr">
          <div class="name">{{item.name}}</div>
          <div class="named" ><span class="name2"></span>{{item.dj.nickname}}<span></span></div>
          <div class="namexq">共{{item.programCount}} <span>订阅{{item.subCount}}次</span>期</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { leb, xqph } from "network/home/diantai/diantai.js";
import Navbar from "components/content/navbar.vue";
import Youx from './youx.vue'
export default {
  components: {
    Navbar,
    Youx,
  },
  data() {
    return {
      ph: [],
      youx: [],
    };
  },
  computed: {
    rout() {
      return this.$route.query.id;
    },
  },
  watch: {
    rout(a, b) {
      if(a==undefined) return
      window.scroll(0,0)
      leb(a).then((res) => {
        this.youx = res.djRadios.splice(0, 5);
     
      });
      xqph(a).then((res) => {
        this.ph = res.djRadios
  
      });
    },
  },
  created() {
    leb(this.rout).then((res) => {
      this.youx = res.djRadios.splice(0, 5);
    });
    xqph(this.rout).then((res) => {
      this.ph = res.djRadios
    });
  },
  methods:{
    fun(id){
      this.$router.push({
        path:"/home/diantaixq",
        query:{
          id:id
        }
      })
    }
  }
};
</script>

<style scoped>
.named{
  display: flex;
  align-items: center;
   margin-top: 20px;
  margin-bottom: 5px;
font-size: .072917rem;
   cursor: pointer;
     width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.named:hover{
   text-decoration: underline;
}
.name{
  font-size: .098958rem;
  font-weight: 600;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}
.name:hover{
  text-decoration: underline;
  cursor: pointer;
}
.nr{
  margin-left: 20px;
  width: 50%;
}
.name2{
  display: inline-block;
  margin-right: 5px;
 
      width: 14px;
    height: 15px;
  background-image: url(~assets/img/精灵图4.png);
      background-position: -50px -300px;
}
.namexq{
  color: #999;
  font-size: .052083rem;
  width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.dtxq{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.imga{
  width: 120px;
  height: 120px;
}
.dtx{
  margin: 20px 0px;
  width: 48%;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
        border-bottom: 1px solid #e7e7e7;
}
.dtx img{
  width: 100%;
  cursor: pointer;
}
.flxq {
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
}
.youxa {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.zr {
  color: rgb(184, 11, 11);
  font-size: 0.0625rem;
}
.dt {
  margin-top: 20px;
}
</style>