<template>
  <div class="youx">
    <img :src="obj.picUrl" alt="">
    <div class="name">{{obj.name}}</div>
    <div class="name2">{{obj.rcmdtext}}</div>
  </div>
</template>

<script>
export default {
props:{
  obj:{
    typeof:Object,
    default(){
      return {}
    }
  }
}
}
</script>

<style scoped>
.youx{
  width: 18%;
}
img{
  cursor: pointer;
  width: 100%;
}
.name{
  color: #333;
  font-size: .072917rem;
  width: 100%;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
}
.name2{
  color: #999;
  font-size: .052083rem;
  width: 100%;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>