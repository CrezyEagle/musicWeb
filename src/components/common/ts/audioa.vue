<template>
  <div class="aud">
    <div class="xaa"><div :class="{sdmy:sd}" class="suoa"  @click="sdk()"></div></div>
    <audio
      class="yyue"
      ref="aud"
      id="audio"
      :muted="muted"
      :src="url"
      controls
      :loop="xha == 0"
      @canplay="canplay"
      @stalled="stalled"
      @canplaythrough="canplaythrough"
      @progress="progress"
      @timeupdate="timeupdate"
      @play="play"
      @pause="pause"
    ></audio>
    <!-- 切换控键 -->
    <div class="bf">
      <!-- 上一首 -->
      <a v-if="syszt" href="JavaScript:;" class="sys" @mouseover="sys()"></a>
      <a
        v-else
        href="JavaScript:;"
        class="sys2"
        @mouseout="sys2()"
        @click="clicksys"
      ></a>
      <!-- 播放暂停 -->
      <a v-if="!bf" href="JavaScript:;" class="zt" @click="fn(1)"></a>
      <a v-else href="JavaScript:;" class="bfan" @click="fn(1)"></a>
      <!-- 下一首 -->
      <a v-if="xyszt" href="JavaScript:;" class="xys" @mouseover="xys()"></a>
      <a
        v-else
        href="JavaScript:;"
        class="xys2"
        @mouseout="xys2()"
        @click="clickxys()"
      ></a>
    </div>
    <!-- 歌曲详情 -->
    <div class="xq" ref="xq">
      <img v-if="img!=''" :src="img" alt="" @click="clickImg()" />
      <div>
        <div class="gqxq">
          <span class="gqnamea">{{ gqname }}</span
          ><span class="gqname">{{ name }}</span
          ><span class="fx"></span>
        </div>
        <div class="jind" ref="jind">
          <!-- 左进度 -->
          <div class="zo" :style="{ width: progress1 }"></div>
          <div
            class="dian"
            ref="dian"
            @mousedown="mousedown"
            @mouseup="mouseup"
            :style="{ left: progress1 }"
          >
            <i v-show="jzz"></i>
          </div>
          <div class="you"></div>
          <!-- 右进度 -->
          <div></div>
        </div>
      </div>
      <div class="sj">
        <span class="sj1">{{ time2 }}</span
        ><span class="sj2">/ {{ time }}</span>
      </div>
    </div>
    <!-- 操作按键 -->
    <div class="anj">
      <div class="yinl" @click="mik()"></div>
      <div class="xh2" v-if="xha == 0" @click="zj()"></div>
      <div class="xh3" v-else-if="xha == 1" @click="zj()"></div>
      <div class="xh" v-else @click="guil()"></div>

      <div class="yinlxq" v-show="xs">
        <div class="jia" @click="jia()">+</div>
        <span>{{ yl }}</span>
        <div class="jian" @click="jian()">-</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      muted: false, //是否为静音
      id: "", //  歌曲id
      name: "crazyEagle",
      gqname: "请添加歌曲",
      img: "",
      url: "",
      time2: "0:00", //当前播放的时间
      time: "0:00", //总时间
      zhant: false, //播放暂停
      bf: true, //播放
      syszt: true, //上一首
      xyszt: true, //下一首
      progress1: "0%", //进度条进度
      jl: 20,
      jzz: false, //加载显示图标
      yl: 10, //  音量
      xs: false, //显示隐藏音量设置
      xha: 2, //循环控制
      sd:true  //锁定
    };
  },

  watch: {
    urln(a, b) {
      if(a==''){
        this.$store.commit('setbq',true)
      }
      this.url = a;
     
      setTimeout(() => {
        this.fg();
      }, 500);
    },
    namea(a, b) {
      this.name = a;
    },
    gqnamea(a, b) {
      this.gqname = a;
    },
    imga(a, b) {
      this.img = a;
    },
    ida(a, b) {
      this.id = a;
    },
  },
  computed: {
    urln() {
      return this.$store.state.a.urln;
    },
    namea() {
      return this.$store.state.a.name;
    },
    gqnamea() {
      return this.$store.state.a.gqname;
    },
    imga() {
      return this.$store.state.a.imega;
    },
    ida() {
      return this.$store.state.a.id;
    },
    //时间格式化
    sjgsh() {
      return function (sj) {
        var fz = Math.floor(sj / 60);
        var s = Math.floor(sj - fz * 60);
        s = s < 10 ? "0" + s : s;
        return fz + ":" + s;
      };
    },
  },
  methods: {
    sdk(){
      this.sd=!this.sd

    },

    zj() {
      this.xha++;
      this.$store.commit("setxha");
    },
    guil() {
      this.xha = 0;
      this.$store.commit("setxha2");
    },
    //前往歌曲详情
    clickImg() {
      if(this.$store.state.a.jzdk) return
      this.$router.push({
        path: "/home/song",
      });
    },
    fg() {
      this.$refs.aud.play();
    },
    //音量修改
    jia() {
      if (this.yl < 10) {
        this.$refs.aud.volume = ++this.yl * 0.1;
      }
    },
    jian() {
      if (this.yl > 0) {
        this.$refs.aud.volume = --this.yl * 0.1;
      }
    },
    mik() {
      this.xs = !this.xs;
    },
    //音乐发生延迟调用
    stalled() {
      this.jzz = true;
    },
    //音乐播放中
    play() {
      this.bf = false;
    },
    //音乐暂停中调用
    pause() {
      this.bf = true;
    },
    //音乐加载中调用
    canplay() {
      this.jzz = true;
    },
    //音乐加载完毕调用
    canplaythrough() {
      this.jzz = false;
    },
    //点击下一首
    clickxys() {
      if (this.xha == 2) {
        this.$store.dispatch("xysg");
      } else if (this.xha == 1) {
        this.$store.dispatch("xysgsj");
      }
    },
    //点击上一首
    clicksys() {
      if (this.xha == 2) {
        this.$store.dispatch("sysg");
      } else if (this.xha == 1) {
        this.$store.dispatch("sysgsj");
      }
    },
    //进度条控制
    mouseup() {
      console.log("解除");
    },
    //离开进度条
    mouseout() {
      console.log(1);
      this.$refs.jind.onmousemove = null;
    },
    mousedown(e) {
      this.bf = true;
      this.$refs.aud.pause();
       document.onmouseup = (e) => {
          this.$refs.aud.currentTime =
            Number((e.pageX - this.$refs.jind.offsetLeft ) / 490) *
            this.$refs.aud.duration;
          this.$store.commit("setjdt", this.$refs.aud.currentTime );
          document.onmouseup = null;
          document.onmousemove = null;
          this.bf = false;
          this.$refs.aud.play();
        };
      document.onmousemove = (e) => {
        //拖动小圆点，进度条滑动
        this.progress1 =
          Number(
            ((e.pageX - this.$refs.jind.offsetLeft  ) / 490) * 100
          ) >= 100
            ? 100 + "%"
            : ((e.pageX - this.$refs.jind.offsetLeft ) / 490) * 100+
              "%";

        //鼠标弹起
        this.$refs.jind.onmouseup = (e) => {
          //鼠标弹起的同时修改歌曲进度
          this.$refs.aud.currentTime =
            Number((e.pageX - this.$refs.jind.offsetLeft) / 490) *
            this.$refs.aud.duration;
          this.$store.commit("setjdt", this.$refs.aud.currentTime );
          document.onmousemove = null;
          this.bf = false;
          this.$refs.aud.play();
        };
   
      };
    },

    //音乐加载完成就将音乐长度获取到
    progress() {
      this.time = this.sjgsh(this.$refs.aud.duration);
    },
    //当音乐播放时
    timeupdate() {
      //获取当前进度时间
      this.time2 = this.sjgsh(this.$refs.aud.currentTime);

      this.progress1 =
        (this.$refs.aud.currentTime / this.$refs.aud.duration) * 100 + "%";
        //当前是否是循环播放
      if (parseFloat(this.progress1.substr(0, 4)) >= 99.6 && this.xha == 2) {
        //切换下一首
        this.$store.dispatch("xysg");
      }
      //当前是否是随机播放
      if (parseFloat(this.progress1.substr(0, 4)) >= 99.6 && this.xha == 1) {
        //切换下一首（随机）
        this.$store.dispatch("sysgsj");
      }
      this.$store.commit("setitema", this.$refs.aud.currentTime);
    },
    fn(index) {
      if (index == 1) {
        setTimeout(() => {
          this.bf ? this.$refs.aud.pause() : this.$refs.aud.play();
        }, 10);
        this.bf = !this.bf;
      }
    },
    //静音按钮

    //上一首
    sys() {
      this.syszt = false;
    },
    sys2() {
      this.syszt = true;
    },
    //下一首
    xys() {
      this.xyszt = false;
    },
    xys2() {
      this.xyszt = true;
    },
  },
};
</script>

