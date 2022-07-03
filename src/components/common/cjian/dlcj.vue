<template>
  <!-- 没登录 -->
  <div class="wbqa" v-show="xs">
    <div class="tob">
      <span class="ts">手机号登录</span><span class="cc" @click="fn()">×</span>
    </div>
    <div class="tan">
      <form action="" class="frm">
        <input
          type="text"
          v-model.trim="inpt1"
          @blur="lik1()"
          placeholder="请输入手机号"
          autocomplete="tel"
        />
        <input
          type="password"
          v-model.trim="inpt2"
          @blur="lik2()"
          placeholder="请输入密码"
          autocomplete="tel"
        />
      </form>
      <div class="th" v-if="yz == 1">
        <div class="hth"></div>
        <div class="hhh">请输入手机号</div>
      </div>
      <div class="th" v-else-if="yz == 2">
        <div class="hth"></div>
        <div class="hhh">请输入密码</div>
      </div>
      <div class="th" v-else-if="yz == 3">
        <div class="hth"></div>
        <div class="hhh">请输入正确的手机号</div>
      </div>
      <div class="th" v-else-if="yz == 4">
        <div class="hth"></div>
        <div class="hhh">手机号或密码错误</div>
      </div>
      <div class="th" v-else-if="yz == 5">
        <div class="hth"></div>
        <div class="hhh">密码错误超过限制</div>
      </div>
      <div class="th" v-else-if="yz == 6">
        <div class="hth"></div>
        <div class="hhh">账号不存在</div>
      </div>
      <div class="th" v-else-if="yz == 7">
        <div class="hth"></div>
        <div class="hhh">登录频繁，2分钟后再试</div>
      </div>
      <div class="xcaa">
        <label
          ><input type="checkbox" name="" id="" v-model="zja" />
          <span class="zd">记住密码</span></label
        ><span class="wjmm" @click="zc()">忘记密码？</span>
      </div>
      <div class="but" @click="dl()">登录</div>
    </div>
    <div class="boot">
      <span @click="qtdl()">&lt;其他登录</span
      ><span @click="zc()">没有账号？免费注册></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      xs: false,
      zja: false,//用户是否存储密码
      yz: -1,
      inpt1: "",//账号
      inpt2: "",//密码
      linp: "", //令牌
      id: "",//用户id
      yhzh: {}, //用户账号信息
    };
  },
  created() {
    axios.defaults.baseURL = "http://localhost:3000";
    if(localStorage.getItem('zhmm')!=null){
      if(localStorage.getItem('zhmm')=='')return
      let obj11=JSON.parse(localStorage.getItem('zhmm'))
      this.inpt1=obj11.name
      this.inpt2=obj11.mim
      this.zja=true
    }
  },
  computed: {
    linpa() {
      return this.$store.state.lpa;
    },
    bq() {
      return this.$store.state.dl;
    },
    sxsj() {
      return this.$store.state.sxsj;
    },
  },
  watch: {
    //登录数据刷新
    sxsj(a, b) {
      // console.log(this.yz);
      setTimeout(() => {
        this.dl();
      }, 500);
    },
    bq(a, b) {
      this.xs = a;
    },
    //令牌改变时
    linpa(a, b) {
      var thi = this;
      // this.$store.commit("setlpa", a);
      if (this.id != "") {
        this.$store.commit("setuid", this.id);
      }
      this.fn();
      axios({
        //账号信息
        url: `/user/account?cookie=` + encodeURIComponent(thi.$store.state.lpa),
        withCredentials: true, //关键
      }).then(function (res) {
        thi.yhzh = res.data;
        // console.log(res);
        thi.$store.commit("setyhzh", res.data);
        thi.$store.commit("setdl", false);
      });
    },
  },
  methods: {
    qtdl() {
      this.$store.commit("setdl", false);
      this.$store.commit("setsmym", true);
    },
    zc() {
      this.$store.commit("setdl", false);
      this.$store.commit("setzc", true);
    },
    fn() {
      this.$store.commit("setdl", false);

      // this.inpt1 = "";
      // this.inpt2 = "";
    },
    //手机号判断
    lik1() {
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
    //密码判断
    lik2() {
      if (this.inpt2 == "") {
        this.yz = 2;
      } else {
        this.yz = 0;
      }
    },
    //登录
    dl() {
      var thi = this;
      if (this.inpt1 == "") {
        this.yz = 1;
        return;
      }
      if (this.inpt2 == "") {
        this.yz = 2;
        return;
      }
      if (this.yz != 0) return;
      // console.log(this.yz);
      //获取到用户令牌
      axios({
        url: `/login/cellphone?phone=${this.inpt1}&password=${this.inpt2}`,
        method: "GET",
        withCredentials: true, //关键
      })
        .then(function (res) {
          if (res.data.code > 290) {
            // console.log(thi);
            thi.yz = 4;
            console.log("密码错误");
            return;
          }
          thi.linp = res.data.cookie;
          thi.$store.commit("setlpa", 1);
          //vuex添加令牌
          thi.$store.commit("setlpa", res.data.cookie);
          console.log(res);
          thi.id = res.data.account.id;
          if (thi.zja) {
            let obja = {};
            obja.name = thi.inpt1;
            obja.mim = thi.inpt2;
            localStorage.setItem("zhmm", JSON.stringify(obja));
          }else{
            localStorage.setItem("zhmm",'')
          }

          // console.log(thi.id);
          // axios({
          //   url:
          //     `/login/refresh?cookie=` +
          //     encodeURIComponent(thi.$store.state.lpa),
          //   withCredentials: true, //关键
          // }).then((res) => {
          //   console.log("刷新登录");
          // });
        })
        .catch((err) => {
          console.log(err);
          if (err.response == undefined) {
            thi.yz = 7;
            return;
          }
          if (err.response.data.code == 501) {
            thi.yz = 6;
          }
          if (err.response.data.code == 509) {
            thi.yz = 5;
          }
        });
    },
  },
};
</script>

<style scoped>
.frm {
  width: 100%;
}
.wjmm:hover {
  text-decoration: underline;
  cursor: pointer;
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
  color: #999;
}
.boot span:hover {
  text-decoration: underline;
  cursor: pointer;
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
.zd {
  flex: 1;
  cursor: pointer;
  margin-left: 10px;
}
input {
  margin: 0;
}
.xcaa {
  width: 100%;
  margin-top: 10px;
  display: flex;
  color: #666;
  align-items: center;
  justify-content: space-between;
}
.bj {
  background-image: url(~assets/img/手机登录.png);

  width: 125px;
  height: 220px;
  background-size: contain;
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
  margin-top: 20px;
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
  height: 300px;
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