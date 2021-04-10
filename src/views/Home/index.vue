<template>
<div class="home">
     <tab-bartow></tab-bartow>

<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
  </div>  
</template>

<script>
import TabBartow from 'components/common/tabBartow/tabBartow.vue'
export default {
components:{
  TabBartow
}
}
</script>

<style>

</style>