<template>
  <div class="songm">
    <top @namez='ff' @mr='fn22' :name='namez'></top>

      <div  class="container1"  v-if="arr.length!=0" >
        <gedant class="wt " v-for="(item,index) in arr.playlists" :key="index" :songSheet='item'></gedant>
      </div>
 
  </div>
</template>

<script>
import Top from './top.vue'
import xq from "network/home/tobgedan/index.js";
import Gedant from 'components/content/gedant.vue';


export default {
  data() {
    return {
      namez:'全部',
      arr:[]
    }
  },
components:{
  Top,
  Gedant
},
methods:{
  //将子组件点击的分类给父组件
  ff(name){
    console.log(name);
    this.namez=name
  },
  //子组件点击全部风格
  fn22(name){
    this.namez='全部风格'
     xq(name).then(res=>{
      this.arr=res
    })
  }
},
mounted(){
 xq(this.namez).then(res=>{
      this.arr=res
    })
},
watch:{
  namez(a,b){
    xq(a).then(res=>{
      this.arr=res
    })
  }
}

}
</script>

Top
<style scoped>
.container1{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
margin-bottom: 10px;
}
/* .row{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
} */
.wt{

 width: 140px;
 height: 170px;
}
.songm{
  width: 56%;
 
  margin: 0 auto;
padding-bottom: 70px;
background-color: #FFFFFF;

}
</style>