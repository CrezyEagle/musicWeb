<template>
<!-- 相关推荐   -->
    <div class="gq" v-for="(item, index) in arr" :key="index" @click="fn(index)">
      <div class="imga"><img :src="item.coverImgUrl" alt="" /></div>
      <div class="wzxq">
        <div class="name">{{item.name}}</div>
        <div class="name2"><span class="sp">by</span>{{item.creator.nickname}}</div>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    fn(index){
      this.$router.push({
        path:'/home/gedanxq',
        query:{
          id:this.arr[index].id
        }
      })
    }
  },
props:{
  arr:{
    typeof:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style scoped>
.bh{
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #d5d5d5;
  font-size: .072917rem;
}
.imga{
  width: 25%;
  margin-right: 5%;
}
img{
  cursor: pointer;
  width: 100%;
}
.xiang{
    margin-bottom: 50px;
}
.gq{
  display: flex;
  font-size: .072917rem;
  margin-top: 10px;
}
.gq:hover .name{
  text-decoration: underline;
}
.name{
  cursor: pointer;
    width: 100%;
  margin-bottom: 10px;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.name2{
  cursor: pointer;
      color: #666;
}
.sp{
  display: inline-block;
  margin-right: 10px;
      color: #999;
}
.wzxq{
  width: 70%;
  font-weight: 400;
}

</style>