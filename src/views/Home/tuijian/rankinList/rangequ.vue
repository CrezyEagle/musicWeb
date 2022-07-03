<template>
  <div class="rang" v-if="Object.keys($props.obj).length != 0">
    <!-- 首页歌单排行榜歌曲 -->
    <div class="px" :class="{ acitv2: index == ov }">{{ index + 1 }}</div>
    <div class="gm" :class="{ acitv: index == ov }">{{ obj.name }}</div>

    <div class="dp" v-show="index == ov">
      <div class="bf" @click="fn2()"></div>
      <div class="tj" @click="xza()"></div>
      <div class="wj" @click="scsong(obj)"></div>
    </div>
  </div>
</template>

<script>
import gedanxq3 from "network/home/gedan/index3.js";
import { gedanfz } from "network/home/gedan/goods.js";
import { xih } from "network/home/song/index.js";
import axios from "axios";
export default {
  data() {
    return {
      gq: [],
      gedanxq: null,
    };
  },
  methods: {
    //歌曲喜欢
    scsong(item) {
      if (this.$store.state.lpa != 1 && this.$store.state.ncym != true) {
        //删除歌曲喜欢
        if (this.inde == "0") {
          xih(item.id, false, this.$store.state.lpa).then((res) => {
            this.$emit("cxsx");
          });
        } else {
          //歌曲喜欢
          xih(item.id, true, this.$store.state.lpa).then((res) => {
            this.$store.commit("setsccgaa");
          });
        }
      } else {
        this.$store.commit("setdl", true);
      }

      let thi = this;
      axios({
        url:
          "/playlist/tracks?op=del&pid=" +
          thi.obj.id +
          "&tracks=" +
          item.al.id +
          "&cookie=" +
          encodeURIComponent(thi.$store.state.lpa),
        method: "GET",
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //点击下载
    xza() {
      this.$store.commit("setxzk", true);
    },
    fn() {
      this.inedx;
    },
    fn2() {
      //播放歌曲,将整个歌单上传
      this.$store.commit("setindex", this.index - 1);
      console.log(this.index - 1);
      gedanxq3(this.id).then((res) => {
        console.log(res);
        this.gedanxq = new gedanfz(
          res.playlist.name,
          res.playlist.coverImgUrl,
          res.playlist.commentCount,
          res.playlist.shareCount,
          res.playlist.updateTime,
          10,
          res.playlist.tracks,
          res.playlist.playCount,
          res.playlist.id
        );
        this.$store.commit("setarr", this.gedanxq.tracks.splice(0, 10));

        this.$store.dispatch("xysg");
      });
    },
  },

  props: {
    obj: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
    //歌单id
    id: {
      type: Number,
      default() {
        return 0;
      },
    },
    ov: {
      type: Number,
      default() {
        return -1;
      },
    },
  },
    created() {
    axios.defaults.baseURL = "http://localhost:3000";
  },
};
</script>

<style scoped>
.acitv {
  text-decoration: underline;
  width: 50% !important;
  font-size: 0.092486rem;
}
a {
  width: 100%;
}
.acitv2 {
  margin-left: 15px !important;
}
.gm {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  width: 80%;
  color: #000;
  margin-left: 20px;
  font-weight: 400;
}
.px {
  margin-left: 20px;
  width: 20px;
  text-align: center;
  float: left;
  font-size: 0.100893rem;
}
.dp {
  height: 20px;
  display: flex;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
}
.rang {
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 8px;
  /* justify-content: space-between; */
}
.bf {
  background: url(~assets/img/精灵图1.png) no-repeat 0 9999px;
  width: 17px;
  height: 17px;
  margin-right: 10px;
  cursor: pointer;
  background-position: -267px -268px;
}
.bf:hover{
  background-image: url(~assets/img/精灵图6.png);
  background-position: 0 -128px;
}
.tj {
  width: 17px;
  background: url(~assets/img/精灵图6.png) no-repeat 0 9999px;
  height: 17px;
  background-position: -104px -174px;
  margin-right: 10px;
  cursor: pointer;
}
.wj {
  cursor: pointer;
  width: 17px;
  height: 17px;
  background: url(~assets/img/精灵图1.png) no-repeat 0 9999px;
  margin-right: 10px;
  background-position: -297px -268px;
}
</style>