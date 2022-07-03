<template>
  <div>
    <div class="tob">
      <div class="lef">
       <span class="spa"
          >音乐播放器</span
        >
      </div>
      <div class="xz" @click="fn2()">下载APP</div>
    </div>
    <div class="tuij">
      <div class="tyy">推荐音乐</div>
    </div>
    <div class="gdt">
      <div class="gd">推荐歌单</div>
      <div class="gdxq" v-if="arr.length != 0">
        <div class="gedan" @click="fn2()" v-for="(item, index) in arr" :key="index">
          <div class="diva">
            <img :src="item.uiElement.image.imageUrl" alt="" />
          </div>
          <div class="an">
            {{ item.uiElement.mainTitle.title }}
          </div>
        </div>
      </div>
      <div class="gd">最新音乐</div>
      <div>
        <div v-for="(item, index) in gq" :key="index" class="gqa">
       
           <div>
              <div class="name">{{ item.name }}</div>
            <span
              class="name2"
              v-for="(item2, index2) in item.ar"
              :key="index2"
            >
              /{{ item2.name }}
            </span>
           </div>
       
          <div @click="fn2()" class="ac">

          </div>
        </div>
      </div>
      <div class="dib">
        <img class="imgdb" src="~assets/img/移动端底板.png" alt="" />
        <div class="dwt">
          <div class="xzlog">
            <img class="loga" src="~assets/img/网易云log.jpg" alt="" />
            网易云音乐
          </div>
          <div class="dak" @click="fn2()">打开APP，发现更多好音乐 ></div>
          <div class="bqa">
            网易公司版权所有©1997-2021 杭州乐读科技有限公司运营
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import zs from "network/home/index.js";
import Xiaz from "components/common/cjian/xiaz.vue";
import rankingList from "network/home/rankingList/rankingList.js";
import gedanxq3 from "network/home/gedan/index3.js";
export default {
 
  data() {
    return {
      arr: [],
      arar: null,
      id: "",
      gq: [],
    };
  },
   components:{
    Xiaz
  },
  created() {
    //获取全部歌单，截取前3个歌单
    rankingList()
      .then((res) => {
        if (res == undefined) return;
        this.arar = res.list;
        this.id = this.arar[0].id;
        gedanxq3(this.id).then((res2) => {
          console.log(res2);
          this.gq = res2.playlist.tracks.slice(0, 10);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    zs().then((res) => {
      this.arr = res.data.blocks[1].creatives;
    });
  },
  methods: {
    fn2(){
      this.$store.commit('setxzk2',true)
      console.log(1);
    }
  },
};
</script>

<style scoped>
.ac{
  width: 44px;
  height: 44px;
      background-position: -48px 0;
      background-image: url(~assets/img/精灵图13.png);
}
.gqa {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c7c7c7;
}
.name2 {
  margin-top: 5px;
  color: #666;
  font-size: 28px;
}
.name {
  font-size: 40px;
}
.bqa {
  font-size: 20px;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
}
.dak {
  width: 85%;
  border-radius: 50px;
  border: 1px solid #d33a31;
  margin: 20px auto;
  box-sizing: border-box;
  text-align: center;
  padding: 20px;
  color: #d33a31;
}
.dwt {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.xzlog {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 60px;
}
.loga {
  width: 110px;
  height: 110px;
  margin-right: 20px;
  border-radius: 30px;
}
.dib {
  width: 100%;
  position: relative;
}
.imgdb {
  width: 100%;
}
.diva img {
  width: 100%;
  height: 100%;
}
.diva {
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  font-size: 0.050447rem;
  position: relative;
  display: block;
}
.gedan {
  margin: 40px 0px;
  width: 30%;
}

.an {
  font-size: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.gdxq {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
}
.gdt {
  background-color: #fcfcfd;
  padding-top: 40px;
  margin-top: 248px;
}
.gd {
  border-left: 3px solid #e70012;
  padding-left: 20px;
}
.tyy {
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 10px;
  width: 170px;
  align-items: center;
  margin-left: 50px;
  color: #e70012;
  border-bottom: 3px solid #e70012;
}
.tuij {
  width: 100%;
  z-index: 10;
  top: 168px;
  position: fixed;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 8px 10px -5px rgb(221, 221, 221);
}
.xz {
  color: #e70012;
  background-color: #fff;
  border-radius: 50px;
  padding: 20px 30px;

  margin-right: 30px;
}
.lef {
  height: 100%;

  display: flex;
  align-items: center;
}
.tob {
  width: 100%;
  z-index: 10;
  position: fixed;
  display: flex;
  top: 0px;
  align-items: center;
  justify-content: space-between;
  background-color: #e70012;
  height: 168px;
}
.spa {
  color: #fff;
  font-size: 42px;
  margin-left: 60px;
}
.tob img {
  height: 100%;
  margin-left: -60px;
}
</style>