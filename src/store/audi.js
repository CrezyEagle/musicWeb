import url from 'network/gequ/url.js';

const modelA = {

  state: {
    //歌曲id
    id: '',
    //歌曲url
    urln: '',
    //作者
    name: "",
    //歌曲名
    gqname: '',
    //歌曲图片
    imega: '',
    //歌曲下标
    index: 0,
    //歌曲属于的专辑
    zj: '',
    //整个歌单,
    arr: [],
    //播放形式
    xha: 0,
    itema: '',  //正在播放的时间
    jd: 0,
    jzdk:false    //禁止查看详情

  },
  mutations: {
    setjzdk(state, jda) {

      state.jzdk = jda

    },
    setjdt(state, jda) {

      state.jd = jda

    },
    setitema: (state, sj) => {
      state.itema = sj
    },
    setxha: (state) => {
      state.xha++
    },
    setxha2: (state) => {
      state.xha = 0
    },
    setid: (state, id) => {
      state.id = id
    },
    seturln: (state, url) => {
      state.urln = url
    },
    setname: (state, name) => {
      state.name = name
    },
    setgqname: (state, name) => {
      state.gqname = name
    },
    setimga: (state, img) => {
      state.imega = img
    },
    setindex: (state, index) => {
      state.index = index
    },
    setarr: (state, arr) => {
      state.arr = arr
    },
    setzj: (state, zj) => {
      state.zj = zj
    },
    setindej: (state) => {
      state.index++
    },

    setindea: (state) => {
      state.index--
    },
    //随机改变下标
    //下一首
    setsj: (state) => {
      
      state.index += Math.floor(Math.random() * 10 + 1)
      if (state.index >= state.arr.length) {
        state.index = Math.floor(Math.random() * 10 + 1)
      }
    },
    
    //上一首
    setsjj: (state) => {
      state.index -= Math.floor(Math.random() * 10 + 1)
      if (state.index <= 0) {
        state.index = state.arr.length - Math.floor(Math.random() * 10 + 1)
      }
    }

  },
  // getters:{
  //   rootState:(state,gg,rootStates)=>{
  //     rootStates.bq=true
  //     console.log(rootStates.bq);
  //   },
  // },
  actions: {
    seturl: (context, zj, rootState) => {
      context.commit('setid', zj)
      url(zj).then(res => {
        if (res.data[0].url == null) {
          context.commit('setbq', true)
        }
        context.commit('seturln', res.data[0].url)
       
        // console.log(res);
      })
    },
//点击下一首(随机)
xysgsj: (context) => {
  if(context.state.arr==undefined) return;
  if (context.state.arr.length <= 4) return
  context.commit('setsj')


  url(context.state.arr[context.state.index].id).then(res => {
   
    context.commit('seturln', res.data[0].url)
    context.commit('setgqname', context.state.arr[context.state.index].name)
    context.commit('setname', context.state.arr[context.state.index].ar[0].name)
    context.commit('setimga', context.state.arr[context.state.index].al.picUrl)
    context.commit('setzj', context.state.arr[context.state.index].al.name)
    context.commit('setid', context.state.arr[context.state.index].id)
    if (res.data[0].url == null) {
      context.commit('setbq', true)
      return
    }
  })
},
    //点击下一首
    xysg: (context) => {
      if(context.state.arr==undefined) return;
      if (context.state.arr.length <= 1) return
      if (context.state.index >= context.state.arr.length - 1) {
        context.commit('setindex', 0)
      } else {
        context.commit('setindej')
      }

      url(context.state.arr[context.state.index].id).then(res => {
        context.commit('seturln', res.data[0].url)
        context.commit('setgqname', context.state.arr[context.state.index].name)
        context.commit('setname', context.state.arr[context.state.index].ar[0].name)
        context.commit('setimga', context.state.arr[context.state.index].al.picUrl)
        context.commit('setzj', context.state.arr[context.state.index].al.name)
        context.commit('setid', context.state.arr[context.state.index].id)
        if (res.data[0].url == null) {
          context.commit('setbq', true)
          return
        }
      })
    },
    //点击上一首
    sysg: (context) => {
      if(context.state.arr==undefined) return;
      if (context.state.arr.length <= 1) return
      if (context.state.index <= 0) {
        context.commit('setindex', context.state.arr.length - 1)
      } else {
        context.commit('setindea')
      }
      url(context.state.arr[context.state.index].id).then(res => {
        context.commit('seturln', res.data[0].url)
        context.commit('setgqname', context.state.arr[context.state.index].name)
        context.commit('setimga', context.state.arr[context.state.index].al.picUrl)
        context.commit('setzj', context.state.arr[context.state.index].al.name)
        context.commit('setname', context.state.arr[context.state.index].ar[0].name)
        context.commit('setid', context.state.arr[context.state.index].id)
        if (res.data[0].url == null) {
          context.commit('setbq', true)
          return
        }
      })
    },
    //点击上一首(随机)
    sysgsj: (context) => {
      if(context.state.arr==undefined) return;
      if (context.state.arr.length <= 4) return
      context.commit('setsjj')
      url(context.state.arr[context.state.index].id).then(res => {
        context.commit('seturln', res.data[0].url)
        context.commit('setgqname', context.state.arr[context.state.index].name)
        context.commit('setimga', context.state.arr[context.state.index].al.picUrl)
        context.commit('setzj', context.state.arr[context.state.index].al.name)
        context.commit('setname', context.state.arr[context.state.index].ar[0].name)
        context.commit('setid', context.state.arr[context.state.index].id)
        if (res.data[0].url == null) {
          context.commit('setbq', true)
          return
        }
      })
    }
  }
}
export default modelA