<template>
  <div class="tobbartow">
    <div class="ac">
      <div
        class="yuanq"
        v-for="(item, index) in arr"
        :key="index"
        :class="{ activ: index == isShow }"
        @click="fn(index, item.routera)"
      >
        <a href="JavaScript:;">{{ item.name }}</a>
      </div>
      <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "推荐",
          routera: "/home/tuijian",
        },
        {
          name: "排行",
          routera: "/home/paihang",
        },
        {
          name: "歌单",
          routera: "/home/gedan",
        },
        {
          name: "主播电台",
          routera: "/home/diantai",
        },
        {
          name: "歌手",
          routera: "/home/geshou",
        },
        {
          name: "新碟上架",
          routera: "/home/xindie",
        },
      ],
      isShow: 0,
      js:1,
    };
  },
  activated(){
    this.route
    console.log("刷新页面");
  },
  watch:{
    hrefa(){
      this.js=1
      this.route
      if(this.js!=2){
        this.isShow=-1
              }
    }
  },
  computed: {
    hrefa(){
      return this.$route.href
    },
    route() {
      this.arr.forEach((element, index) => {
        if (element.routera.substring(0, 9) == this.$route.href.substring(0, 9)) {
        this.js=2

         this.isShow= index;
        }
        // if('/home/diantai/fl' == this.$route.href){
        //   this.isShow=3
        // }
      });
    },
  },

  methods: {
    fn(index, rot) {
      this.$router.push({
        path: rot,
      });
      this.isShow = index;
      this.$router.push(this.arr[index].routera);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
.tobbartow {
  display: flex;
  top: 70px;
  width: 100%;
  background-color: #c20c0c;
  display: flex;
  font-size: 0.050447rem;
  color: #fff;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 35px;
}
.ac {
  width: 600px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.activ {
  background-color: #9b0909;
  border-radius: 20px;
}
.yuanq {
  display: flex;
  align-items: center;
  margin: 5px 20px;
  padding: 2px 15px;
}
</style>