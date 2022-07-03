<template>
  <!-- 电台详情 -->
  <div class="diant" v-if="Object.keys(obj).length != 0">
    <div class="left">
      <tobimg
        :imgurl="obj.picUrl"
        :name="obj.name"
        :zzurl="obj.dj.avatarUrl"
        :zzname="obj.dj.nickname"
        :fx="obj.shareCount"
        @bfa1='bfa'
        lx='2'
        :id="obj.id"
        @sca='sca'
        :subscribed='subscribed'
      >
        <template v-slot:xq>
          <div class="mmm"></div>
        </template>
        <template v-slot:xq2
          ><div class="xq">
            <span>{{ obj.category }}</span
            >{{ obj.desc }}
          </div>
        </template>
      </tobimg>
      <div class="tob">
        <div class="jm">节目列表</div>
        <div class="qq">共{{ obj.programCount }}期</div>
      </div>
      <!-- 节目列表 -->
      <div v-for="(item, index) in arr" :key="index" class="jiemlb">
        <div class="nbr">{{ item.serialNum }}</div>
        <div class="sp" @click="fn(item.mainTrackId,index,item.name,item.coverUrl,item.dj.nickname)"></div>
        <div class="nm">{{ item.name }}</div>
        <div class="bf">播放{{ item.listenerCount }}</div>
        <div class="zz">赞{{ item.likedCount }}</div>
        <div>{{ sj(item.scheduledPublishTime) }}</div>
        <div></div>
      </div>
    </div>
    <div class="rit">
      <xzkh></xzkh>
    </div>
  </div>
</template>

<script>
import Tobimg from "components/content/tobimg.vue";
import { dtxq, jiemxq,dldtxq,diantdy } from "network/home/diantai/diantai.js";

import Tablea from "components/content/gequlieb/tablea.vue";
import Xzkh from "components/common/xz/xzkh.vue";
export default {
  data() {
    return {
      obj: {},
      arr: [],
      subscribed:false
    };
  },
  components: { Tobimg, Tablea, Xzkh },
  computed: {
    rot() {
      return this.$route.query.id;
    },
    lpg(){
      return this.$store.state.lpa
    }
  },
  activated(){
    if (this.$route.href.substr(0, 15) != "/home/diantaixq") return;
    if(this.$store.state.ncym==true) return
      if(this.$store.state.lpa==1) return
      dldtxq(this.$route.query.id,this.$store.state.lpa).then(res=>{
            console.log(res.data);
        this.subscribed = res.data.subed
    
      })
  },
  watch: {
    lpg(a){
      if (this.$route.href.substr(0, 15) != "/home/diantaixq") return;
      if(this.$store.state.ncym==true) return
      if(this.$store.state.lpa==1) return
      dldtxq(this.$route.query.id,a).then(res=>{
        this.subscribed = res.data.subed
        console.log(res.data);
      })
    },
    rot(a, b) {
      if (this.$route.href.substr(0, 15) != "/home/diantaixq") return;
      window.scroll(0, 0);
      dtxq(a).then((res) => {
        this.obj = res.data;
       
      });
      jiemxq(a).then((res) => {
        this.arr = res.programs;
      });
    },
  },
  created() {
    dtxq(this.rot).then((res) => {
      this.obj = res.data;
       console.log(res.data);
    });
    jiemxq(this.rot).then((res) => {
      this.arr = res.programs;
    });
  },
  methods: {
    //电台收藏
      sca(sc) {
      if (sc) {
        diantdy(this.obj.id, this.$store.state.lpa, 1).then((res) => {
          console.log(res);
          console.log("电台收藏成功");
          this.subscribed = sc;
        });
      } else {
        diantdy(this.obj.id, this.$store.state.lpa, 0).then((res) => {
          console.log("电台取消收藏成功");
          this.subscribed = sc;
        });
      }
    },
    bfa(){
       this.$store.dispatch('seturl',this.arr[0].mainTrackId)
       this.$store.commit('setname',this.arr[0].dj.nickname)
       this.$store.commit('setgqname',this.arr[0].name)
       this.$store.commit('setimga',this.arr[0].coverUrl)
       this.$store.commit('setindex',0)
       this.$store.commit('setarr',this.arr)
       this.$store.commit('setjzdk',true)
    },
    sj(sj) {
      var date = new Date(sj);
      var y = 0;
      var r = 0;
      if (date.getMonth() + 1 < 10) {
        y = "0" + (date.getMonth() + 1);
      } else {
        y = date.getMonth() + 1;
      }
      if (date.getDate() < 10) {
        r = "0" + date.getDate();
      } else {
        r = date.getDate();
      }
      return date.getFullYear() + "-" + y + "-" + r;
    },
    fn(id,index,gqname,img,zzname) {
      this.$store.dispatch('seturl',id)
       this.$store.commit('setname',zzname)
      this.$store.commit('setgqname',gqname)
      this.$store.commit('setimga',img)
      this.$store.commit('setindex',index)
      this.$store.commit('setarr',this.obj.tracks)
      this.$store.commit('setjzdk',true)
   
    },
  },
};
</script>

<style scoped>
.rit {
  width: 25%;
  border-left: 1px solid #d3d3d3;
  box-sizing: border-box;
  padding: 30px;
}
.sp {
  width: 17px;
  height: 17px;
  cursor: pointer;
  cursor: pointer;
  display: inline-block;
  margin: 0px 10px;
  background-position: 0 -103px;
  margin-right: 23px;
  background-image: url(~assets/img/精灵图6.png);
}
.sp:hover {
  background-position: 0 -128px;
}
.nbr {
  width: 9%;
}
.bf {
  width: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.zz {
  width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nm {
  width: 40%;
  margin-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.nm:hover {
  text-decoration: underline;
}
.jiemlb:nth-child(odd) {
  background-color: #ffffff;
}
.jiemlb:nth-child(even) {
  background-color: #f7f7f7;
}
.jiemlb {
  display: flex;
  padding: 10px 5px;
  justify-content: space-between;
}
.qq {
  font-size: 0.052083rem;
  color: #999;
}
.jm {
  font-size: 0.09375rem;
  margin-right: 20px;
}
.tob {
  display: flex;
  margin-top: 30px;
  padding-bottom: 10px;
  align-items: center;
  border-bottom: 1px solid red;
}
.xq span {
  display: inline-block;
  padding: 2px 3px;
  border: 1px solid red;
  color: red;
  margin-right: 10px;
}
.mmm {
  width: 54px;
  height: 24px;

  background-image: url(/img/精灵图4.29cd8439.png);
  background-position: 0 -1014px;
}
.xq {
  font-size: 0.052083rem;
  color: #666;
  margin-top: 20px;
}
.diant {
  width: 56%;
  margin: 0px auto;

  border: 1px solid #d3d3d3;
  display: flex;
  background-color: #fff;

  box-sizing: border-box;
}
.left {
  width: 75%;
  padding: 30px;
  box-sizing: border-box;
}
</style>