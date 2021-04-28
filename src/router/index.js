import { createRouter, createWebHistory } from 'vue-router'
import Tuijian from 'views/Home/tuijian/index.vue'
const Paihang=()=>import('views/Home/paihang/index.vue')
const Home=()=>import('views/Home/index.vue')
const songMenu=()=>import('views/Home/songMenu/index.vue')
const Song=()=>import('views/Home/song/song.vue')
const geDanXq=()=>import('views/Home/gedanxq/index.vue')
const dianTai=()=>import('views/Home/diantai/index.vue')
const dianTaizy=()=>import('views/Home/diantai/zhuye/index.vue')
const dianTaifl=()=>import('views/Home/diantai/flxq/index.vue')
const dianTaixq=()=>import('views/Home/diantai/diantaixq/index.vue')
const Singer=()=>import('views/Home/singer/index.vue')
const SingerTuiJ=()=>import('views/Home/singer/tuijian.vue')
const SingerXq=()=>import('views/Home/singer/xq.vue')
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
    path:'gedan',
    component:songMenu,
    meta:{
      title:"歌单"
    },
  },
  {
    path:'gedanxq',
    component:geDanXq,
    meta:{
      title:"歌单详情"
    },
  },
  {
    path:'song',
    component:Song,
    meta:{
      title:"歌曲详情"
    }
  },
  {
    path:'diantai',
    component:dianTai,
    meta:{
      title:"电台"
    },
    children:[{
      path:'',
    redirect:'/home/diantai/zy'
    },
    {
      path:'zy',
      component:dianTaizy,
      meta:{
        title:"电台主页"
      },
    },
    {
      path:'fl',
      component:dianTaifl,
      meta:{
        title:"电台分类"
      },
    }
  ],
  },
  {
    path:'diantaixq',
    component:dianTaixq,
    meta:{
      title:"电台详情"
    }
  },
  {
    path:'geshou',
    component:Singer,
    meta:{
      title:"歌手"
    },
    children:[{
      path:'',
    redirect:'/home/geshou/tuij'
    },
    {
      path:'tuij',
      component:SingerTuiJ,
      meta:{
        title:"歌手推荐"
      },
    },
    {
      path:'xq',
      component:SingerXq,
      meta:{
        title:"歌手分类详情"
      },
    }
  ],
  },

]
},

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router