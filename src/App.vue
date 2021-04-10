<template>
 <div class="he">
   <tab-bar></tab-bar>

<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
 </div>
 
</template>

<script>
import tabBar from 'components/common/tabBar/tabBar.vue'


export default {
  components: { tabBar,},
  name: 'App',

}
</script>

<style scoped>
@import "assets/css/base.css";
.he{
  background-color: #F5F5F5;
}




</style>
