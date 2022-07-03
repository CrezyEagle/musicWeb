<template>
  <div v-if="Object.keys(item).length != 0">
    <!-- 删除按钮 -->
    <div class="anx" @click="dksc()"></div>
    <div class="scan" v-show="sc" @click="scdt()">删除</div>
    <!-- 头像 -->
    <div class="xqimg"><img :src="item.user.avatarUrl" alt="" /></div>
    <div class="wzxq" v-if="Object.keys(obj).length != 0">
      <div>
        <span class="nikname">{{ item.user.nickname }}</span
        ><span class="type">{{ type(item.type) }}</span>
      </div>
      <div class="sjaa">{{ sjgs(item.eventTime) }}</div>
      <div class="ner xz">{{ js(item.json).msg }}</div>
      <!-- mv分享 -->
      <div v-if="xq == 41 || xq == 21">
        <div class="pr" v-if="bfmva">
          <img
            v-if="obj.coverUrl != undefined"
            :src="obj.coverUrl + '?param=338y189&quality=100'"
            alt=""
            class="cua22"
          />
          <img
            v-else-if="obj.imgurl16v9 != undefined"
            :src="obj.imgurl16v9 + '?param=338y189&quality=100'"
            alt=""
            class="cua22"
          />
          <div class="bf" @click="bfmv()"></div>
        </div>
        <!-- 播放mv -->
        <div v-else>
          <div class="sql" @click="sql()">
            <span class="sql1"></span><span>收起</span>
          </div>
          <video :src="mvurla" controls class="mv" autoplay></video>
        </div>
      </div>
      <!-- 其他分享 -->
      <div class="dtxqa" v-else>
        <!-- 图片 -->
        <div class="datt">
          <img :src="imga" alt="" @click="tz()" class="cua" />
          <div v-if="obj.artists != undefined" class="bfgq" @click="tz()"></div>
        </div>
        <div class="gm">
          <!-- 分享名 -->
          <div class="namea" @click="tz()">{{ obj.name }}</div>
          <div class="xdz" v-if="obj.creator != undefined">
            by {{ obj.creator.nickname }}
          </div>
          <div class="xdz" v-else-if="obj.artists != undefined">
            {{ obj.artists[0].name }}
          </div>
          <div class="xdz" v-else-if="obj.dj != undefined">
            {{ obj.dj.nickname }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mvurl } from "network/home/MV/index.js";
