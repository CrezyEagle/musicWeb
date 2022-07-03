<template>
  <!-- 验证码   -->
  <div class="wbqa" v-if="$store.state.sjhym">
    <div class="tob">
      <span class="ts">手机号注册</span><span class="cc" @click="fn2()">×</span>
    </div>
    <div class="tan">
      <div>你的手机号：{{ sjha }}<span></span></div>
      <div class="anq">为了安全，我们会给你发送短信验证码</div>
      <div class="nmd">
        <input type="text" maxlength="1" class="yyy" v-model="inpt" /><input
          type="text"
          maxlength="1"
          class="yyy"
          v-model="inpt2"
        /><input type="text" class="yyy" maxlength="1" v-model="inpt3" /><input
          type="text"
          maxlength="1"
          v-model="inpt4"
          class="yyy"
        />
      </div>
      <div>
        <div class="cx" v-if="cxfs">{{ sj }}s</div>
        <div class="cx cw" v-else @click="cxfsa()">重新发送</div>
      </div>
      <div class="th" v-if="!yzmpd1">
        <div class="hth"></div>
        <div class="hhh">验证码错误</div>
      </div>
      <div class="but" @click="dl()">下一步</div>
    </div>
    <div class="boot">
      <span @click="fh()">&lt;返回登录</span>
    </div>
  </div>
</template>

<script>
import { yzm, yzmyz, kszc, sjhsf, yhdl, yhzhxx } from "network/dl/yzm.js";
import axios from "axios";
export default {
  data() {
    return {
      sjh: "",
      sj: 60,
      cxfs: true,
      inpt: "",
      inpt2: "",
      inpt3: "",
      inpt4: "",
      yzmpd1: true, //验证码判断
      yzmpd: false, //验证码判断
      dsq: "",
      dknc: false,
    };
  },
  created() {
    axios.defaults.baseURL = "http://localhost:3000";
    if (this.$store.state.sjh != "") this.sjhzc();
  },
  computed: {
    inpta() {
      return this.inpt + this.inpt2 + this.inpt3 + this.inpt4;
    },
    sjhg() {
      return this.$store.state.sjh;
    },
    sjha() {
      return this.sjh.substr(0, 3) + "****" + this.sjh.substr(7);
    },
    ymgb() {
      return this.$store.state.sjhym;
    },
  },
  watch: {
    sjhg(a, b) {
      if (a != "") {
        this.sjh = a;
        this.sjhzc();
      }
    },
    inpta(a, b) {
      let thi=this
      if (
        this.inpt != "" &&
        this.inpt2 != "" &&
        this.inpt3 != "" &&
        this.inpt4 != ""
      ) {
        if (this.$store.state.sjh == "") return;
        //验证验证码
        // yzmyz(this.$store.state.sjh,a )
        console.log(1);
         axios({
        //账号信息
        url: `/captcha/verify?phone=` + encodeURIComponent(thi.$store.state.sjh)+'&captcha='+a,
        withCredentials: true, //关键
      })
          .then((res) => {
            console.log(res.data);
            thi.yzmpd = res.data;
            thi.yzmpd1 = res.data;
            thi.$store.commit("setyzm", a);
           
          })
          .catch((err) => {
            // console.log(err.response);
            if (err.response.status == 503) {
              thi.yzmpd1 = false;
            }
          });
      }
    },
    //打开该页面时
    ymgb(a, b) {
      
      if (a) {

        
        this.sj = 60;
        this.cxfs = true;
        this.diq();
        setTimeout(()=>{
          this.jd()
        },500)
      } else {
      }
    },
  },

  methods: {
    //检查手机号是否注册
    sjhzc() {
      // console.log(this.sjh);
      sjhsf(this.sjh).then((res) => {
        this.dknc = res.hasPassword;
      });
    },
    dl() {
      // console.log(this.yzmpd);
      if (this.yzmpd) {
        //注册
        kszc(
          this.$store.state.sjh,
          this.$store.state.sjhmm,
          this.$store.state.yzm
        )
          .then((res) => {
            // console.log(res);
            
             //判断有没有注册过手机号
            if (!this.dknc) {
              this.$store.commit("setncym", true);
            }
            //登录
            yhdl(this.$store.state.sjh, this.$store.state.sjhmm).then((res) => {
              // console.log(res);
              this.$store.commit("setlpa", 1);
              //vuex添加令牌
              this.$store.commit("setlpa", res.cookie);
              this.$store.commit("setuid", res.account.id);
              //账号信息
              yhzhxx(res.cookie).then((res) => {
                // console.log(res);
                this.$store.commit("setyhzh", res);
                 this.inpt = ""
        this.inpt2 = "" 
        this.inpt3 = ""
        this.inpt4 = ""
        this.$store.commit("setsjhym", false);
              });
            });
              
          
           
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //倒计时定时器
    diq() {
      let dsq = setInterval(() => {
        if (this.sj > 0) {
          this.sj--;
        } else {
          this.cxfs = false;
          clearInterval(dsq);
        }
      }, 1000);
    },
    //重新发送验证码
    cxfsa() {
      this.sj = 60;
      if (this.$store.state.sjh == "") return;
      yzm(this.$store.state.sjh).then((res) => {});
      this.cxfs = true;
      this.diq();
    },
    //返回登录
    fh() {
      this.$store.commit("setsjhym", false);
      this.$store.commit("setdl", true);
    },
    //关闭按钮
    fn2() {
      this.$store.commit("setsjhym", false);
    },
    //表单获取焦点
    jd(){
      
          var inpt = document.querySelectorAll(".yyy");
          console.log(inpt);
    for (let i = 0; i < inpt.length; i++) {
      inpt[i].onkeyup = function () {
        console.log(i);
        if (i >= 3) return;
        if (this.value.length == 1) {
          inpt[i + 1].focus();
        }
      };
    }
    }
  },

};
</script>

<style scoped>
.cw {
  cursor: pointer;
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
.but {
  cursor: pointer;
  width: 100%;
  color: #fff;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  background-color: #3686d1;
  margin-top: 45px;
}
.but:hover {
  background-color: #559cdf;
}
.cx {
  color: #0c73c2;
  float: right;
  margin-top: 5px;
}
.nmd {
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: space-around;
}
.nmd input {
  width: 20px;
  height: 30px;
  border: 0;
  outline: none;
  text-align: center;
  padding: 0 10px;
  padding-bottom: 5px;
  font-size: 0.104167rem;
  border-bottom: 1px solid #e5e5e5;
}
.anq {
  color: #999;
  margin-top: 5px;
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
.tan {
  width: 50%;

  margin: 0 auto;
  margin-top: 30px;

  font-size: 0.0625rem;
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
.cc {
  cursor: pointer;
}
</style>