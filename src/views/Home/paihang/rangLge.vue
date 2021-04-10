<template>
  <div class="rangl" v-if='Object.keys(obj).length!=0'>
    <div class="imga"><img :src="obj.coverImgUrl" alt="" /></div>
    <div class="wz">
      <div>{{ obj.name }}</div>
      <div class="gx">{{ obj.updateFrequency }}</div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      ddefault() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.rangl {
  padding: 10px 20px;
  display: flex;
    box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
}
.imga {
  width: 20%;

}
.imga img {
  width: 100%;
}
.wz{
  flex: 1;
  margin-left: 5%;
}
.gx{
  margin-top: 10px;
  color: #999;
}
</style>