import { scdt } from "network/friend/index.js";
export default {
  data() {
    return {
      obj: {},
      xq: "",
      bfmva: true,
      mvurla: "",
      sc: false, //打开删除
    };
  },
  computed: {
    imga() {
      if (this.obj.imgurl != undefined) {
        return this.obj.imgurl;
      } else if (this.obj.img80x80 != undefined) {
        return this.obj.img80x80;
      } else if (this.obj.coverImgUrl != undefined) {
        return this.obj.coverImgUrl;
      } else if (this.obj.picUrl != undefined) {
        return this.obj.picUrl;
      }
    },
  },
  methods: {
    //删除动态
    scdt() {
      if (this.$store.state.lpa != 1) {
        scdt(this.item.id, this.$store.state.lpa).then((res) => {
          this.$emit("sjqqa");
          // console.log(res);
          this.sc=false
        });
      }
    },
    dksc() {
      this.sc = !this.sc;
    },
    //跳转页面
    tz() {
      if (this.xq == 18) {
        //点击的是单曲分享
        this.$store.dispatch("seturl", this.obj.id);
        this.$store.commit("setname", this.obj.name);
        this.$store.commit("setgqname", this.obj.name);
        this.$store.commit("setimga", this.obj.img80x80);
        this.$store.commit("setindex", 0);
        this.$store.commit("setarr", []);
      } else if (this.xq == 35 || this.xq == 13) {
        //点击的是歌单分享
        this.$router.push({
          path: "/home/gedanxq",
          query: {
            id: this.obj.id,
          },
        });
      } else if (this.xq == 19) {
        //点击的是专辑分享
        this.$router.push({
          path: "/home/xindiexq",
          query: {
            id: this.obj.id,
          },
        });
      } else if (this.xq == 17 || this.xq == 28) {
        //点击的是电台分享
        this.$router.push({
          path: "/home/diantaixq",
          query: {
            id: this.obj.id,
          },
        });
      } else if (this.xq == 36) {
        //点击的是歌手分享
        this.$router.push({
          path: "/home/geshouxq",
          query: {
            id: this.obj.id,
            name: this.obj.name,
            img: this.obj.picUrl,
          },
        });
      }
    },
    //收起mv
    sql() {
      this.bfmva = true;
    },
    //播放mv
    bfmv() {
      this.bfmva = false;
      if (this.obj.id == undefined) return;
      mvurl(this.obj.id).then((res) => {
        console.log(res);
        this.mvurla = res.data.url;
      });
    },
    gxa(json) {
      if (Object.keys(this.item).length == 0) return;
      this.xq = this.item.type;
      let zfc = Object.keys(JSON.parse(json));
      let obj1 = JSON.parse(json);
      let index = zfc.indexOf("soundeffectsInfo");
      if (index > -1) {
        zfc.splice(index, 1);
      }
      // console.log(obj1[zfc[1]]);
      this.obj = obj1[zfc[1]];
    },
    //js格式化
    js(js) {
      let obj = JSON.parse(js);
      // console.log(obj);
      return obj;
    },
    //时间格式化
    sjgs(sj) {
      var date = new Date(sj);
      var date2 = new Date();
      var yue = date.getMonth() + 1;
      var ri = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      //获取当前的时间
      var yue2 = date2.getMonth() + 1;
      var ri2 = date2.getDate();
      //判断是否大于10
      var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var f =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      return yue2 == yue && ri == ri2
        ? h + ":" + f
        : yue + "月" + ri + "日" + " " + h + ":" + f;
    },
    type(type) {
      if (type == 18) {
        return "分享单曲";
      } else if (type == 19) {
        return "分享专辑";
      } else if (type == 17 || type == 28) {
        return "分享电台节目";
      } else if (type == 22) {
        return "转发";
      } else if (type == 39) {
        return "发布mv";
      } else if (type == 35 || type == 13) {
        return "分享歌单";
      } else if (type == 24) {
        return "分享专栏文章";
      } else if (type == 41 || type == 21) {
        return "分享mv";
      } else if (type == 36) {
        return "分享歌手";
      }
    },
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    item(a, b) {
      // console.log(1);
      this.gxa(this.item.json);
    },
  },
  created() {
    this.gxa(this.item.json);
  },
};
</script>

<style scoped>
.scan {
  width: 60px;
  cursor: pointer;
  text-align: center;
  font-size: 0.057292rem;
  position: absolute;
  line-height: 20px;
  height: 20px;
  top: 22px;
  border: 1px solid #cccfd9;
  right: 0px;
}
.anx {
  width: 19px;
  cursor: pointer;
  height: 19px;
  position: absolute;
  right: 0;
  background-position: -15px 0;
  background-image: url(~assets/img/精灵图12.png);
}
.scan:hover {
  background-color: #f3f3f3;
}
.namea:hover {
  text-decoration: underline;
  cursor: pointer;
}
.sql {
  margin-top: 5px;
  color: #999;
  font-size: 11px;
  cursor: pointer;
  align-items: center;
  display: flex;
  margin-bottom: 2px;
}
.sql1 {
  background-image: url(~assets/img/精灵图12.png);
  width: 13px;
  height: 13px;
  background-position: -108px -19px;
}
.mv {
  width: 569px;
  height: 320.062px;
}
.xdz {
  font-size: 0.046875rem;
  margin-top: 5px;
  color: #666;
}
.pr {
  position: relative;
  margin-top: 8px;
  width: 337px;
  height: 188px;
}
.bf {
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  width: 44px;
  height: 44px;
  background-position: -30px -135px;
  margin: -20px 0 0 -20px;
  background-image: url(~assets/img/精灵图2.png);
  opacity: 0.8;
}

.cua {
  cursor: pointer;
}
.gm {
  margin-left: 10px;
  color: #333;
}
.datt {
  width: 40px;
  position: relative;
  height: 40px;
}
.bfgq {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  margin: 0;
  background-position: -100px -70px;
  cursor: pointer;
  background-image: url(~assets/img/精灵图12.png);
}
.dtxqa {
  margin-top: 8px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  background-color: #f5f5f5;
}
.xz {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ner {
  width: 100%;
  margin-top: 5px;
}

.sjaa {
  margin-top: 5px;
  color: #999;
}
.type {
  color: #666;
}
.nikname {
  color: #0c73c2;
  margin-right: 10px;
}

.wzxq {
  margin-left: 10px;
  padding-top: 5px;
  flex: 1;
}
.xqimg {
  width: 45px;
  height: 45px;
}

img {
  width: 100%;
  height: 100%;
}
</style>