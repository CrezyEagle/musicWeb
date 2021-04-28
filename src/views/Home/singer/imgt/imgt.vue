<template>
  <!-- 歌手图片封装 -->
  <div class="imgt" v-if="Object.keys(obj).length != 0">
    <div class="imga"><img :src="obj.img1v1Url" alt="">
    <a href="JavaScript:;"></a>
    </div>
    <div class="name">
      <div class="nm">{{obj.name}}</div>
      <div class="d"></div>
    </div>
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
.nm{
  overflow: hidden;
  width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.imgt{
  margin: 10px;
  width: 130px;
}
.imga{
  width: 130px;
  position: relative;
  height: 130px;
}
img{
  width: 100%;
}
a{
  position: absolute;
  width: 100%;
  height: 100%;
    background-image: url(~assets/img/精灵图3.png);
  background-position: 0 -680px;
  top: 0;
  left: 0;
}
.name{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.name:hover{
  text-decoration: underline;
  cursor: pointer;
}
.d{
  background-image: url(~assets/img/精灵图4.png);
      width: 17px;
    height: 18px;
  background-position: 0 -740px;
}
</style>