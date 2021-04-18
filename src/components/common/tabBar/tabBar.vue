<template>
  <div class="tabbar">
    <div class="taberji">
      <a href="JavaScript:;"></a>
      <div class="tob">
        <tabe-ji v-for="(item,index) in arr" :key="index" 
        :item="item.name" 
        @click="fn(index,item.routera)"
        :isShow="isShow"
        :index="index"
        
         ></tabe-ji>
      </div>
      <div class="hot"></div>
      <div class="dl">
        <div class="bd">
          <span></span>
          <input type="text" name="" id="" placeholder="音乐/视频">
        </div>
        <div class="bd2">创作者中心</div>
        <a href="">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import tabeJi from './tabeJi.vue';
export default {
  components: { tabeJi },
  data() {
    return {
      arr:[{
        name:'发现音乐',
        routera:'/home'
      },
      {
        name:'我的音乐',
        routera:'/means'
      },
      {
        name:'朋友',
        routera:'/riend'
      },
      {
        name:'商城',
        routera:'/super'
      },
      {
        name:'音乐人',
        routera:'/musician'
      },
      {
        name:'下载客户端',
        routera:'xz'
      }
      ],
      isShow:0
    }
  },
  methods: {
    fn(index){
      this.isShow=index
      this.$router.push(this.arr[index].routera);
    }
  },
};
</script>

<style scoped>

.hot{
  background-image: url("~assets/img/tabBar/topbar.png");
  background-repeat: no-repeat;
  margin-top: 15px;
      background-position: -190px 0;
  width: 28px;
  height: 19px;
}

.tabbar {
  background-color: #242424;
  top: 0;
  font-size: .067262rem;
  display: flex;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  justify-content: center;
  height: 70px;
  color: #CCCCCC;
  width: 100%;
  margin-top: 0px;
}
.taberji {
  /* width: 55%; */
  display: flex;
  justify-content: center;
  height: 70px;
  margin: 0px auto;
}
.bd{
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 30%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 32px;
  border-radius: 20px;
  background-color: #fff;
}
.bd span{
  background-image: url("~assets/img/tabBar/topbar.png");
  width: 25px;
  height: 30px;
    background-position: 0 -99px;
}
.bd input{
  outline: none;
  width: 100px;
  border: 0px;
  height: 30px;
  flex: 1;
}
.bd2{
  flex: 2;
  height: 30px;
  border-radius: 20px;
  margin-left: 10px;
  border: #4F4F4F solid 1px;
  width: 110px;
  text-align: center;
  line-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.taberji >a {
  margin: 0px;
  padding: 0px;
  background-image: url("~assets/img/tabBar/topbar.png");
  background-repeat: no-repeat;
  height: 100%;
  width: 180px;
    margin-right: 5px;
  background-size: 150%;
}
.dl{
  display: flex;
  justify-content: center;
  margin-left: 50px;
  align-items: center;
  width: 30%;
  height: 100%;
}
.dl a{
  color: #787878;
  flex: 1;
  text-decoration: none;
  margin-left: 10%;
}
.tob{
  height: 100%;
  display: flex;
  flex: 1;

}

</style>