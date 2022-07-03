<template>
  <!-- 榜单歌曲详情 -->
  <div
    class="tab"
    v-if="Object.keys(obj).lengdiv != 0"
   
  >
    <!-- 头部 -->
    <div class="nm">
      <div>排行</div>
      <div>标题</div>
      <div>收藏</div>
      <div>歌手</div>
    </div>
    <div v-for="(item, index) in obj.songs" :key="index" class="geq"  @mouseover="ff(index)"
    @mouseout="ff2()">
      <!-- 排行 -->
      <div class="ph">{{ index + 1 }}</div>
      <!-- 歌名 -->
      <div class="gm" :class="{ssaa:ac&&index<3}">
        <img v-if="index < 3&&ac" :src="item.al.picUrl" alt="" />
        <span class="sp" @click="aoudi(item.id,index,item.name,item.al.picUrl,item.name)">&nbsp;</span>
        <span class="sp1">{{ item.name }}</span>
        <span class="sp2" v-if="item.alia.length != 0"> {{ fa(index) }} </span>
      </div>
      <!-- 收藏 -->
      <div class="sc">
    
        <div  v-show="isShow == index" @click="scsong(item)"></div>
        <div  v-show="isShow == index" @click="fxg(item.id, item.al.name)">></div>
        <div  v-show="isShow == index" @click="xza()"></div>
      </div>
      <div class="zz">{{ m1(index) }}{{ m2(index) }}</div>
    </div>
  </div>
</template>

