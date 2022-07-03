<template>
  <div class="gedan" v-if='Object.keys(songSheet).length!=0' @click="fn()">
    <a href="">
      <img :src="songSheet.coverImgUrl" alt="">
      <a class="alj" href="JavaScript:;"></a>
      <div class="bam">
        <span></span><span>{{fh}}</span><span></span><span></span>
      </div>
    </a>
    <div class="an">
      {{songSheet.name}}
    </div>
    <div class="an2"><div>by</div>{{songSheet.creator.nickname}}</div>
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
    return this.songSheet.playCount>10000?(this.songSheet.playCount/10000).toFixed(2)+"万":this.songSheet.playCount
  }
},
methods:{
  fn(){

    this.$router.push({
      path:'/home/gedanxq',
      query:{
        id:this.songSheet.id
      }
    })
  }
}
}
</script>

<style scoped>
.an2{
  font-size: .052083rem;
  color: #666;
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.an2 div{
  display: inline-block;
  margin-right: 5px;
}
img{
  width: 100%;
  height: 100%;
}
a{
 width: 100%;
 height: 140px;
 color: #fff;
 text-decoration: none;
 font-size: .050447rem;
  position: relative;
  display: block;
}
.alj{
      background-position: 0 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(~assets/img/精灵图3.png);
}
.gedan{
  margin: 25px 3%;
  max-width: 178px;
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
  font-size: .063058rem;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>