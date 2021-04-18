<template>
<!-- 新碟推荐 -->
  <div class="plate-w" >
    <navbar name="新碟上架"></navbar>
    <!-- <div class="tbr">
       <conplate
          class="swiper-slide"
          v-for="(item, index) in arr"
          :key="index"
          :weekData="item"
        ></conplate>
    </div> -->
    <div class="swiper-container1 ">
      <div class="swiper-wrapper">
        <conplate
          class="swiper-slide"
          v-for="(item, index) in arr"
          :key="index"
          :weekData="item"
        ></conplate>
      </div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "components/content/navbar.vue";
import Conplate from "../../../components/content/conplate.vue";
import weekData from "network/home/gedan/index.js";
import Swiper from "swiper";
export default {
  data() {
    return {
      arr: [],
      swiper: null,
    };
  },
  components: {
    Navbar,
    Conplate,
  },
  mounted() {
    this.axiosp();
  },
  computed: {
    wc() {
      return this.arr;
    },
    wc2(){
      return this.swiper
    }
  },
  watch: {
    wc: function () {
      setTimeout(()=>{
        this.swipa();
      },200)
    },
    wc2:function(){
      this.swiper.update();	
    }
  },
  methods: {
    //数据请求
    axiosp() {
      weekData()
        .then((res) => {
          this.arr = res.weekData;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    swipa() {
      new Swiper('.swiper-container1', {
	  loop: true,
	  speed: 2500,
      slidesPerView: 7,
      spaceBetween: 30,
	  centeredSlides : true,
	  watchSlidesProgress : true,
	  on: {
	    setTranslate: function(){
		var	slides = this.slides
			for(let i=0; i< slides.length; i++){
			var	slide = slides.eq(i)
		var		progress = slides[i].progress
				//slide.html(progress.toFixed(2)); 看清楚progress是怎么变化的
				    slide.css({'opacity': '','background': ''});slide.transform('');//清除样式
					
					if(effect == 1){
					    slide.transform('scale('+(1 - Math.abs(progress)/8)+')');  
					}else if(effect == 2){
						slide.css('opacity',(1-Math.abs(progress)/6));
					    slide.transform('translate3d(0,'+ Math.abs(progress)*20+'px, 0)');  
					}
					else if(effect == 3){
					    slide.transform('rotate('+ progress*30+'deg)');  
					}else if(effect == 4){
						slide.css('background','rgba('+ (255 - Math.abs(progress)*20) +','+ (127 + progress*32) +',' + Math.abs(progress)*64 + ')');
					}
					
				}	
		},
		setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}
		},
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
    });

	   var effect = 0
    },
  },
};
</script>

<style scoped>
@import "~assets/css/swiper.min.css";
.plate-w {
  margin: 0px auto;
  width: 100%;
}
.tbr {
  width: 100%;
  display: flex;
  align-items: center;
  height: 200px;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .073568rem;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-pagination{
  bottom: 0px;
}
.swiper-container1 {
  width: 80%;
  height: 80%;
  position: relative;
  height: auto;
  padding: 30px 10px;
  border: 1px solid #D3D3D3;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  overflow: hidden;
  background-color: #F5F5F5;
}
.swiper-wrapper{
  left: 0;
  margin: 0px auto;
}
.swiper-slide {
  text-align: center;
  font-size: .094587rem;
  background: #fff;
  height: 100px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  /* display: -webkit-flex; */
  /* display: flex; */
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 100px;
  transition-property: all;
}
#progressEffect {
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
}
</style>