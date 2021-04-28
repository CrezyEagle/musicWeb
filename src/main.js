import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'; // 懒加载
createApp(App).use(router).use(store).mount('#app')
