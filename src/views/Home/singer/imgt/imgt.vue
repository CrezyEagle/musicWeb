<template>
  <!-- 歌手图片封装 -->
  <div class="imgt" v-if="Object.keys(obj).length != 0" @click="fn()">
    <div class="imga"><img :src='obj.img1v1Url' alt="">
    <a href="JavaScript:;"></a>
    </div>
    <div class="name">
      <div class="nm">{{obj.name}}</div>
      <div class="d"></div>
    </div>
  </div>
</template>

<script>
export default {
props:{
  obj:{
    typeof:Object,
    default(){
      return {}
    }
  }
},
  computed:{
rot(){
  return this.$route.href
}
  },
  watch:{
    rot(){
this.jz()
    }
  },
mounted() {
this.jz()
},
methods: {
  fn(){
    console.log(111);
    let name2=''
    if(this.obj.alias.length!=0){
      name2=this.obj.alias[0]
    }
    this.$router.push({
      path:'/home/geshouxq',
      query:{
        id:this.obj.id,
        name:this.obj.name,
        img:this.obj.picUrl,
        name2
      }
    })
  },
  jz(){
         var num = document.getElementsByTagName('img').length;
        var img = document.getElementsByTagName("img");
        // 存储图片加载到的位置，避免每次都从第一张图片开始遍历
        var n = 0;
        // 页面载入完毕加载可视区域内的图片
        lazyload();                                
        window.onscroll = lazyload;
        // 监听页面滚动事件
        function lazyload() {
            // 可见区域高度
            var seeHeight = document.documentElement.clientHeight;
            // 滚动条距离顶部高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            for (var i = n; i < num; i++) {
                if (img[i].offsetTop < seeHeight + scrollTop) {
                    if (img[i].getAttribute("src") == "default.jpg") {
                        img[i].src = img[i].getAttribute("data-src");
                    }
                    n = i + 1;
                }
            }
        }
  }
},
}

</script>

<style scoped>
.nm{
  overflow: hidden;
  width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.imgt{
  margin: 10px;
  width: 130px;
}
.imga{
  width: 130px;
  position: relative;
  height: 130px;
}
img{
  width: 100%;
  height: 100%;
}
a{
  position: absolute;
  width: 100%;
  height: 100%;
    background-image: url(~assets/img/精灵图3.png);
  background-position: 0 -680px;
  top: 0;
  left: 0;
}
.name{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.name:hover{
  text-decoration: underline;
  cursor: pointer;
}
.d{
  background-image: url(~assets/img/精灵图4.png);
      width: 17px;
    height: 18px;
  background-position: 0 -740px;
}
</style>