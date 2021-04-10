<template>
  <div class="xq" v-if="Object.keys($props.gedanxq).length != 0">
    <div class="hd">
      <div class="timg"><img :src="gedanxq.imga" alt="" /> <span class="imgsp"></span></div>
      <div class="wz">
        <div class="name">{{ gedanxq.name }}</div>
        <div class="sj">
          <span class="bb"></span>最近更新：{{ sj }}（{{
            gedanxq.updateFrequency
          }}）
        </div>
        <div class="tb">
          <span><div><div class="ii"> </div>播放</div></span>
          <span></span>
          <span><div>{{ gedanxq.shareCount }}</div></span>
          <span><div>下载</div></span>
          <span><div>{{ gedanxq.commentCount }}</div></span>
        </div>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="gqlb">
      <div>歌曲列表</div>
      <div>{{gedanxq.tracks.length}}首歌</div>
      <div>播放：<span>{{gedanxq.playCount}}</span>次</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    //时间格式化
    sj() {
      var c = this.gedanxq.sj;
      var date = new Date(c);
      var yue = "";
      var ri = "";
      if (date.getMonth() + 1 < 10) {
        yue = "0" + (date.getMonth() + 1);
      } else {
        yue = date.getMonth() + 1;
      }
      if (date.getDate() < 10) {
        ri = "0" + date.getDate();
      } else {
        ri = date.getDate();
      }
      return yue + "月" + ri + "日";
    },
  },
  props: {
    gedanxq: {
      type: Object,
      ddefault() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.gqlb{
  margin-top: 40px;
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;
  border-bottom: 2px solid #C20C0C;
  align-items: center;
  width: 100%;
}
.gqlb div:nth-child(1){
  font-size: 1.2rem;
}
.gqlb div:nth-child(2){
  flex: 1;
  margin-left: 20px;
  font-size: 0.8rem;
  color: #666666;
}
.gqlb div:nth-child(3){

  margin-left: 20px;
  font-size: 0.9rem;
  color: #666666;
}
.gqlb div:nth-child(3) span{
 

  font-size: 0.89em;
  color: #C20C0C;
}
.bb {
  width: 13px;
  height: 13px;
  display: inline-block;
  background-image: url(~assets/img/精灵图4.png);
  background-position: -18px -682px;
  margin-right: 5px;
}
.xq {
  padding: 30px 30px;
  box-sizing: border-box;
}
.timg{
  position: relative;
}
img {
  width: 150px;
  height: 150px;
  background-position: -230px -380px;
}
.imgsp{
  width: 150px;
    height: 150px;
    background-position: -230px -380px;
    top: 0px;
          background-image: url(~assets/img/精灵图3.png);
    position: absolute;
    left: 0px;
}
.hd {
  width: 100%;
  display: flex;
}
.wz {
  margin-left: 20px;
}
.name {
  font-size: 1.4rem;
  margin: 10px 0px;
}.ii{
  float: left;
    width: 20px;
    height: 18px;
    margin: 6px 2px 2px 0;
    background-position: 0 -1622px;
    overflow: hidden;
      background-image: url(~assets/img/精灵图5.png);
}
.sj {
  font-size: 0.8rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  color: #666666;
}
.tb{
  display: flex;
    align-items: center;
}
.tb span {
  display: inline-block;

}
.tb span>div{
     background-position: 0 -387px;
  background-image: url(~assets/img/精灵图5.png);
    padding: 0 7px 0 8px;

    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
  display: inline-block;
}
.tb span:nth-child(1) {
  /* width: 200px; */
 background-position: right -428px;
 background-image: url(~assets/img/精灵图5.png);
}
.tb span:nth-child(2){
      margin-right: 5px;
          width: 31px;
    margin-left: -3px;
    padding-right: 0;
     background-image: url(~assets/img/精灵图5.png);
         padding: 0 5px 0 0;
        
    height: 31px;
    line-height: 30px;
    min-width: 23px;
    cursor: pointer;
    background-position: 0 -1588px;
}
.tb span:nth-child(3){
      background-position: right -1020px;
       background-image: url(~assets/img/精灵图5.png);
           padding: 0 5px 0 0;
}
.tb span:nth-child(3)>div{
  background-position: 0 -1225px;
      background-image: url(~assets/img/精灵图5.png);
          padding-right: 2px;
    padding-left: 28px;
}
.tb span:nth-child(4){
  margin-left: 10px;
      background-position: right -1020px;
       background-image: url(~assets/img/精灵图5.png);
           padding: 0 5px 0 0;
}
.tb span:nth-child(4)>div{
     background-position: 0 -2761px;

      background-image: url(~assets/img/精灵图5.png);
          padding-right: 2px;
    padding-left: 28px;
}
.tb span:nth-child(5){
  margin-left: 10px;
      background-position: right -1020px;
       background-image: url(~assets/img/精灵图5.png);
           padding: 0 5px 0 0;
}
.tb span:nth-child(5)>div{
       background-position: 0 -1465px;

      background-image: url(~assets/img/精灵图5.png);
          padding-right: 2px;
    padding-left: 28px;
}
</style>