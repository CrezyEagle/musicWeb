<template>
  <div class="wbqa" v-if="$store.state.ncym">
    <div class="tob">
      <span class="ts">手机号注册</span><span class="cc" @click="fn2()">×</span>
    </div>
    <div class="tan">
      <div class="nmd">
        <input
          type="text"
          v-model="nc"
          placeholder="输入你的昵称"
          name=""
          id=""
        />
      </div>
      <div class="th" v-if="yz == 1">
        <div class="hth"></div>
        <div class="hhh">该昵称已被占用</div>
      </div>
      <div class="th" v-if="yz == 2">
        <div class="hth"></div>
        <div class="hhh">昵称不符合规范</div>
      </div>
      <div class="but" @click="dl()">完成</div>
    </div>
  </div>
</template>

<script>
import { yhdl, yhzhxx } from "network/dl/yzm.js";
import { nmcsh } from "network/dl/yzm.js";
export default {
  data() {
    return {
      nc: "",
      yz: 0,
    };
  },
  methods: {
    dl() {
      nmcsh(this.nc, this.$store.state.lpa).then((res) => {
        if (res.code == 400) {
          this.yz = 2;
        }
        //注册成功后登陆
        if (res.code == 200) {
          //登录
          yhdl(this.$store.state.sjh, this.$store.state.sjhmm).then((res) => {
            console.log(res);
            this.$store.commit("setlpa", 1);
            //vuex添加令牌
            this.$store.commit("setlpa", res.cookie);
            this.$store.commit("setuid", res.account.id);
            //账号信息
            yhzhxx(res.cookie).then((res) => {
              // console.log(res);
              this.$store.commit("setyhzh", res);
              this.$store.commit('setncym',false)
            });
          });
        }
      });
    },
    fn2() {
      this.$store.commit("setncym", false);
    },
  },
};
</script>

<style scoped>
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
input {
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
.nmd {
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: space-around;
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
  margin-top: 25px;
}
.but:hover {
  background-color: #559cdf;
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
  height: 250px;
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
</style>