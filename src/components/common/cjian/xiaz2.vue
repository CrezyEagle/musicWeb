<template>
  <!-- 下载 -->
  <div class="wbq" v-if="$store.state.xzk2">
    <div class="tob">
      <span class="ts">下载</span><span class="cc" @click="fn()">×</span>
    </div>
    <div class="tan">
      <div class="h22">使用云音乐客户端</div>
      <div class="h33">即可无限下载高品质音乐</div>
      <div class="xzl">
        <div class="left">
          <a href="https://music.163.com/api/pc/download/latest" class="pc">
            <span></span>
            PC版
            <div>V2.5.4</div>
          </a>
          <div class=" ys">
           已安装PC版
          </div>
        </div>
        <div class="rta">
          <div class="ewm"></div>
          <div class="sm">扫描下载手机版</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    fn(){
      this.$store.commit('setxzk2',false)
    }
  }
};
</script>

<style scoped>
.sm{
  font-size: 18px;
     color: #666;
}
.ewm{
  width: 120px;
    height: 120px;
   margin-bottom: 10px;
    background-image: url(~assets/img/客户端二维码.png);
}
.rta{
    padding: 20px 30px;
  box-sizing: border-box;
  margin-top: 10px;
}
.left {
  padding: 20px 40px;
  box-sizing: border-box;
  margin-top: 10px;
  border-right: 1px dotted #cccccc;
}
.pc {
  width: 146px;
  height: 40px;
  text-decoration: none;
  background: #d7e4f9;
  cursor: pointer;
  line-height: 40px;
  color: #3d74bf;
  font-size: 0.072917rem;
  display: flex;

}
.ys{
  font-size: 0.072917rem;
      color: #666;
    cursor: pointer;
  line-height: 40px;
   width: 146px;
  height: 40px;
  margin-top: 25px;
    text-align: center;
    text-align: center;
      background: #e5e5e5;
}
.pc:hover {
  background: #ceddf5;
}
.ys:hover{
  background-color: #E0E0E0;
}
.pc div {
  margin-left: 10px;
}
.pc span {
  float: left;
  width: 17px;
  background-image: url(~assets/img/精灵图7.png);
  height: 17px;
  background-position: 0px -310px;
  margin: 11px 10px 0 12px;
}
.xzl {
  width: 100%;
  display: flex;
  justify-content: center;
}
.h22 {
  width: 100%;
  margin: 0px auto;
  font-size: 40px;
  text-align: center;
  font-weight: 600;
}
.h33 {
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #666;
  margin: 10px auto;
}
.name {
  width: 80%;
  margin-left: 20px;
}
.tan {
  width: 100%;
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
  box-sizing: border-box;
  color: #fff;
  display: flex;
  justify-content: space-between;
  background-color: #2d2d2d;
}
.wbq {
  width: 50%;
  height: 400px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px -4px #000;
  z-index: 10;
}
</style>