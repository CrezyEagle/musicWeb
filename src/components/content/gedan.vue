<template>
  <div class="gedan" v-if='Object.keys(songSheet).length!=0'>
    <a href="">
      <img :src="songSheet.uiElement.image.imageUrl" alt="">
      <div class="bam">
        <span></span><span>{{fh}}</span><span></span><span></span>
      </div>
    </a>
    <div class="an">
      {{songSheet.uiElement.mainTitle.title}}
    </div>
  </div>
</template>

<script>
export default {
props:{
  songSheet:{
    type:Object,
    default(){
      return {}
    }
  }
},
computed:{
  fh(){
    return this.songSheet.resources[0].resourceExtInfo.playCount>10000?(this.songSheet.resources[0].resourceExtInfo.playCount/10000).toFixed(2)+"万":this.songSheet.resources[0].resourceExtInfo.playCount
  }
}
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
a{
  width: 100%;
 height: 100%;
 color: #fff;
 text-decoration: none;
 font-size: 0.6rem;
  position: relative;
  display: block;
}
.gedan{
  margin: 20px 1%;
}
.bam{
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.705);
  height: 27px;
  display: flex;
align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.527);
  position: absolute;
  bottom: 0;
}
span:nth-child(1){
  margin-left: 10px;
  background: url(~assets/img/精灵图2.png) no-repeat;
  width: 14px;
  height: 11px;
      background-position: 0 -24px;
      margin-right: 5px;
}
span:nth-child(3){
  flex: 1;
}
span:nth-child(4){
  background: url(~assets/img/精灵图2.png) no-repeat;
    width: 16px;
  height: 17px;
  margin-right: 10px;
      background-position: 0 0;
}
.an{
  font-size: 0.9rem;
}
</style>