<template>
  <!-- 歌手主页推荐歌手 -->
  <div class="tuija">
    <navbar name='热门歌手' class="nav">
      <template v-slot:gduo><div></div></template>
    </navbar>
    <!-- 歌手图片 -->
    <div class="ges">
      <imgt v-for="(item,index) in arr.splice(0,15)" :key="index" :obj='item'></imgt>
    </div>
    <!-- 歌手名 -->
    <div class="name">
      <div class="namea" v-for="(item,index) in arr" :key="index">
        <div>{{item.name}}</div>
        <div class="tb"></div>
      </div>
    </div>
  </div>
</template>

<script>
import tuij from 'network/home/singer/tuij/index.js'
import Navbar from 'components/content/navbar.vue'
import Imgt from './imgt/imgt.vue'
export default {
  data() {
    return {
      arr:[]
    }
  },
  components:{
    Navbar,
    Imgt,

  },
created(){
tuij().then(res=>{
  this.arr=res.artists
})
}
}
</script>

<style scoped>
.name{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.namea{

  height: 30px;
    width: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.namea:hover{
  text-decoration: underline;
}
.tb{
    background-image: url(~assets/img/精灵图4.png);
      width: 17px;
    height: 18px;
  background-position: 0 -740px;
}
.ges{
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
}
.tuija{
  width: 100%;

  padding: 40px;
  box-sizing: border-box;
}
</style>