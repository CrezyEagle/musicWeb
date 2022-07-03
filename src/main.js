import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'; // 懒加载



import 'jquery/dist/jquery.min'
createApp(App).use(VueLazyLoad,{
  loading:require('./assets/img/11.jpg')
}).use(router).use(store).mount('#app')
