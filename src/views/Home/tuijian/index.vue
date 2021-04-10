<template>
  <!-- 发现推荐主页 -->
  <div>
    <swipr></swipr>
    <div class="main">
      <prevalent></prevalent>
      <plate></plate>
      <rankin-list></rankin-list>
    </div>
  </div>
</template>

<script>
import RankinList from "views/Home/tuijian/rankinList/rankinList.vue";
import Plate from "./plate.vue";
import Prevalent from "./prevalent.vue";
import swipr from "./swipr.vue";
export default {
  components: { swipr, Prevalent, Plate, RankinList },
};
</script>

<style scopde>
.main{
  padding: 0px 50px;
  width: 70%;
  margin: 0px auto;
  box-sizing: border-box;
  border: 1px solid #D3D3D3;
  background-color: #FFFFFF;
}
</style>