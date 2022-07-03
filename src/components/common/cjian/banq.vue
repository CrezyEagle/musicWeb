<template>
<!-- 无版权 -->
  <div class="wbq" v-if="xs">
    <div class="tob"><span class="ts">提示</span><span class="cc" @click="fn()">×</span></div>
    <div class="tan">
      <div class="imga"></div>
      <div class="name">版权方要求，当前专辑需单独付费，购买数字专辑即可无限畅享</div>
    </div>
    </div>  
</template>

<script>
export default {
data() {
  return {
    xs:false
  }
},
computed:{
  bq(){
    return this.$store.state.bq
  }
},
methods:{
  fn(){
    this.$store.commit('setbq',false)

  }
},
watch:{
  bq(a,b){
    this.xs=a
  }
}
}
</script>

<style scoped>
.name{
  width: 80%;
  margin-left: 20px;
}
.tan{
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  
  align-items: center;
  font-size: .09375rem;
}
.cc{
  cursor: pointer;
}
.ts{
  color: #fff;
}
.tob{
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  background-color: #2D2D2D;
}
.wbq{
      width: 442px;
      height: 300px;
      background-color: #FFFFFF;
      box-shadow: 0px 0px 10px -4px #000;
}
.imga{
  background-image: url(~assets/img/精灵图7.png);
      width: 40px;
    height: 40px;
    background-position: -78px -45px;
}
</style>