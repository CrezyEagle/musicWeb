<template>
  <div class="xz">
    <div class="wany">网易云音乐多端下载</div>
    <div class="imga">
      <img src="~assets/img/ios.png" alt="">
      <img src="~assets/img/电脑.png" alt="">
      <img src="~assets/img/安卓.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.imga{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
img{
  cursor: pointer;
}
img{
  width: 30px;
}
.wany{
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  width: 100%;

  border-bottom: 1px solid #d3d3d3;
}
.xz{
  width: 100%;
}

</style>