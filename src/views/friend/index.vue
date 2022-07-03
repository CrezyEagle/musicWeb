<template>
  <!-- 朋友 -->
  <div class="my" v-if="$store.state.lpa==1">
    <div class="name">
      <div class="name2" @click="fn()">立即登录</div>
    </div>
  </div>
  <div v-else class="my2">
    <!-- 用户信息 -->
    <div class="yh" v-if="Object.keys(yhxql).length != 0">
      <div class="imga">
        <img :src="yhxql.profile.avatarUrl" alt="" />
      </div>
      <div class="routname">
        <div class="yhname">
          {{yhxql.profile.nickname}}<span class="lv"
            >{{ yhxql.level }}<span class="lvspan"></span></span
          ><span class="xb" v-if="yhxql.profile.gender == 1"></span
          ><span class="xb ac" v-else-if="yhxql.profile.gender == 2"></span>
        </div>
        <div class="xixi">
          <div v-if="Object.keys(yhdt).length != 0">{{yhdt.events.length}}</div>
          <div class="xixidiv">动态</div>
        </div>
        <div class="xixi">
          <div>{{ yhxql.profile.newFollows }}</div>
          <div class="xixidiv">关注</div>
        </div>
        <div class="xixi">
          <div>{{yhxql.profile.followeds}}</div>
          <div class="xixidiv">粉丝</div>
        </div>
        <div class="dq">{{yhxql.profile.signature}}</div>
      </div>
    </div>
    <!-- 用户动态 -->
    <div class="yhdt">
      <div class="mydt" v-if="Object.keys(yhdt).length != 0">我的动态（{{yhdt.events.length}}）</div>
      <div class="left" v-if="Object.keys(yhdt).length != 0">
        <frixq v-for="(itema, index) in yhdt.events" :item='itema' :key="index" @sjqqa='sja' class="dtd"></frixq>
      </div>
      <div class="rfit">
        <div class="wdgz">我的关注</div>
        <div class="grot" v-if="Object.keys(yhgz).length != 0">
        <div v-for="(item,index) in yhgz.follow" :key="index" class="gzd" >
          <div><img :src="item.avatarUrl" alt=""></div>
          <div>{{item.nickname}}</div>
        </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import { yhxq, yhdt,yhgz } from "network/dl/yzm.js";
import frixq from './frixq.vue';
export default {
  components: { frixq },
  data() {
    return {
      isShow: true,
      uid: "", //用户的id
      yhxql: {},
      yhdt: {}, //用户的动态
      yhgz:{}
    };
  },
  methods: {
   
  //当用户删除动态时重新请求
    sja(){
      this.sjqq()
    },
    fn() {
      this.$store.commit("setdl", true);
    },

    //数据请求
    sjqq() {
      if (this.$store.state.uid != "") {
        //用户的详情
        yhxq(this.$store.state.uid).then((res) => {
          this.yhxql = res;
          // console.log(res);
        });
        //用户的动态
        yhdt(this.$store.state.uid).then((res) => {
          this.yhdt = res;
          // console.log(res);
        });
        yhgz(this.$store.state.uid).then(res=>{
          this.yhgz=res
          // console.log(res);
        })
      }
    },
  },
  created() {
    if (this.$store.state.lpa != 1) {
      this.isShow = false;
      this.sjqq();
    }
  },
  computed: {
    //当令牌改变时
    lpg() {
      return this.$store.state.lpa;
    },
    //当用户id改变时
    idg() {
      return this.$store.state.uid;
    },
  },
  watch: {
    lpg(a, b) {
     
      if (a != 1&&this.$store.state.ncym!=true) {
        this.isShow = false;
      }
    },
    idg(a, b) {
      this.sjqq();
    },
  },
  activated(){
    this.sjqq()
  }
};
</script>

<style scoped>
.grot{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.gzd{

  width: 64px;
  margin: 5px 0px;
}
.gzd div{
  width: 100%;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.gzd img{
  width: 100%;
}
.dtd {
  width: 100%;
  position: relative;
  display: flex;
  padding-bottom: 20px;
  margin-top: 30px;
    border-bottom: 1px solid #dbdbdb;
}

.ac {
  background-position: -41px -27px !important;
}
.xb {
  width: 20px;
  display: inline-block;
  height: 20px;
  background-position: -41px -57px;
  margin-left: 5px;
  background-image: url(~assets/img/精灵图4.png);
}
.lvspan {
  width: 9px;

  height: 19px;

  overflow: hidden;
  float: right;
  vertical-align: middle;
  background-position: -191px -190px;
  background-image: url(~assets/img/精灵图7.png);
}
.lv {
  display: flex;
  align-items: center;

  height: 19px;
  overflow: hidden;
  padding-left: 29px;
  line-height: 21px;
  color: #e03a24;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  margin: 0 10px;
  display: inline-block;
  background-position: -135px -190px;
  background-image: url(~assets/img/精灵图7.png);
}
.wdgz {
  padding-bottom: 10px;
  font-weight: 600;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 10px;
}
.rfit {
  width: 25%;
  padding-left: 20px;
  box-sizing: border-box;
  padding-top: 20px;
}
.left {
  padding-top: 30px;
  width: 75%;
  padding-right: 20px;
  box-sizing: border-box;
  border-right: 1px solid #dbdbdb;
}
.mydt {
  width: 100%;
  padding-bottom: 10px;
  font-size: 0.098958rem;
  color: #666;
  border-bottom: 2px solid #c20c0c;
}
.yhdt {
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.dq {
  color: #666;
  margin-top: 20px;
   font-style:oblique
}
.xixi {
  display: inline-block;
  padding-right: 40px;
  margin-top: 20px;
  font-size: 0.083333rem;
  border-right: 1px solid #dbdbdb;
}
.xixidiv {
  font-size: 0.072917rem;
  color: #999;
  margin-top: 5px;
}
.xixi:nth-child(4) {
  border: 0;
  padding-left: 20px;
}
.xixi:nth-child(3) {
  padding-left: 20px;
}
.routname {
  flex: 1;
  box-sizing: border-box;
  padding-left: 25px;
  overflow: hidden;
}
.yhname {
  padding-bottom: 20px;
  font-size: 0.104167rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;

  box-sizing: border-box;
}
.yh {
  display: flex;
}
.imga {
  width: 190px;
  height: 190px;
  padding: 3px;
  border: 1px solid #dbdbdb;
}
img {
  width: 100%;
  height: 100%;
}
.my {
  width: 56%;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 100px;
  border: 1px solid #d3d3d3;
  padding-bottom: 300px;
  border-bottom: 0;
}
.my2 {
  width: 56%;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-bottom: 0;
  padding: 30px;
}
.name {
  width: 80%;
  height: 258px;
  padding-left: 50px;
  margin: 0 auto 0;
  position: relative;
  padding-top: 104px;
  background-position: 0px -60px;
  background-image: url(~assets/img/朋友.jpg);
  background-repeat: no-repeat;
}
.name2 {
  cursor: pointer;
  display: block;
  width: 167px;
  height: 45px;
  margin: 96px 0 0 485px;
  background-position: 0 9999px;
  text-indent: -9999px;
}
.name2:hover {
  background-position: 0 -430px;
  background-image: url(~assets/img/朋友.jpg);
}
</style>