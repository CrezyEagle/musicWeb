<template>
  <!-- 分享 -->
  <div class="wbq" v-if="$store.state.fxlx != -1">
    <div class="tob">
      <span class="ts">分享</span><span class="cc" @click="fn()">×</span>
    </div>
    <div class="tan">
      <div class="fx">分享给大家</div>
      <div class="tex">
        <textarea
          name=""
          id=""
          cols="20"
          rows="7"
          placeholder="说什么"
          v-model="text"
        ></textarea>
        <div class="fxsm">
          <span class="lx">{{ lx }}:</span
          ><span class="fxname">{{ fxnamea }}</span>
        </div>
      </div>
      <div class="fxbt"  @click="fxd()">
        <div>分享</div>
      </div>
    </div>
  </div>
</template>

<script>
import {fxdt} from 'network/friend/index.js'
export default {
  data() {
    return {
      lx: "",
      fxnamea: "",
      id: null,
      text:''
    };
  },
  methods: {
    //开始分享
    fxd() {
      console.log(1);
      let a
       if (this.lx == '歌单') {
        a = "playlist";
      } else if (this.lx == '电台') {
        a = "djradio";
      } else if (this.lx== 'MV') {
        a = "mv";
      } else if (this.lx == '专辑') {
        a = "album";
      } else if (this.lx == '单曲') {
        a = "song";
      }
      console.log(a);
      fxdt(this.id,a,this.text,this.$store.state.lpa).then(res=>{
        console.log(res);
        this.text=""
        this.$store.commit("setfxlx", -1);
      })
    },
    //关闭
    fn() {
      this.$store.commit("setfxlx", -1);
    },
  },
  computed: {
    fxlx() {
      return this.$store.state.fxlx;
    },
    fxname() {
      return this.$store.state.fxname;
    },
  },
  watch: {
    fxlx(a, b) {
      if (a == 1) {
        this.lx = "歌单";
      } else if (a == 2) {
        this.lx = "电台";
      } else if (a == 3) {
        this.lx = "MV";
      } else if (a == 4) {
        this.lx = "专辑";
      } else if (a == 5) {
        this.lx = "单曲";
      }
    },
    fxname(a, b) {
      this.fxnamea = a;
      this.id = this.$store.state.fxid;
    },
  },
};
</script>

<style scoped>
.fxname {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.057292rem;
  white-space: nowrap;
  color: #999;
  width: 70%;
}
.lx {
  margin-right: 5px;
  font-size: 0.057292rem;
  color: #999;
}
.fxsm {
  width: 100%;
  height: 30px;
  border-top: 1px solid #d3d3d3;
}
.tex {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #d3d3d3;
}
.fxbt div:hover {
  color: rgb(231, 231, 231);
}
.fxbt div {
  width: 40px;

  background-position: 0 -387px;
  padding: 0 15px 0 20px;
  pointer-events: none;
  display: inline-block;
  background-image: url(~assets/img/精灵图5.png);
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  font-size: 0.0625rem;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
}
.fxbt {
  margin-top: 10px;
  padding: 0 5px 0 0;
  white-space: nowrap;
  display: inline-block;

  height: 31px;
  line-height: 31px;
  overflow: hidden;
  color: #fff;
  background-position: right -428px;
  background-image: url(~assets/img/精灵图5.png);
  vertical-align: top;
  text-align: center;
  cursor: pointer;
}
.fx {
  font-size: 0.067708rem;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
textarea {
  width: 100%;
  border: 0;
  resize: none;
  font-size: 0.057292rem;
  outline: none;
}
.name {
  width: 80%;
  margin-left: 20px;
}
.tan {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;

  font-size: 0.09375rem;
}
.cc {
  cursor: pointer;
}
.ts {
  color: #fff;
}
.tob {
  width: 100%;
  padding: 8px 10px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  background-color: #2d2d2d;
  box-sizing: border-box;
}
.wbq {
  width: 500px;
  height: 300px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px -4px #000;
  z-index: 10;
}
</style>