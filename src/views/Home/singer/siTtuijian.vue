<template>
  <!-- 歌手主页推荐歌手 -->
  <div class="tuija">
    <navbar name='热门歌手' class="nav">
      <template v-slot:gduo><div></div></template>
    </navbar>
    <!-- 歌手图片 -->
    <div class="ges">
      <imgt v-for="(item,index) in arr2" :key="index" :obj='item'></imgt>
    </div>
    <!-- 歌手名 -->
    <div class="name">
      <div class="namea" v-for="(item,index) in arr" :key="index" @click="fn(item.id, item.name, item.picUrl, item.alias)">
        <div class="aaa" >{{item.name}}</div>
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
      arr:[],
      arr2:[]
    }
  },
  components:{
    Navbar,
    Imgt,

  },
  methods:{
        fn(id, name, img, name3) {

      let name2 = "";
      if (name3 != 0) {
        name2 = name3[0];
      }
      this.$router.push({
        path: "/home/geshouxq",
        query: {
          id,
          name,
          img,
          name2,
        },
      });
    },
  },
created(){
tuij().then(res=>{
  this.arr=res.artists
  this.arr2=this.arr.splice(0,15)
})
}
}
</script>

<style scoped>
.name{
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  border-top: 1px dotted #999;
  padding-top: 20px;
  justify-content: space-between;
}
.aaa{
      overflow: hidden;
    width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.namea{

  height: 30px;
    width: 130px;
    display: flex;
    margin: 0px 2px;
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

}
.tuija{
  width: 100%;

  padding: 40px;
  box-sizing: border-box;
}
</style>