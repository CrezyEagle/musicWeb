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
        {{ item.name }}
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
          routera: "/home/zhutai",
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
    };
  },
  methods: {
    fn(index, rot) {
      this.$router.push({
        path: rot,
      });
      this.isShow = index;
      this.$router.push(this.arr[index].routera);
      console.log(rot);
    },
  },
};
</script>

<style scoped>
/* @media screen and (min-width: 1400px){
 
    .yuanq{
      font-size: 0.5rem;
    }
}
@media screen and (min-width: 1600px){

    .yuanq{
      font-size:0.8rem;
    }
} */
.tobbartow {
  display: flex;
  top: 70px;
  width: 100%;
  background-color: #c20c0c;
  display: flex;
  font-size: 0.6rem;
  color: #fff;
  justify-content: center;
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