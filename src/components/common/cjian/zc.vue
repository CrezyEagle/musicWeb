<template>
  <!-- 注册   -->
  <div class="wbqa" v-show="zc">
    <div class="tob">
      <span class="ts">手机号注册</span><span class="cc" @click="fn2()">×</span>
    </div>
    <div class="tan">
      <form action="" class="frm">
        手机号：
        <input
          type="text"
          v-model.trim="inpt1"
          @blur="lik()"
          placeholder="请输入手机号"
          autocomplete="tel"
        />
        <div class="th" v-if="yz == 1">
          <div class="hth"></div>
          <div class="hhh">请输入手机号</div>
        </div>
        <div class="th" v-else-if="yz == 3">
          <div class="hth"></div>
          <div class="hhh">请输入正确的手机号</div>
        </div>
        <div class="th" v-else-if="yz == 9">
          <div class="hth"></div>
          <div class="hhh">每个手机号一天只能验证5次</div>
        </div>
          <div class="th" v-else-if="yz == 11">
          <div class="hth"></div>
          <div class="hhh">账号注册过于频繁</div>
        </div>
        密码：
        <input
          type="password"
          v-model="inpt2"
          @focus="lik1()"
          placeholder="请输入密码"
          autocomplete="tel"
          @keyup="anx()"
        />
      </form>
      <div v-show="jc">
        <div class="th" v-if="kgjc">
          <div class="hth ac"></div>
          <div class="hhh2">密码不能包含空格</div>
        </div>
        <div class="th" v-else>
          <div class="hth"></div>
          <div class="hhh">密码不能包含空格</div>
        </div>
        <div class="th" v-if="zfjc">
          <div class="hth ac"></div>
          <div class="hhh2">包含字母、数字、符号中至少两种</div>
        </div>
        <div class="th" v-else>
          <div class="hth"></div>
          <div class="hhh">包含字母、数字、符号中至少两种</div>
        </div>
        <div class="th" v-if="cdjc">
          <div class="hth ac"></div>
          <div class="hhh2">密码长度为8-20位</div>
        </div>
        <div class="th" v-else>
          <div class="hth"></div>
          <div class="hhh">密码长度为8-20位</div>
        </div>
      </div>
      <div class="but" @click="dl()">下一步</div>
    </div>
    <div class="boot">
      <span @click="fh()">&lt;返回登录</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      zc: false,
      jc: false, //密码检查
      inpt1: "",//用户手机号
      inpt2: "",//用户设置的密码
      yz: 0, //手机号检查
      kgjc: true, //空格检查
      zfjc: false, //字符检查
      cdjc: false, //长度检查
      zcsj: true, //注册间隔
    };
  },
  created() {
    axios.defaults.baseURL = "https://autumnfish.cn";
  },
  methods: {
    dl() {
      var thi = this;
      if (this.kgjc && this.zfjc && this.cdjc && this.yz == 0) {
        if (this.zcsj) {
          this.zcsj = false;
        } else {
          this.yz=11
          return;
        }
        //      this.$store.commit("setzc", false);
        // this.$store.commit("setsjh", this.inpt1);
        // this.$store.commit("setsjhmm", this.inpt2);
        //  this.$store.commit("setsjhym", true);
            axios({
          url: `/captcha/sent?phone=`+this.inpt1,
          method: "GET",
          withCredentials: true, //关键
        }).then((res) => {
        this.$store.commit("setzc", false);
        this.$store.commit("setsjh", this.inpt1);
        this.$store.commit("setsjhmm", this.inpt2);
        this.$store.commit("setsjhym", true);
        this.inpt1=''
        this.inpt2=''
        setTimeout(() => {
          console.log(1);
          thi.zcsj = true;
          thi.yz=0
        }, 30000);
        })
        .catch((err) => {
          console.log(err);

          if (err.response.data.code == 400||err.response.data.code == 405) {
            thi.yz = 9;
          }
        });
      }
    },
    //手机号判断
    lik() {
      var sjh = /^1[3-9]\d{9}$/;
      if (this.inpt1 == "") {
        this.yz = 1;
        return;
      }
      if (!sjh.test(this.inpt1)) {
        this.yz = 3;
      } else {
        this.yz = 0;
      }
    },
    fn2() {
      this.$store.commit("setzc", false);
    },
    //打开登录
    fh() {
      this.$store.commit("setzc", false);
      this.$store.commit("setdl", true);
    },
    //关闭注册
    fn() {
      this.$store.commit("setzc", false);
    },
    anx() {
      var kb = /\s/;
      var zmxhx = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{2,50}$/;
      //空格判断
      if (kb.test(this.inpt2)) {
        this.kgjc = false;
      } else {
        this.kgjc = true;
      }
      //判断长度
      if (this.inpt2.length > 7 && this.inpt2.length < 21) {
        this.cdjc = true;
      } else {
        this.cdjc = false;
      }
      //字符判断
      if (zmxhx.test(this.inpt2.replace(/\s*/g, ""))) {
        this.zfjc = true;
      } else {
        this.zfjc = false;
      }
    },
    lik1() {
      this.jc = true;
    },
  },
  computed: {
    zcg() {
      return this.$store.state.zc;
    },
  },
  watch: {
    zcg(a, b) {
      this.zc = a;
    },
  },
};
</script>

<style scoped>
.hhh2 {
  color: #707070;
  margin-left: 5px;
}
.hhh {
  margin-left: 5px;
  color: #e33232;
}
.th {
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.hth {
  width: 14px;
  height: 14px;
  background-position: -50px -270px;
  background-image: url(~assets/img/精灵图4.png);
}
.ac {
  background-image: url(~assets/img/对.png);
  background-position: 0;
}
.but {
  cursor: pointer;
  width: 100%;
  color: #fff;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  background-color: #3686d1;
  margin-top: 15px;
}
.but:hover {
  background-color: #559cdf;
}
.boot {
  position: absolute;
  bottom: 0;
  padding: 0 19px;
  height: 48px;
  border-top: 1px solid #c6c6c6;
  border-radius: 0 0 4px 4px;
  line-height: 48px;
  background-color: #f7f7f7;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0c72c3;
}
.boot span:hover {
  text-decoration: underline;
  cursor: pointer;
}
.tan {
  width: 50%;

  margin: 0 auto;
  margin-top: 30px;

  font-size: 0.0625rem;
}
.tan .frm > input {
  height: 19px;
  width: 100%;
  height: 30px;
  padding: 5px 6px 6px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  line-height: 19px;
  box-sizing: border-box;
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
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
  box-sizing: border-box;
  justify-content: space-between;
  background-color: #2d2d2d;
}
.wbqa {
  width: 442px;
  height: 350px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px -4px #000;
  position: fixed;
  transform: translateX(-50%);
  margin-top: -200px;
  left: 50%;
  top: 50%;
  z-index: 20;
}
</style>