const modelB={
  state: {
  name:"",    //歌手名
  name2:'',   //歌手艺名
  img:'',     //歌手图片
  id:''       //歌手id
  },
  mutations:{
    setName2(state,name){
      state.name=name
    },
    setName22(state,name){
      state.name2=name
    },
    setImg2(state,img){
      state.img=img
    },
    setId2(state,id){
      state.id=id
    }
  }
}
export default modelB