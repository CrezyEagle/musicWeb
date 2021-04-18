<template>
<div class="home"  @mousewheel="wda()" @scroll="wda()">

     <tab-bartow></tab-bartow>

<router-view v-slot="{ Component }" :dbaa="dbaa">
  <keep-alive >
    <component :is="Component" />
  </keep-alive>
</router-view>

  </div>  
</template>

<script>
import TabBartow from 'components/common/tabBartow/tabBartow.vue'

export default {
  data() {
    return {
     dbaa:null
    }
  },
components:{
  TabBartow
},
methods:{
     wda(){

      this.dbaa= window.pageYOffset>700
    window.onscroll=()=>{
      this.dbaa= window.pageYOffset>700
    }
    },
}
}
</script>

<style scoped>


</style>