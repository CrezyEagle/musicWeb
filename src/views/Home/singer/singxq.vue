<template>
  <!-- 歌手首页歌手分类 -->
  <div class="xq">
    <navbar :name="name">
      <template v-slot:gduo><div></div></template>
    </navbar>
    <!-- 歌手首字母 -->
    <div class="top">
      <div
        v-for="(item, index) in xuanx"
        :key="index"
        class="yw"
        @click="fna(item, index)"
        :class="{ rm: isShow == index }"
      >
        {{ item }}
      </div>
    </div>
    <!-- 歌手图片 -->
    <div class="ges">
      <imgt v-for="(item, index) in arr" :key="index" :obj="item"></imgt>
    </div>
    <!-- 歌手名 -->
    <div class="name">
      <div
        class="namea"
        v-for="(item, index) in arr2"
        :key="index"
        @click="fn(item.id, item.name, item.picUrl, item.alias)"
      >
        <div class="aaa" @click="fn(item.id, item.name, item.picUrl, item.alias)">{{ item.name }}</div>
        <div class="tb"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "components/content/navbar.vue";
import { xqgs1, xqgs2 } from "network/home/singer/xq/index.js";
import Imgt from "./imgt/imgt.vue";
export default {
  components: {
    Navbar,
    Imgt,
  },
  data() {
    return {
      name: "",
      isShow: 0,
      xuanx: [
        "热门",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "X",
        "Y",
        "Z",
        "其他",
      ],
      arr: [],
      arr2: [],
    };
  },
  activated() {
    this.isShow = 0;
  },
  methods: {
    fn(id, name, img, name3) {

      let name2 = "";
      if (name3 != 0) {
        name2 = name3[0];
      }
      this.$router.push({
        path: "/home/geshouxq",
        query: {
          id,
          name,
          img,
          name2,
        },
      });
    },
    fna(item, index) {
      if (item == "热门") {
        item = -1;
      } else if (item == "其他") {
        item = 0;
      } else {
        item = item.toLowerCase();
      }

      xqgs2(this.$route.query.type, this.$route.query.area, item).then(
        (res) => {
          this.arr = res.artists.splice(0, 16);
          this.arr2 = res.artists;
          this.isShow = index;
        }
      );
    },
  },
  created() {
    this.nameg;
    xqgs1(this.$route.query.type, this.$route.query.area).then((res) => {
      this.arr = res.artists.splice(0, 16);
      this.arr2 = res.artists;
    });
  },
  computed: {
    rot() {
      return this.$route.query.name + this.$route.query.type;
    },
    nameg() {
      if (this.$route.query.type == 1) {
        this.name = this.$route.query.name + "男歌手";
      } else if (this.$route.query.type == 2) {
        this.name = this.$route.query.name + "女歌手";
      } else {
        this.name = this.$route.query.name + "组合/乐队";
      }
    },
  },
  watch: {
    //当分类改变后
    rot() {
      if (this.$route.query.area == undefined) {
      } else {
        console.log(this.$route.query.name == "undefined");
        this.nameg;
        xqgs1(this.$route.query.type, this.$route.query.area).then((res) => {
          this.arr = res.artists.splice(0, 16);
          this.arr2 = res.artists;
        });
      }
    },
  },
};
</script>

<style scoped>
.ges {
  flex-wrap: wrap;
  display: flex;
  margin-top: 20px;
  justify-content: center;
}

.rm {
  background: #c20c0c;
  padding: 1px 5px;
  color: #fff;
}
.rm:hover {
  cursor: pointer;
  text-decoration: underline;
}
.xq {
  padding: 40px;
}
.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.yw {
  /* width: 3.5%; */
  cursor: pointer;
  text-align: center;
  font-size: 0.078125rem;
}
.yw:hover {
  text-decoration: underline;
}
.yw:nth-child(1),
.yw:last-child {
  font-size: 0.052083rem;
}

.aaa {
  overflow: hidden;
  width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.name {
  display: flex;
  margin-top: 10px;
  border-top: 1px dotted #999;
  padding-top: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.namea {
  margin: 0px 2px;
  height: 30px;
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.namea:hover {
  text-decoration: underline;
}
.tb {
  background-image: url(~assets/img/精灵图4.png);
  width: 17px;
  height: 18px;
  background-position: 0 -740px;
}
</style>