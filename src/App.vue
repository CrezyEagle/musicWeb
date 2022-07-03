<template>
  <div v-cloak v-if="wind > 980" class="he111" @mousemove="yd">
    <tab-bar></tab-bar>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <transition class="ahh" name="aa" 
      ><audioa v-show="aa" ref="aud"></audioa
    ></transition>
    <banq class="bq"></banq>
    <dlcj></dlcj>
    <wuy class="bq"></wuy>
    <dibux></dibux>
    <zc></zc>
    <erwm></erwm>
    <fxsc class="bq"></fxsc>
    <xiaz class="bq"></xiaz>
    <ncaa></ncaa>
    <smdl class="bq"></smdl>
    <div v-show="$store.state.sccgaa" class="sccg bq">
      <span></span>
      收藏成功
    </div>
    <div v-show="$store.state.sccgaa2" class="sccg bq">暂未开发，敬请期待</div>
  </div>
  <div v-else class="aaa22">
    <shindex></shindex>
    <xiaz2 class="bq"></xiaz2>
  </div>
</template>

<script>
import tabBar from "components/common/tabBar/tabBar.vue";
import "assets/js/index.js";
import Audioa from "components/common/ts/audioa.vue";
import Banq from "components/common/cjian/banq.vue";
import Dlcj from "components/common/cjian/dlcj.vue";
import Wuy from "components/common/cjian/wuy.vue";
import Dibux from "components/common/dibux.vue";
import Zc from "components/common/cjian/zc.vue";
import Erwm from "./components/common/cjian/erwm.vue";
import Fxsc from "./components/common/cjian/fxsc.vue";
import Xiaz from "./components/common/cjian/xiaz.vue";
import Xiaz2 from "./components/common/cjian/xiaz2.vue";
import Ncaa from "./components/common/cjian/ncaa.vue";
import Smdl from "./components/common/cjian/smdl.vue";
import Shindex from "./views/shift/shindex.vue";

export default {
  name: "App",
  components: {
    tabBar,
    Audioa,
    Banq,
    Dlcj,
    Wuy,
    Xiaz2,
    Dibux,
    Zc,
    Erwm,
    Fxsc,
    Xiaz,
    Ncaa,
    Smdl,
    Shindex,
  },
  data() {
    return {
      aa: true,
      isShow: true,
      wind: document.documentElement.clientWidth,
    };
  },

  methods: {
    yd(e) {
      if (this.$refs.aud.sd) return;
      if (e.clientY >= this.getClientHeight() - 60) {
        // console.log(this.$refs.aud.$el);
        this.aa = true;
      }
      if (e.clientY < this.getClientHeight() - 210) {
        if (this.aa) {
          this.aa = false;
        }
      }
    },
    //可视窗高度
    getClientHeight() {
      var clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        var clientHeight =
          document.body.clientHeight < document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight;
      } else {
        var clientHeight =
          document.body.clientHeight > document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight;
      }
      return clientHeight;
    },
  },
};
</script>

<style scoped>
.ts {
  width: 100%;
}
.nmd {
  width: 100%;
  /* height: 200px;
  background-color: red; */
}
/* 离开，值从true变为false时 */
.aa-leave-active {
  animation: mot 0.4s linear;
}
/* 进入，值从false变为true时 */
.aa-enter-active {
  animation: mot 0.4s linear 0s reverse;
}
@import "assets/css/base.css";
.he {
  background-color: #f5f5f5;
}
@keyframes mot {
  0% {
    bottom:   0px;
  }
  10% {
    bottom: -5.3px;
  }
  20% {
    bottom: -10.6px;
  }
  30% {
    bottom: -15.9px;
  }
  40% {
    bottom: -21.2px;
  }
  50% {
    bottom: -26.5px;
  }
  60% {
    bottom: -31.8px;
  }
  70% {
    bottom: -37.1px;
  }
  80% {
    bottom: -42.5px;
  }
  90% {
    bottom: -47.5px;
  }
  100% {
    bottom: -53px;
  }
}
.aaa22 {
  width: 100%;
  height: 200px;
  /* display: none; */
  /* background-color: red; */
}


.bq {
  position: fixed;
  transform: translateX(-50%);
  margin-top: -200px;
  left: 50%;
  top: 50%;
  z-index: 20;
}
.sccg {
  padding: 10px 80px;
  font-size: 0.072917rem;
  background-color: #fff;
  border: 1px solid #666;
  margin-top: -80px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.sccg span {
  background-image: url(~assets/img/精灵图4.png);
  width: 18px;
  height: 18px;
  background-position: -25px -430px;
  margin-right: 20px;
}
[v-cloak]{
  display: none;
}
</style>
