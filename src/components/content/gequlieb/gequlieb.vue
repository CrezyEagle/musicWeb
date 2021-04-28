<template>
<!-- 歌曲列表封装   -->
<div class="gqlb">
      <div>歌曲列表</div>
      <div>{{ge}}首歌</div>
      <div>播放：<span>{{bf}}</span>次</div>
    </div>
</template>

<script>
export default {
props:{
  bf:{
    typeof:Number,
    default:0
  },
  ge:{
    typeof:Number,
    default:0
  }
}
}
</script>

<style scoped>
.gqlb{
  margin-top: 40px;
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;
  border-bottom: 2px solid #C20C0C;
  align-items: center;
  width: 100%;
}
.gqlb div:nth-child(1){
  font-size: .089333rem;
}
.gqlb div:nth-child(2){
  flex: 1;
  margin-left: 20px;
  font-size: .058854rem;
  color: #666666;
}
.gqlb div:nth-child(3){

  margin-left: 20px;
  font-size: .066211rem;
  color: #666666;
}
.gqlb div:nth-child(3) span{
 

  font-size: 0.89em;
  color: #C20C0C;
}

</style>