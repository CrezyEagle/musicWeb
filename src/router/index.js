import { createRouter, createWebHistory } from 'vue-router'
import Tuijian from 'views/Home/tuijian/index.vue'
const Paihang=()=>import('views/Home/paihang/index.vue')
const Home=()=>import('views/Home/index.vue')
const Song=()=>import('views/Home/song/song.vue')
const routes=[{
  path:'',
  redirect:'/home'
} ,
{
  path: '/home',
  component:Home,
  meta:{
    title:"首页"
  },
  children:[{
    path:'',
  redirect:'/home/tuijian'
  },
  {
    path:'tuijian',
    component:Tuijian,
    meta:{
      title:"推荐"
    },
  },
  {
    path:'paihang',
    component:Paihang,
    meta:{
      title:"排行"
    },
  },
  {
    path:'song',
    component:Song,
    meta:{
      title:"歌曲详情"
    }
  }

]
},

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router