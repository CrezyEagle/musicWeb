import { createStore } from 'vuex'
import modelA from './audi'
export default createStore({
  namespaced: true ,
  state:{
    //推荐排行榜前往排行榜
    paih:0,
   
  },
  mutations:{
    paihgb(state,index){

      state.paih=index
     
    }
  },
  modules:{
    a:modelA
  }
  
})
