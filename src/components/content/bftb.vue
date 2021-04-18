<template>
  <div class="tb">
    <span
      ><div @click="fna()">
        <div class="ii"></div>
        播放
      </div></span
    >
    <span></span>
    <slot name="sc"><span><div>收藏</div></span></slot>
    <span
      ><div>{{fxa}}</div></span
    >
    <span><div>下载</div></span>
    <span
      ><div>{{ pla }}</div></span
    >
  </div>
</template>

<script>
export default {
   props: {
    fx: {
      type: Number,
      ddefault:0
    },
    pl: {
      type: Number,
      ddefault:0
    },
  },
  computed:{
    fxa(){
      return this.fx!=0?this.fx:''
    },
    pla(){
      return this.pl!=0?this.pl:''
    }
  },
  methods:{
    fna(){
      this.$emit('bfa')
    }
  }
};
</script>

<style scoped>
.tb {
  display: flex;
  align-items: center;
}
.tb span {
  display: inline-block;
}
.tb span > div {
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
.tb span:nth-child(2) {
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
.tb span:nth-child(3) {
  background-position: right -1020px;
  background-image: url(~assets/img/精灵图5.png);
  padding: 0 5px 0 0;
  margin-right: 10px;
}
.tb span:nth-child(3) > div {
  background-position: 0 -1225px;
  background-image: url(~assets/img/精灵图5.png);
  padding-right: 2px;
  padding-left: 28px;
}
.tb span:nth-child(4) {
  background-position: right -1020px;
  background-image: url(~assets/img/精灵图5.png);
  padding: 0 5px 0 0;
}
.tb span:nth-child(4) > div {
  background-position: 0 -1225px;
  background-image: url(~assets/img/精灵图5.png);
  padding-right: 2px;
  padding-left: 28px;
}
.tb span:nth-child(5) {
  margin-left: 10px;
  background-position: right -1020px;
  background-image: url(~assets/img/精灵图5.png);
  padding: 0 5px 0 0;
}
.tb span:nth-child(5) > div {
  background-position: 0 -2761px;

  background-image: url(~assets/img/精灵图5.png);
  padding-right: 2px;
  padding-left: 28px;
}
.tb span:nth-child(6) {
  margin-left: 10px;
  background-position: right -1020px;
  background-image: url(~assets/img/精灵图5.png);
  padding: 0 5px 0 0;
}
.tb span:nth-child(6) > div {
  background-position: 0 -1465px;

  background-image: url(~assets/img/精灵图5.png);
  padding-right: 2px;
  padding-left: 28px;
}
.ii {
  float: left;
  width: 20px;
  height: 18px;
  margin: 6px 2px 2px 0;
  background-position: 0 -1622px;
  overflow: hidden;
  background-image: url(~assets/img/精灵图5.png);
}
</style>