<template>
  <div class="tabeji" :class="{activ1:isShow==index}">
    <div ><a href="JavaScript:;" :class="{activ3:isShow==index}">{{item}}</a></div>
    <div class="activ" v-show="isShow==index"></div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      default:''
    },
    isShow: {
      type: Number,
      default:0
    },
    index: {
      type: Number,
      default:0
    },
  },
}
</script>

<style scoped>
.tabeji{

  line-height: 70px;
  padding: 0 19px;
  height: 100%;
  position: relative;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  text-align: center;
}
a{
  text-decoration: none;
  color: #CCCC;
}
.activ1{
  background-color: #000000;

}
.activ3{
  color: #FFFFFF;
}
.activ{
   background-image: url("~assets/img/tabBar/topbar.png");
   background-position: -226px 0;
       width: 12px;
    height: 7px;
    left: 50%;
    transform: translate(-50%, -50%);
   position: absolute;
   bottom: -4.5px;
}
</style>