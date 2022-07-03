<template>
  <div class="tb">
    <span class="g1"
      ><div @click="fna()">
        <div class="ii"></div>
        播放
      </div></span
    >
    <span @click="fna()"></span>
    <slot name="sc"
      ><span class="g1" :class="{ sc2: subscribed }" @click="fndl()"
        ><div :class="{ sc: subscribed }">{{ sc }}</div></span
      ></slot
    >
    <span class="g1" @click="fxl()"
      ><div>{{ fxa }}</div></span
    >
    <span class="g1" @click="xiaz()"><div>下载</div></span>
    <slot name="pl">
      <span class="g1" 
        ><div>{{ pla }}</div></span
      >
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    //id
    id: {
      typeof: Number,
      default: 0,
    },
    fx: {
      type: Number,
      default: 0,
    },
    //是否收藏
    subscribed: {
      typeof: Boolean,
      default: false,
    },
    //当前类型
    lx: {
      typeof: Number,
      default: -1,
    },
    pl: {
      type: Number,
      default: 0,
    },
    sc: {
      type: String,
      default: "收藏",
    },
    //分享的名字
    fxname: {
      type: String,
      default: "",
    },
  },
  computed: {
    fxa() {
      return this.fx != 0 ? this.fx : "";
    },
    pla() {
      return this.pl != 0 ? this.pl : "";
    },
  },
  methods: {
    //下载客户端
    xiaz(){
      this.$store.commit('setxzk',true)
    },
    //分享
    fxl() {
      if (this.$store.state.lpa != 1) {
        if (this.lx != -1) {
          this.$store.commit("setfxlx", this.lx);
          this.$store.commit("setfxid", this.id);
          this.$store.commit("setfxname", this.fxname);
        }
      } else {
        this.$store.commit("setdl", true);
      }
    },
    fna() {
      this.$emit("bfa");
    },
    fndl() {
      if (this.$route.query.dy) return;
      if (this.$store.state.lpa != 1) {
        //判断用户是否收藏
        if (this.subscribed) {
          this.$emit("sca", false);
          this.$emit('sjsx')
        } else {
          this.$emit("sca", true);
          this.$emit('sjsx')
        }
      } else {
        this.$store.commit("setdl", true);
      }
    },
  },
};
</script>

<style scoped>
.sc2 {
  background-position: right -1192px !important;
}
.sc {
  background-position: 0 -1149px !important;
}
/* .g1{
  width: 59px;
} */
.tb {
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}
.tb span {
  display: inline-block;
  margin-top: 10px;
}
.tb span > div {
  background-position: 0 -387px;
  background-image: url(~assets/img/精灵图5.png);
  padding: 0 7px 0 8px;

  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  display: inline-block;
}
.tb span:nth-child(1) {
  /* width: 200px; */
  background-position: right -428px;
  background-image: url(~assets/img/精灵图5.png);
}
.tb span:nth-child(2) {
  margin-right: 5px;
  width: 31px;
  margin-left: -3px;
  padding-right: 0;
  background-image: url(~assets/img/精灵图5.png);
  padding: 0 5px 0 0;

  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background-position: 0 -1588px;
}
.tb span:nth-child(3) {
  background-position: right -1020px;
  background-image: url(~assets/img/精灵图5.png);
  padding: 0 5px 0 0;
  margin-right: 10px;
}
.tb span:nth-child(3) > div {
  background-position: 0 -977px;
  background-image: url(~assets/img/精灵图5.png);
  padding-right: 2px;
  padding-left: 28px;
}
.tb span:nth-child(4) {
  background-position: right -1020px;
  background-image: url(~assets/img/精灵图5.png);
  padding: 0 5px 0 0;
}
.tb span:nth-child(4) > div {
  background-position: 0 -1225px;
  background-image: url(~assets/img/精灵图5.png);
  padding-right: 2px;
  padding-left: 28px;
}
.tb span:nth-child(5) {
  margin-left: 10px;
  background-position: right -1020px;
  background-image: url(~assets/img/精灵图5.png);
  padding: 0 5px 0 0;
}
.tb span:nth-child(5) > div {
  background-position: 0 -2761px;

  background-image: url(~assets/img/精灵图5.png);
  padding-right: 2px;
  padding-left: 28px;
}
.tb span:nth-child(6) {
  margin-left: 10px;
  background-position: right -1020px;
  background-image: url(~assets/img/精灵图5.png);
  padding: 0 5px 0 0;
}
.tb span:nth-child(6) > div {
  background-position: 0 -1465px;
cursor: default;
  background-image: url(~assets/img/精灵图5.png);
  padding-right: 2px;
  padding-left: 28px;
}
.ii {
  float: left;
  width: 20px;
  height: 18px;
  margin: 6px 2px 2px 0;
  background-position: 0 -1622px;
  overflow: hidden;
  background-image: url(~assets/img/精灵图5.png);
}
</style>