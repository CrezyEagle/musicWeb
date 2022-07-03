<template>
<!-- 新碟上架 -->
  <div class="xind">
    <navbar name='热门新碟'>
      <template v-slot:gduo><div></div></template>
    </navbar>
    <div v-if="cc1" class="cc">
      网络不好刷新一下吧
    </div>
    <div v-else class="rmxd">
       <conplate
          v-for="(item, index) in arr3"
          :key="index"
          :weekData="item"
          class="xd"
          @click="fn(item.id)"
        ></conplate>
    </div>
    <navbar name='全部新碟' :arr='tex' @namea='cz'>
      <template v-slot:gduo><div></div></template>
    </navbar>
     <div v-if="cc" class="cc">
      网络不好刷新一下吧
    </div>
      <div v-else  class="rmxd">
       <conplate
          v-for="(item, index) in arr2"
          :key="index"
          :weekData="item"
          class="xd"
          @click="fn(item.id)"
        ></conplate>
    </div>
  </div>
</template>

<script>
import navbar from 'components/content/navbar.vue'
import Conplate from 'components/content/conplate.vue'
import weekData from "network/home/gedan/index.js";
import xind from "network/home/xindie/index.js";
export default {
  components: { navbar,Conplate },
  data() {
    return {
      arr:[],
      tex:['全部','华语','欧美','韩国','日本'],
      arr2:[],
      cc1:false,
      cc:false,
      arr3:[]
    }
  },
  created(){
    this.axios()
  },
methods:{
  axios(){
       weekData()
        .then((res) => {
          this.arr = res.weekData;
          this.arr3=this.arr.splice(0,16)
        })
      .catch(err=>{
          this.cc1=true
        })
        xind('ALL').then(res=>{
          this.arr2=res.albums.splice(0,28)
        }).catch(err=>{
          this.cc=true
        })
  },
  cz(name){
    if(name=='全部'){
      name="All"
    }else if(name=='华语'){
      name="ZH"
    }else if(name=='欧美'){
      name="EA"
    }else if(name=='韩国'){
      name="KR"
    }else if(name=='日本'){
      name="JP"
    }
    xind(name).then(res=>{
          this.arr2=res.albums
          console.log(name);
        }).catch(err=>{
          this.cc=true
        })
  },
  fn(id){
    this.$router.push({
      path:"/home/xindiexq",
      query:{
        id
      }
    })
  }
}
}
</script>

<style scoped>
@media (min-width: 1901px){
.xind {
    width: 878px;
}
}
@media (max-width: 1900px){
.xind {
    width: 878px;
}
}

/* @media (max-width: 1720px){
  .xind {
    width: 738px;
}
} */

@media (max-width: 1520px){
  .xind {
    width: 670px;
}
}


.cc{
  font-size: .104167rem;
  color: #999;
  text-align: center;
}
.xind{

  padding: 30px;
  background-color: #fff;
  margin: 0px auto;
}
.rmxd{
  display: flex;
  width: 100%;
  margin-top: 20px;
flex-wrap: wrap;
margin-bottom: 20px;
}
.xd{
  margin: 10px 50px;
}

</style>