<style scoped>

.sdmy{
      background-position: -100px -380px  !important;
}
.suoa{
      display: block;
    width: 18px;
    height: 18px;
    margin:6px auto;
    background-position: -80px -380px;
    background-image: url(~assets/img/精灵图9.png);
    cursor: pointer;
}
.xaa{
        top: -20px;
    right: 15px;
    width: 52px;
    height: 20px;
    z-index: 10;
        background-position: 0 -380px;
    position: absolute;
   background-image: url(~assets/img/精灵图9.png);
}
.xq img{
  cursor: pointer;
  width: 38px;
  height: 38px;
}
.sj1 {
  color: #a1a1a1;
}
.sj2 {
  color: #797979;
}
/* 歌曲切换 */
.sys {
  background-position: 0 -130px;
}
.sys2 {
  background-position: -30px -130px;
  width: 28px;
  height: 28px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 5px;
  background-image: url(~assets/img/精灵图9.png);
}
.xys {
  background-position: -80px -130px;
}
.xys2 {
  background-position: -110px -130px;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  margin-left: 8px;
  margin-top: 5px;
  background-image: url(~assets/img/精灵图9.png);
}
.sys,
.xys {
  width: 28px;
  height: 28px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 5px;
  background-image: url(~assets/img/精灵图9.png);
}
/* 暂停按钮 */
.zt {
  width: 36px;
  height: 36px;
  margin-top: 0;
  background-image: url(~assets/img/精灵图9.png);
  background-position: 0 -165px;
}
/* 播放按钮 */
.bfan {
  width: 36px;
  height: 36px;
  margin-top: 0;
  background-image: url(~assets/img/精灵图9.png);
  background-position: 0 -204px;
}
/* 进度条 */
.you {
  background-image: url(~assets/img/进度条.png);
  height: 12px;
  width: 490px;
  border-radius: 10px;
  overflow: hidden;
  background-position: right 2px;
  position: absolute;
  z-index: 5;
}
.zo {
  background-image: url(~assets/img/进度条.png);
  height: 12px;
  border-radius: 10px;
  overflow: hidden;
  /* position: absolute; */
  background-position: left -64px;
  z-index: 10;
}
.dian {
  margin-left: -3px;
  width: 22px;
  height: 24px;
  cursor: pointer;

  background-image: url(~assets/img/精灵图2.png);
  background-position: 0 -250px;

  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50px;
}
.dian i {
  display: block;
  left: 5px;
  top: 5px;
  width: 12px;
  height: 12px;
  background-image: url(~assets/img/加载中.gif);
}
.aud {
  position: fixed;
  background-color:#2A2A2A;
  color: #fff;
  bottom: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 53px;
}
.bf {
  display: flex;
  justify-content: center;
  margin-right: 10px;
  /* align-items: center; */
}
img {
  display: block;
  margin-right: 10px;
  height: 38px;
}
.jind {
  width: 490px;
  height: 24px;
  position: relative;

  display: flex;
  align-items: center;
  /* border-radius: 20px; */
  /* padding-right: 30px; */
  /* padding-left: 22px; */
  overflow: hidden;
  /* background-color: red; */
}
.xq {
  display: flex;
  align-items: center;
}
.sj {
  margin-left: 15px;
  margin-bottom: -10px;
  text-align: center;
}
.yinl {
  width: 25px;
  height: 25px;
  background-position: -2px -248px;
  margin: 0px 2px 0 0;
  background-image: url(~assets/img/精灵图9.png);
}
.anj {
  position: relative;
  margin-left: 30px;
  display: flex;
  /* align-items: center; */
}
.xh {
  margin-left: 10px;
  width: 25px;
  background-image: url(~assets/img/精灵图9.png);
  height: 25px;
  margin: 0px 2px 0 0;
  background-position: -3px -344px;
}
.xh2 {
  margin-left: 10px;
  width: 25px;
  background-image: url(~assets/img/精灵图9.png);
  height: 25px;
  margin: 0px 2px 0 0;
  background-position: -66px -344px;
}
.xh3 {
  margin-left: 10px;
  width: 25px;
  background-image: url(~assets/img/精灵图9.png);
  height: 25px;
  margin: 0px 2px 0 0;
  background-position: -66px -248px;
}
.yyue {
  display: none;
}
.fx {
  display: inline-block;
  width: 14px;
  height: 15px;
  margin-left: 9px;
  background-position: -110px -103px;
  background-image: url(~assets/img/精灵图9.png);
}
.gqxq {
  display: flex;
  margin-left: 22px;
  align-items: center;
}
.yinlxq {
  position: absolute;
  width: 32px;
  box-sizing: border-box;
  height: 113px;
  top: -125px;
  background-color: #262626c4;
  background-position: 0 -503px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.yinlxq span,
.yinlxq .jia,
.yinlxq .jian {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  border: 1px solid #000;
}
.gqname {
  display: inline-block;
  color: #9b9b9b;
  margin-left: 10px;
}
</style>