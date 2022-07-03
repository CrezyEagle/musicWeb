<template>
  <!-- 搜索 -->
  <div class="ss">
    <div class="ggg">
      <div class="gqa">歌曲</div>
      <div class="gsa">歌手</div>
      <div class="gda">歌单</div>
    </div>
    <div v-for="(item, index) in arr" :key="index" class="dd">
      <div class="name">
        <div
          class="bfa"
          @click="bf(item.id, item.al.picUrl, item.name, item.ar)"
        ></div>
        <div :class="{ sp: item.name.indexOf($route.query.s, 0) != -1 }" class="dnm">
          {{ item.name }}
        </div>
        <div v-if="item.alia.length != 0" class="ys">-({{ item.alia[0] }})</div>
      </div>
      <div class="zz">
        <span
          v-for="item2 in item.ar"
          :key="item2"
          :class="{ sp: item2.name.indexOf($route.query.s, 0) != -1 }"
          class="zja"
          @click="gs(item2.id, item2.name)"
          >/ {{ item2.name }}</span
        >
      </div>
      <div
        :class="{ sp: item.al.name.indexOf($route.query.s, 0) != -1 }"
        class="zja"
        @click="zj(item.al.id)"
      >
        《{{ item.al.name }}》
      </div>
    </div>
  </div>
</template>

<script>
import ss from "network/search/index.js";
export default {
  computed: {
    s() {
      return this.$route.query.s;
    },
  },
  watch: {
    s(a, b) {
      if (this.$route.href.substr(0, 7) != "/search") return;

      this.qq();
    },
  },
  data() {
    return {
      arr: {},
    };
  },
  activated() {
    this.qq();
  },
  methods: {
    //歌手名
    m1(ar) {
      return ar[0].name;
    },
    m2(ar) {
      if (ar.length >= 2) {
        return "/" + ar[1].name;
      }
      return "";
    },
    //播放
    bf(id, img, gqname, ar) {
      let name = this.m1(ar) + this.m2(ar);
      this.$store.commit("setname", name);
      this.$store.dispatch("seturl", id);
      this.$store.commit("setimga", img);
      this.$store.commit("setgqname", gqname);
    },
    qq() {
      if (this.$route.query.s == "") return;
      ss(this.$route.query.s).then((res) => {
        this.arr = res.result.songs;
        // console.log(res);
      });
    },
    gs(id, name) {
      this.$router.push({
        path: "/home/geshouxq",
        query: {
          id,
          name,
        },
      });
    },
    zj(id) {
      this.$router.push({
        path: "/home/xindiexq",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style scoped>
.dnm{
 flex: 1;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.zja {
  cursor: pointer;
}
.zja:hover {
  text-decoration: underline;
}
.gda {
  width: 30%;
  border-left: 1px solid #d13030;
}
.gsa {
  flex: 1;
  border-left: 1px solid #d13030;
}
.ggg div {
  padding: 10px;
}
.ggg {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.09375rem;
  border: 2px solid #d13030;
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: #f8f8f8;
}
.gqa {
  width: 30%;
}
.ys {
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #aeaeae;
}
.sp {
  color: #0c73c2;
}
.zz {
  flex: 1;
}
.name {
  width: 30%;
  display: flex;
  align-items: center;
}
.bfa {
  width: 17px;
  height: 17px;
  margin-right: 15px;
  cursor: pointer;
  background-position: 0 -103px;
  background-image: url(~assets/img/精灵图6.png);
}
.bfa:hover {
  background-position: -20px -128px;
}
.dd {
  width: 100%;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  display: flex;
}
.dd:nth-child(even) {
  background-color: #fff;
}
.dd:nth-child(odd) {
  background-color: #f7f7f7;
}
.dd:hover {
  background-color: #f2f2f2;
}
.ss {
  border: 1px solid #d3d3d3;
  width: 56%;
  background-color: #fff;
  margin: 0 auto;
}
img {
  width: 50px;
  height: 50px;
}
</style>