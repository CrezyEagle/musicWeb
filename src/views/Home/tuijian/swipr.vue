<template>
<!-- 顶部轮播图 -->
  <div class="swiper-container" v-if="arr.length !== 0">

    <div class="swiper-wrapper" ref="swp">
      <!-- <div class="swiper-slide">
        <img src="~assets/img/nature-3.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="~assets/img/nature-3.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="~assets/img/nature-3.jpg" alt="" />
      </div> -->
      <div class="swiper-slide" v-for="(item, index) in arr" :key="index">
        <img :src="item.pic" alt="" />
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <div class="swiper-button-next"></div>
    <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import swipersj from "network/home/index.js";
// import "assets/js/swiper.min.js";
export default {
  data() {
    return {
      arr: [],
      sj: 0,
      nm: null,
      jis: 1,
      aa:null
    };
  },
  deactivated() {
    console.log(12);
    clearInterval(this.aa)
  },
  created() {
    this.network();
  },
  computed: {
    tp() {
      return this.arr[this.sj].pic;
    },
  },
  watch: {
    arr: function (a, b) {
     
      setTimeout(() => {
        this.aaa();
       this.aa= setInterval(() => {
          this.nm = this.$refs.swp.style.transform;
    
        }, 200);
      }, 200);
    },
    nm: function (a, b) {
      if (this.jis !== 1) {
        this.sj++;
      }
      this.jis = 2;
    },
  },

  methods: {
    network() {
      //请求轮播图数据
      swipersj()
        .then((res) => {
          this.arr = res.data.blocks[0].extInfo.banners;
          // console.log(this.arr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    aaa() {
      console.log("lbt");

      new Swiper(".swiper-container", {
        speed:800,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },
  },
};
</script>

<style scoped>
@import "~assets/css/swiper.min.css";
.swiper-pagination{
  bottom: 5px;
}
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .073568rem;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  --swiper-theme-color: #fff; /* 设置Swiper风格 */
  --swiper-navigation-color: #fff; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
.swiper-container {
  width: 100%;

  background-position: center center;
  /* background-image: url(~assets/img/nature-3.jpg); */
   background-color: rgba(0, 0, 0, 0.158);
  background-size: 6000px;
  padding: 20px 0px;
  height: 300px;
}
img {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  cursor: pointer;
  font-size: .094587rem;
  background: #fff;
  /* height: 100%; */
  width: 780px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}

</style> 