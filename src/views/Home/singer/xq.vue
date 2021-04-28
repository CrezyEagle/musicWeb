<template>
  <!-- 歌手首页歌手分类 -->
  <div class="xq">
    <navbar :name='name'>
       <template v-slot:gduo><div></div></template>
    </navbar>
    <!-- 歌手首字母 -->
    <div class="top" v-if="xuanx.length!=0">
      <div class="rm">热门</div>
      <div v-for="(item,index) in xuanx" :key="index" class="yw">{{item}}</div>
      <div class="qt">其他</div>
    </div>
   <!-- 歌手图片 -->
    <div class="ges" v-if="arr.length!=0">
      <imgt v-for="(item,index) in arr2" :key="index" :obj='item'></imgt>
    </div>
  </div>
</template>

<script>
import Navbar from "components/content/navbar.vue";
import {xqgs1,xqgs2} from 'network/home/singer/xq/index.js'
import Imgt from './imgt/imgt.vue';
export default {
  components: {
    Navbar,
    Imgt,
  },
  data() {
    return {
      name:'',
      xuanx:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"],
      arr:[],
      arr2:[]
    }
  },
  created(){
    this.name=this.$route.query.id
    xqgs1(this.$route.query.type,this.$route.query.area).then(res=>{
      this.arr=res.artists
      this.arr2=this.arr.splice(0,15)

    })
  },
  computed:{
rot(){
  return this.$route.href
}
  },
  watch:{
    //当分类改变后
rot(){
  this.name=this.$route.query.name
    xqgs1(this.$route.query.type,this.$route.query.area).then(res=>{
      this.arr=res.artists
        this.arr2=this.arr.splice(0,15)

    })
}
  }
};
</script>

<style scoped>
.ges{
  flex-wrap: wrap;
  display: flex;
  margin-top: 20px;
  justify-content: center;
}
.qt:hover{
text-decoration: underline;
}
.rm{
      background: #c20c0c;
      padding: 1px 7px;
      color: #fff;
}
.rm:hover{
  cursor: pointer;
  text-decoration: underline;
}
.xq {
  padding: 40px;
}
.top{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.yw{
  padding: 0 5px;
  cursor: pointer;
  font-size: .078125rem;
}
.yw:hover{
text-decoration: underline;
}
</style>