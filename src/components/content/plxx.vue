<template>
  <div class="pl">
    <img
      class="imga"
      :src="yhtx"
      alt=""
    />

    <textarea name="" v-model="ac" id="" cols="30" rows="10"></textarea>
    <div class="fa">
      <div></div>
      <button @click="fn()">评论</button>
    </div>
  </div>
</template>

<script>
import plsa from "network/pl/index.js";
export default {
  data() {
    return {
      ac:'',

    }
  },
  props:{
      lxa:{
    typeof:Number,
    default:0
  },
    },
      computed:{
        yhtx() {
      if (this.$store.state.yhzh != 1) {
        if(this.$store.state.yhzh.profile==null) return
        return this.$store.state.yhzh.profile.avatarUrl;
      }
      return 'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"'
    },
    },
methods:{
  fn(){
    if(this.$store.state.lpa==1){
      console.log(1);
      this.$store.commit("setdl",true);
      return
    }
    if(this.ac!=''){
      plsa(1,this.lxa,this.$route.query.id,this.ac,this.$store.state.lpa).then(res=>{
        this.ac=""
        this.$emit("sx")
        })
      }else{

      }
},
}
};
</script>

<style scoped>
.fa div {
  width: 20px;
}
.fa button {
  background-color: #297ac7;
  width: 45px;
  border: 0px;
  text-align: center;
  line-height: 26px;
  font-size: 0.0625rem;
  color: #fff;
  height: 26px;
}
.fa button:hover {
  background-color: #549ee4;
  cursor: pointer;
}
.fa {
  margin-top: 20px;
  justify-content: space-between;
  display: flex;
  width: 100%;
}
textarea {
  flex: 1;
  resize: none;
  outline: none;
  border: 1px solid #cdcdcd;
  height: 70px;
  margin-left: 10px;
}
.pl {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.imga {
  width: 50px;
  height: 50px;
}
</style>