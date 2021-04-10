<template>
<!-- 首页榜单 -->
  <div class="
  rankinList" v-if="arr.length!=0">
    <navbar name="榜单"></navbar>
    <div class="nn">
      <rankingxq class="bda" v-for="(item,index) in arr1" :obj="item" :key="index"></rankingxq>
    </div>
  </div>
</template>

<script>
import Navbar from 'components/content/navbar.vue'
import Rankingxq from './rankingxq.vue'
import rankingList from 'network/home/rankingList/rankingList.js'
export default {
    data() {
    return {
      arr:[],
      arr1:[]
    }
  },
created(){
  rankingList().then(res=>{
console.log(11);
this.arr=res.list
this.arr1.push(this.arr[0])
this.arr1.push(this.arr[1])
this.arr1.push(this.arr[2])
  }).catch(err=>{
    console.log(err);
  })

},
components:{
  Navbar,
Rankingxq
}
}
</script>

<style scoped>
.bda{
  width: 33%;
  background-color: #F4F4F4;
  border: 1px solid #000;

}
.bda:nth-child(3){
  border-left: 0px;
}
.bda:nth-child(2){
  border-left: 0px;
}
.nn{
  width: 100%;
  margin-top: 20px;
    display: flex;
    justify-content: center ;
}
.rankinList{

  width: 100%;
  margin: 0px auto;
}
</style>