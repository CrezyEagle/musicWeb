<template>
  <!-- 扫码登录   -->
  <div class="wbqa" v-if="$store.state.smym">
    <div class="tob">
      <span class="ts">登录</span><span class="cc" @click="fn2()">×</span>
    </div>
    <div class="tan" v-show="!ddqr">
      <img class="dltp" src="~assets/img/手机登录.png" alt="" />
      <div class="smdla">
        <div class="smbt">扫码登录</div>
        <div class="imga">
          <img id="qrImg" src="" alt="" />
          <div class="guoq" v-show="isShow">
            <div class="sxewm">二维码已失效</div>
            <div class="sx" @click="qqewm()">点击刷新</div>
          </div>
        </div>

        <div class="sy">使用 <span>网易云音乐APP</span> 扫码登录</div>
      </div>
    </div>
    <div class="ddqra" v-show="ddqr">
      <img src="~assets/img/等待确认.png" alt="" />
      <div class="smcga">扫描成功</div>
      <div class="qzsj">请在手机上确认登录</div>
    </div>
    <div class="ptfs" @click="fn()">选择其他登录模式</div>
  </div>
</template>

<script>
import { keyz, ewm, ewmzt } from "network/dl/smdl.js";
import { yhzhxx } from "network/dl/yzm.js";
import axios from "axios";
export default {
  data() {
    return {
      isShow: false,
      ddqr: false,
      timer: null,
    };
  },
  computed:{
    syym(){
      return this.$store.state.smym
    }
  },
  watch:{
    syym(a){
      if(a){
        this.qqewm()
      }else{
        clearInterval(this.timer);
      }
    }
  },
  methods: {
    //请求二维码
    qqewm() {
      let key;
      let js = 0;
      // let timer
      //  async function checkStatus(key) {
      //       const res = await axios({
      //         url: `/login/qr/check?key=${key}&timerstamp=${Date.now()}`,
      //         withCredentials: true, //关键
      //       });
      //       return res.data;
      //     }
      keyz().then((res) => {
        key = res.data.unikey;
        //得到二维码
        ewm(key).then((res2) => {
          document.querySelector("#qrImg").src = res2.data.qrimg;
          this.isShow = false;
          this.ddqr = false;
        });
        //检查二维码状态
        this.timer = setInterval(() => {
          ewmzt(key).then((res3) => {
            console.log(res3.code);
            if (js == 802 && res3.code == 800) {
              clearInterval(this.timer);
              this.qqewm();
            }
            if (res3.code === 800) {
              this.isShow = true;
              // alert("二维码已过期,请重新获取");
              clearInterval(this.timer);
            }
            if (res3.code === 801) {
              this.ddqr = false;

              // 等待扫码;
            }
            if (res3.code === 802) {
              this.ddqr = true;
              // 等待确认;
            }
            if (res3.code === 803) {
              // 这一步会返回cookie
              clearInterval(this.timer);
              console.log(res3);
              yhzhxx(res3.cookie).then((res4) => {
                // console.log(res4);
                this.$store.commit("setuid", res4.account.id);
                // console.log(this.$store.state.uid);
                this.$store.commit("setlpa", res3.cookie);
                this.$store.commit("setyhzh", res4);
                this.$store.commit('setsmym',false)
                
              });
            }
            js = res3.code;
          });
        }, 2000);
        //  timer = setInterval(async () => {
        //   const statusRes = await checkStatus(key)
        //   console.log(statusRes);
        //   if (statusRes.code === 800) {
        //     alert('二维码已过期,请重新获取')
        //     clearInterval(timer)
        //   }
        //     if (statusRes.code === 801) {
        //       this.ddqr=false
        //         // 等待扫码;
        //       }
        //        if (statusRes.code === 802) {
        //         this.ddqr=true
        //         // 等待确认;
        //       }
        //   if (statusRes.code === 803) {
        //     // 这一步会返回cookie
        //     clearInterval(timer)
        //     alert('授权登录成功')
        //     await this.getLoginStatus()
        //   }
        // }, 3000)
      });
    },
    fn2(){
      this.$store.commit('setsmym',false)
    },fn(){
       this.$store.commit('setsmym',false)
        this.$store.commit('setdl',true)
    }
  },
  // mounted() {
  //   this.qqewm();
  // },
  created() {
    axios.defaults.baseURL = "http://localhost:3000";
  },
};
</script>

<style scoped>
.qzsj {
  width: 100%;
  font-size: 0.067708rem;
  text-align: center;
}
.smcga {
  width: 100%;
  margin-top: 10px;
  text-align: center;
  font-size: 0.088542rem;
}
.ddqra {
  padding-top: 40px;
  width: 140px;
  margin: 0px auto;
}
.ddqra img {
  display: block;
  margin: 0 auto;
  width: 140px;
  height: 140px;
}
.ptfs {
  text-align: center;
  padding: 5px;
  cursor: pointer;
  margin: 0px auto;
  margin-top: 20px;
  border-radius: 15px;
  border: 1px solid #979797;
  width: 120px;
}
.sy {
  font-size: 0.052083rem;
  color: rgba(0, 0, 0, 0.4);
}
.sy span {
  color: #0c73c2;
}
.smbt {
  width: 100%;
  text-align: center;
  font-size: 0.088542rem;
}
.smdla {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sxewm {
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 0.0625rem;
  margin-bottom: 5px;
}
.sx {
  display: block;
  cursor: pointer;
  margin: 0 auto;
  padding-right: 0;
  width: 64px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 4px;
  background: linear-gradient(180deg, #81dd81 0%, #55a055 100%);
  border: 1px solid #5baf5b;
  box-shadow: inset 0 -1px 1px 1px rgb(185 230 185 / 31%);
  color: #fff;
  font-size: 12px;
}
.guoq {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  background-color: #ffffffbd;
  top: 0;
  left: 0;
}
.imga {
  width: 138px;
  position: relative;
  height: 138px;
}
.imga img {
  width: 100%;
  height: 100%;
}
.dltp {
  width: 125px;
  height: 220px;
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
  width: 80%;
  display: flex;
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