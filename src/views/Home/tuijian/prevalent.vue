<template>
<!-- 歌单热门推荐 -->
  <div class="remg">
  <navbar :arr='arr' name='热门推荐'></navbar>
    <div class="gequ">
    <gedan class="gedan" v-for="(item,index) in songSheet" :key="index" :songSheet='item' ></gedan>
   
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import Gedan from 'components/content/gedan.vue'
import zs from 'network/home/index.js'
import Navbar from 'components/content/navbar.vue'
export default {
  components:{
    Gedan,
    Navbar
  },
data() {
  return {
    arr:['华语','流行','摇滚','民谣','电子'],
    songSheet:[]
  }
},
created(){
  this.song()
}
,
methods:{
  song(){
    zs().then(res=>{
      this.songSheet=res.data.blocks[1].creatives
    })
  }
}
}
</script>

<style scoped>
.remg{
  margin: 0px auto;
  padding: 20px 0px 20px 0px;
  width: 100%;
}

.gedan{
  width: 14%;
  /* height: 12rem; */
  height: 100%;
}

.gequ{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
}


</style>