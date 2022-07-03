<template>
  <div class="tabbar">
    <div class="taberji">
      <a href="JavaScript:;"></a>
      <div class="tob">
        <tabe-ji
          v-for="(item, index) in arr"
          :key="index"
          ref="aa"
          :item="item.name"
          @click="fn(index, item.routera)"
          :isShow="isShow"
          :index="index"
        ></tabe-ji>
      </div>
      <div class="hot"></div>
      <div class="dl">
        <div class="bd">
          <span @click="ss()"></span>
          <input
            class="inpta"
            type="search"
            name=""
            id=""
            placeholder="音乐"
            @focus="jd()"
            @blur="sqjd()"
            v-model.trim="inpta"
          />
        </div>
        <div class="bd2" @click="aaa()">创作者中心</div>
        <a v-if="$store.state.lpa == 1" href="JavaScript:;" @click="aaa2()"
          >登录</a
        >
        <a v-else href="JavaScript:;"  class="aa"
          ><img :src="yhtx+'?param=30y30'" alt=""
        /><div class="tc" @click="tuicaa()">退出</div>
        </a>
        
      </div>
    </div>
  </div>
</template>

<script>
import tabeJi from "./tabeJi.vue";
export default {
  components: { tabeJi },
  data() {
    return {
      arr: [
        {
          name: "发现音乐",
          routera: "/home",
        },
        {
          name: "我的音乐",
          routera: "/mymusic",
        },
        {
          name: "朋友",
          routera: "/friend",
        },
        {
          name: "商城",
          routera: "/super",
        },
        {
          name: "音乐人",
          routera: "/musician",
        },
      ],
      isShow: 0,
      inpta: "",
      js: 1,
      tuic:false
    };
  },
  watch: {
    hrefa(a) {
      this.js = 1;
      this.route;
      if (this.js != 2) {
        this.isShow = -1;
      }
    },
  },
  methods: {
    tuicaa(){
  
      this.$store.commit("setlpa", 1);
      this.$store.commit("setuid", "");
      this.$store.commit("setyhzh", 1);
    },

    aaa() {
      this.$store.commit("setsccgaa2");
    },
    aaa2(){
      this.$store.commit('setdl',true)
    },
    ss() {
      if (this.inpta == "") return;
      console.log("跳转页面");
      this.$router.push({
        path: "/search",
        query: {
          s: this.inpta,
        },
      });
    },
    fn(index) {
      this.isShow = index;
      this.$router.push(this.arr[index].routera);
    },
    sqjd() {
      document.onkeyup = null;
    },
    jd() {
      document.onkeyup = (e) => {
        if (e.keyCode == 13) {
          this.ss();
        }
      };
    },
  },
  computed: {
    //获取到用户头像
    yhtx() {
      if (this.$store.state.yhzh != 1) {
        if(this.$store.state.yhzh.profile==null) return
        return this.$store.state.yhzh.profile.avatarUrl;
      }
      return ''
    },
    hrefa() {
      return this.$route.href;
    },
    route() {
      this.arr.forEach((element, index) => {
        if (
          element.routera.substring(0, 5) == this.$route.href.substring(0, 5)
        ) {
          this.js = 2;

          this.isShow = index;
        }
      });
    },
  },
};
</script>

<style scoped>
.tc{
margin-left: 10px;
}
.hot {
  background-image: url("~assets/img/tabBar/topbar.png");
  background-repeat: no-repeat;
  margin-top: 15px;
  background-position: -190px 0;
  width: 28px;
  height: 19px;
}
input {
  color: #000 !important;
}

.tabbar {
  background-color: #242424;
  top: 0;
  font-size: 0.067262rem;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  justify-content: center;
  height: 70px;
  color: #cccccc;
  width: 100%;
  margin-top: 0px;
}
.taberji {
  /* width: 55%; */
  display: flex;
  justify-content: center;
  height: 70px;
  margin: 0px auto;
}
.bd {
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 30%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 32px;
  border-radius: 20px;
  background-color: #fff;
}
.bd span {
  background-image: url("~assets/img/tabBar/topbar.png");
  width: 25px;
  height: 30px;
  background-position: 0 -99px;
  cursor: pointer;
}
.bd input {
  outline: none;
  width: 100px;
  border: 0px;
  height: 30px;
  flex: 1;
}
.bd2 {
  flex: 2;
  height: 30px;
  border-radius: 20px;
  margin-left: 10px;
  border: #4f4f4f solid 1px;
  width: 110px;
  text-align: center;
  line-height: 30px;
  text-overflow: ellipsis;
  cursor: pointer;
  font-size: 0.052083rem;
  white-space: nowrap;
  overflow: hidden;
}
.bd2:hover {
  border: 1px solid #fff;
}
.taberji > a {
  margin: 0px;
  padding: 0px;
  background-image: url("~assets/img/tabBar/topbar.png");
  background-position: 0 0;
  height: 100%;
  width: 180px;
  margin-right: 5px;

}
.dl {
  display: flex;

  justify-content: center;
  margin-left: 50px;
  align-items: center;
  width: 30%;
  height: 100%;
}
.dl a {
  color: #787878;
  flex: 1;
  text-decoration: none;
  margin-left: 10%;
}
.dl .aa {
  width: 30px;
  height: 30px;
 display: flex;
 align-items: center;
}
.dl a img {
 width: 30px;
 height: 30px;
cursor: default;
  border-radius: 50%;
}
.tob {
  height: 100%;
  display: flex;
  flex: 1;
}
</style>