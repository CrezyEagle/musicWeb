<template>
<!-- 推荐节目排行   -->
<div  v-if='Object.keys(obj).length!=0' class="tuij" @click="fn(obj.id)">
  <div class="">
    <img :src="a" alt="">
  </div>
  <div class="mz">
    <div class="nam">{{b}}</div>
    <div class="dj">{{c}}</div>
  </div>
  <div class="zw"></div>
  <div>
    <div class="xq">{{d}}</div>
  </div>
</div>
</template>

<script>
export default {
  methods:{
    fn(id){
      console.log(id);
        // this.$router.push({
        // path:"/home/diantaixq",
        // query:{
        //   id:id
        // }
      // })
    }
  },
  computed:{
a(){
  return this.ac==1? this.obj.coverUrl: this.obj.program.coverUrl
},
b(){
  return  this.ac==1? this.obj.name: this.obj.program.name
},
c(){
  return  this.ac==1? this.obj.dj.brand: this.obj.program.radio.name
},
d(){
  return  this.ac==1? this.obj.radio.category: this.obj.program.radio.category
}
  },
props:{
  obj:{
    typeof:Object,
    default(){
      return {}
    }
  },
  ac:{
  typeof:String,
  default:''
},

}
}
</script>

<style scoped>
.zw{
  flex: 1;
}
.xq{
  border: 1px solid #999;
  padding: 0 6px;
  color: #999;
  font-size: .057292rem;
}
img{
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.tuij{
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      border-right: 1px solid #e2e2e2;
       border-left: 1px solid #e2e2e2;
}
.mz{
  margin-left: 10px;
  width: 60%;
  cursor: pointer;
}
.nam{
  color: #333;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.nam:hover{
  text-decoration: underline;
}
.dj{
  color: #999;
  overflow: hidden;
  cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>