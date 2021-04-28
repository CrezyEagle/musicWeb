<template>
  <div class="top">
    <navbar :name="name">
      <template v-slot:anniu>
        <div class="ann" @click="fn2()">选择分类<span></span></div>
      </template>
      <template v-slot:gduo>
        <div class="rmaa">热门</div>
      </template>
    </navbar>
    <!-- 全部风格 -->
    <div class="xs " v-if="isShow">
      <div class="svg"></div>
      <div class="topa" @click="mr()"><div>全部风格</div></div>
      <div >
        <div v-for="(item, index) in arr" :key="index" class="arr1">
          <div class="nm">
            <span class="nm11"></span><span class="nm12">{{ item }}</span>
          </div>
          <div class="xqq">
            <div
              v-for="(item2, index2) in arr2(index)"
              :key="index2"
              @click="fn(item2.name)"
            >
              {{ item2.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "components/content/navbar.vue";
import fenl from "network/home/tobgedan/fenlname.js";
export default {
  data() {
    return {
      arr: [],
      arri: [],
      isShow: false,
    };
  },
  methods: {
    //点击全部风格，请求全部风格
    mr(){
      this.$emit("mr", '默认');
      this.isShow = false;
    },
    //匹配相应的分类
    arr2(index) {
      let a = this.arri.filter((n) => {
        return n.category == index;
      });
      return a;
    },
    //改变页面歌单内容
    fn(name) {
      console.log(name);
      this.$emit("namez", name);
      this.isShow = false;
    },
    //显示隐藏
    fn2() {
      this.isShow = !this.isShow;
    },
  },
  props: {
    name: {
      type: String,
      default() {
        return "全部";
      },
    },
  },
  components: { navbar },
  mounted() {
    fenl().then((res) => {
      this.arr = res.categories;
      this.arri = res.sub;
    });
  },
};
</script>

<style scoped>
.rmaa {
  width: 70px;
  height: 27px;
  line-height: 27px;
  background-color: #f9f9f9;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  color: #000;
  margin-right: 20px;
}
.nm {
  width: 70px;
  height: 100%;
  text-align: center;
  color: #333;
  font-weight: 600;
  padding-left: 20px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  font-size: 0.078125rem;
}

.nm12 {
  height: 30px;
  line-height: 30px;
}
.nm11 {
  display: inline-block;
  height: 25px;
  width: 30px;
  background-image: url(~assets/img/精灵图4.png);
}
.arr1:nth-child(1) .nm11 {
  background-position: -20px -735px;
}
.arr1:nth-child(2) .nm11 {
  background-position: 0 -60px;
}
.arr1:nth-child(3) .nm11 {
  background-position: 0 -88px;
}
.arr1:nth-child(4) .nm11 {
  background-position: 0 -117px;
}
.arr1:nth-child(5) .nm11 {
  background-position: 0 -141px;
}
.arr1 {
  width: 100%;
  display: flex;
}

.xqq {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  border-left: 1px solid #d3d3d3;
  padding-bottom: 20px;
}
.xqq div:hover{
  text-decoration: underline;
}
.xqq div {
  padding-right: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 0.072917rem;
  color: #333;
  padding-left: 15px;
  border-right: 1px solid #d3d3d3;
}

.topa {
  width: 100%;
  height: 45px;

  display: flex;
  padding: 10px 0;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  margin-bottom: 20px;
}
.topa div {
  cursor: pointer;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 7px;
  border: 1px solid #d3d3d3;
  margin-left: 20px;

  background-color: rgba(248, 248, 248, 0.849);
}
.topa div:hover {
  text-decoration: underline;
}
.svg {
  position: absolute;
  top: -11px;
  left: 132px;
  display: inline-block;
  width: 24px;
  height: 11px;
  background-position: -48px 0;
  vertical-align: middle;
  background-image: url(~assets/img/精灵图2.png);
}

.xs {
  margin-top: 20px;
  margin-left: 10px;
  position: absolute;
  z-index: 10;
  border-radius: 5px;
  background-color: #fff;
  width: 75%;

  box-shadow: 0px 0px 10px 0px rgb(206, 206, 206);
}
.top {
  padding-top: 30px;
    position: relative;
}
.top {
  width: 100%;
}
.ann {
  width: 100px;
  cursor: pointer;
  height: 25px;
  display: flex;
  margin-left: 20px;
  justify-content: center;
  font-size: 0.083333rem;
  color: #0c73c2;
  border: 1px solid #d3d3d3;
  align-items: center;
  background-color: rgba(248, 248, 248, 0.849);
  border-radius: 5px;
}
.ann span {
  float: right;
  margin-left: 5px;
  width: 8px;
  height: 5px;
  background-position: -70px -543px;
  background-image: url(~assets/img/精灵图4.png);
}
.ann:hover {
  background-color: #e0e0e075;
}
</style>