<template>
<!-- 歌碟封装 -->
  <div class="conp" v-if='Object.keys(weekData).length!=0'>
    <div class="dat">
      <img :src="weekData.blurPicUrl" alt="" />
      <a href="JavaScript:;" class="ya"></a>
    </div>
    <div class="da">{{weekData.name}}</div>
    <div class="xx">{{weekData.artist.name}}</div>
  </div>
</template>

<script>
export default {
  props:{
      weekData:{
    type:Object,
    default(){
      return {}
    }
  },
  }
};
</script>

<style scopde>

.conp{
  
  margin: 20px 10px;
        width: 118px;
    
}
.dat{
  width: 100px;
  position: relative;
  box-shadow: 5px 4px 12px -3px #000;
  height: 100px;
  margin-right: 10px;
}
.dat img{
  width: 100%;
  height: 100%;
}
.ya{
      position: absolute;
    top: 0;
    left: 0;
      width: 118px;
    height: 100px;
    background-position: 0 -570px;
    background-image: url(~assets/img/精灵图3.png);
}
.da{
  overflow: hidden;
  color: #000;
  margin-top: 10px;
  font-size: .067788rem;
  height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.xx{
  margin-top: 3px;
  overflow: hidden;
  width: 100%;
  height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: .068313rem;
  color: #666666;
}
</style>