import { createRouter, createWebHistory } from 'vue-router'
import Tuijian from 'views/Home/tuijian/index.vue'
import Paihang from 'views/Home/paihang/index.vue'
 import Home from 'views/Home/index.vue'
import myMusic from 'views/myMusic/index.vue'
import muscGdan from 'views/myMusic/gedan.vue'
import  muscMV  from 'views/myMusic/mv.vue'
import muscDt from 'views/myMusic/diantai.vue'
import muscGs from 'views/myMusic/ges.vue'
import friend from 'views/friend/index.vue'
import Search from 'views/search/index.vue'
import supera from 'views/super/index.vue'
import musician from 'views/musician/index.vue'
import songMenu from 'views/Home/songMenu/index.vue'
import Song from 'views/Home/song/song.vue'
import geDanXq from 'views/Home/gedanxq/index.vue'
import dianTai from 'views/Home/diantai/index.vue'
import dianTaizy from 'views/Home/diantai/zhuye/index.vue'
import dianTaifl from 'views/Home/diantai/flxq/index.vue'
import dianTaixq from 'views/Home/diantai/diantaixq/index.vue'
import Singer from 'views/Home/singer/singindex.vue'
import SingerTuiJ from 'views/Home/singer/siTtuijian.vue'
import SingerXq from 'views/Home/singer/singxq.vue'
import SingerXq1 from 'views/Home/singerxq/index.vue'
import xinDie from 'views/Home/xingdie/index.vue'
import xinDieXq from 'views/Home/xingdiexq/index.vue'
import MV from 'views/Home/mv/index.vue'
const routes = [{
  path: '',
  redirect: '/home'
},
{
  path: '/search',
  component: Search,
  meta: {
    title: "搜索"
  }
},
{
  path: '/musician',
  component: musician,
  meta: {
    title: "音乐人"
  }
},
{
  path: '/super',
  component: supera,
  meta: {
    title: "商城"
  }
},
{
  path: '/mymusic',
  component: myMusic,
  meta: {
    title: "我的音乐"
  },
  children: [
  {
    path: 'gdan',
    component: muscGdan,
    meta: {
      title: "用户歌单"
    },
  },
  {
    path: 'mv',
    component: muscMV,
    meta: {
      title: "用户收藏视频"
    },
  },
  {
    path: 'dt',
    component: muscDt,
    meta: {
      title: "用户收藏的电台"
    },
  },
  {
    path: 'gs',
    component: muscGs,
    meta: {
      title: "用户收藏歌手"
    },
  },
  ]
},
{
  path: '/friend',
  component: friend,
  meta: {
    title: "朋友"
  }
},
{
  path: '/home',
  component: Home,
  meta: {
    title: "首页"
  },
  children: [{
    path: '',
    redirect: '/home/tuijian'
  },
  {
    path: 'tuijian',
    component: Tuijian,
    meta: {
      title: "推荐"
    },
  },
  {
    path: 'paihang',
    component: Paihang,
    meta: {
      title: "排行"
    },
  },
  {
    path: 'gedan',
    component: songMenu,
    meta: {
      title: "歌单"
    },
  },
  {
    path: 'gedanxq',
    component: geDanXq,
    meta: {
      title: "歌单详情"
    },
  },
  {
    path: 'song',
    component: Song,
    meta: {
      title: "歌曲详情"
    }
  },
  {
    path: 'diantai',
    component: dianTai,
    meta: {
      title: "电台"
    },
    children: [{
      path: '',
      redirect: '/home/diantai/zy'
    },
    {
      path: 'zy',
      component: dianTaizy,
      meta: {
        title: "电台主页"
      },
    },
    {
      path: 'fl',
      component: dianTaifl,
      meta: {
        title: "电台分类"
      },
    }
    ],
  },
  {
    path: 'diantaixq',
    component: dianTaixq,
    meta: {
      title: "电台详情"
    }
  },
  {
    path: 'geshou',
    component: Singer,
    meta: {
      title: "歌手"
    },
    children: [{
      path: '',
      redirect: '/home/geshou/tuij'
    },
    {
      path: 'tuij',
      component: SingerTuiJ,
      meta: {
        title: "歌手推荐"
      },
    },
    {
      path: 'xq',
      component: SingerXq,
      meta: {
        title: "歌手分类详情"
      },
    }
    ],
  },
  {
    path: 'geshouxq',
    component: SingerXq1,
    meta: {
      title: "歌手详情"
    }
  },
  {
    path: 'xindie',
    component: xinDie,
    meta: {
      title: "新碟上架"
    }
  },
  {
    path: 'xindiexq',
    component: xinDieXq,
    meta: {
      title: "专辑详情"
    }
  },
  {
    path: 'mv',
    component: MV,
    meta: {
      title: "MV"
    }
  },

  ]
},

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//前置守卫
router.beforeEach((to, form, next) => {
  document.title = to.matched[0].meta.title
  next()
})


export default router