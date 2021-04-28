<template>
  <div class="he">
    <tab-bar></tab-bar>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <audioa></audioa>
  </div>
</template>

<script>
import tabBar from "components/common/tabBar/tabBar.vue";
import "assets/js/index.js";
import Audioa from "./components/common/ts/audioa.vue";
export default {
  components: { tabBar,Audioa },
  name: "App",
};
</script>

<style scoped>

@import "assets/css/base.css";
.he {
  background-color: #f5f5f5;
}
</style>