<script>
import { xih } from "network/home/song/index.js";
import axios from "axios";
export default {
  data() {
    return {
      isShow: -1,
    };
  },
  computed: {
    fa() {
      return function (index) {
        if (typeof this.obj.songs[index].alia[0] != "undefined") {
          return " " + "-(" + this.obj.songs[index].alia[0] + ")";
        }
      };
    },
  },
  methods: {
      //歌曲喜欢
    scsong(item) {
      if (this.$store.state.lpa != 1 && this.$store.state.ncym != true) {
        //删除歌曲喜欢
        if (this.inde == "0") {
          xih(item.id, false, this.$store.state.lpa).then((res) => {
            this.$emit("cxsx")

          });
        } else {
          //歌曲喜欢
          xih(item.id, true, this.$store.state.lpa).then((res) => {
        
            this.$store.commit('setsccgaa')
          });
        }
      } else {
        this.$store.commit('setdl',true)
      }

      let thi = this;
      axios({
        url:
          "/playlist/tracks?op=del&pid=" +
          thi.obj.id +
          "&tracks=" +
          item.al.id +
          "&cookie=" +
          encodeURIComponent(thi.$store.state.lpa),
        method: "GET",
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
      fxg(id, name) {
      if (this.$store.state.lpa != 1 && this.$store.state.ncym != true) {
        this.$store.commit("setfxlx", 5);
        this.$store.commit("setfxid", id);
        this.$store.commit("setfxname", name);
      } else {
        this.$store.commit("setdl", true);
      }
    },
      //下载
    xza() {
      this.$store.commit("setxzk", true);
    },
    ff(index) {
      this.isShow=index
 
    },
    ff2() {
      this.isShow=-1
    },
    //歌手名
    m1(index) {
      return this.obj.songs[index].ar[0].name;
    },
    m2(index) {
      if (this.obj.songs[index].ar.length>= 2) {
        return "/" + this.obj.songs[index].ar[1].name;
      }
      return "";
    },
    fn(index) {
      return;
    },
    //获取歌曲url
    aoudi(id,index,gqname,img,zjname){
      
     this.$store.dispatch('seturl',id)

     let name= this.m1(index)+this.m2(index)
      this.$store.commit('setname',name)
      this.$store.commit('setgqname',gqname)
      this.$store.commit('setimga',img)
      this.$store.commit('setindex',index)
      this.$store.commit('setarr',this.obj.songs)
      this.$store.commit('setzj',zjname)
     this.$store.commit('setjzdk',false)
    },
    aoudi2(){
        this.$store.dispatch('seturl',this.obj.songs[0].id)
     let name= this.m1(0)+this.m2(0)
      this.$store.commit('setname',name)
      this.$store.commit('setgqname',this.obj.songs[0].name)
      this.$store.commit('setimga',this.obj.songs[0].al.picUrl)
      this.$store.commit('setindex',0)
      this.$store.commit('setarr',this.obj.songs)
      this.$store.commit('setzj',this.obj.songs[0].al.name)
      this.$store.commit('setjzdk',false)
    }
  },
  props: {
    obj: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default: -1,
    },
     ac: {
      type: Boolean,
      default: true,
    },
    bf: {
      type: Number,
      default: 0,
    },
  },
  watch:{
    bf(){
      this.aoudi2()
    }
  },
    created() {
    axios.defaults.baseURL = "http://localhost:3000";
  },
};
</script>

<style scoped>
.zz {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  flex: 1;
}
.sc {
  flex: 1.5;
  cursor: pointer;
}

.sc div:nth-child(1) {
  float: left;

  width: 18px;
  height: 13px;
  margin-left: 5%;
  overflow: hidden;
  text-indent: -999px;
  cursor: pointer;
  background-position: -20px -174px;
  background-image: url(~assets/img/精灵图6.png);
}

.sc div:nth-child(2) {
  float: left;

  width: 18px;
  height: 13px;
  margin-left: 5%;
  overflow: hidden;
  text-indent: -999px;
  cursor: pointer;
  background-position: -20px -195px;
  background-image: url(~assets/img/精灵图6.png);
}
.sc div:nth-child(3) {
  float: left;

  width: 16px;
  height: 13px;
  margin-left: 5%;
  overflow: hidden;
  text-indent: -999px;
  cursor: pointer;
  background-position: -104px -174px;
  background-image: url(~assets/img/精灵图6.png);
}

.tab {
  padding: 0;
  border-spacing: 0px;
  width: 100%;

  border: 1px solid #d9d9d9;
}
.nm {
  display: flex;

  box-shadow: 0px 4px 20px -5px rgba(161, 161, 161, 0.712);
  height: 34px;
  padding: 0;
}
.geq > div:nth-child(1) {
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nm div:nth-child(1) {
  width: 8%;
  display: flex;
  align-items: center;
  padding-left: 0.052549rem;
}
.nm div:nth-child(2) {
  display: flex;
  align-items: center;
  padding-left: 0.052549rem;
  flex: 3;
}
.nm div:nth-child(4) {
  display: flex;
  align-items: center;
  padding-left: 0.052549rem;
  flex: 1;
}
.nm div:nth-child(3) {
  display: flex;
  align-items: center;
  padding-left: 0.052549rem;
  flex: 1.4;
}
.nm div {
  text-align: center;
  border-bottom: 1px solid #d9d9d9;
  padding: 0;
  margin: 0;
  background-color: #f8f8f8;
  border-left: 1px solid #d9d9d9;
}
.geq {
  color: rgb(97, 97, 97);
  font-size: 0.066211rem;
  padding: 7px 0px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
.geq:nth-child(even) {
  background-color: #f7f7f7;
}
.geq:nth-child(odd) {
  background-color: #ffffff;
}
.ssaa{
  font-size: 0.089333rem  !important;
  display: flex  !important;
  align-items: center  !important;
  height: 50px  !important;
  padding: 10px  !important;
}
.gm {
  flex: 3;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  height: 18px;
  cursor: pointer;
  padding: 6px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.gm .sp {
  
  width: 17px;
  height: 17px;
  cursor: pointer;
  cursor: pointer;
  display: inline-block;

  margin: 0px 10px;
  background-position: 0 -103px;
  margin-right: 23px;
  background-image: url(~assets/img/精灵图6.png);
}
.sp:hover{
  background-position: 0 -128px;
   width: 17px;
  height: 17px;
  
}
.sp1{
  flex: 1;

    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
}
.sp2 {
  color: rgb(155, 155, 155);
  overflow: hidden;
 flex: 1;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 5px;
}
.gm img {
  width: 15%;
  height: 100%;
}
</style>