<template>
  <div class="bot">
    <div class="xq">
      <div class="aaa">
        <div class="ys">
          <span>服务条款</span>
          <span>|</span>
          <span>隐私政策</span>
          <span>|</span>
          <span>儿童隐私政策</span>
          <span>|</span>
          <span>版权投诉指引</span>
          <span>|</span>
          <span>意见反馈</span>
          <span>|</span>
        </div>
        <div class="ys1">
          <span>网易公司版权所有©1997-2021</span>
          <span>杭州乐读科技有限公司运营：</span>
          <span>浙网文[2021] 1186-054号</span>
        </div>
        <div class="ys1">
          <span>违法和不良信息举报电话：0571-89853516</span>
          <span>举报邮箱：</span>
          <span>ncm5990@163.com</span>
        </div>
        <div class="xqs">
          <span>粤B2-20090191-18 工业和信息化部备案管理系统网站</span>
          <span class="gs"></span>
          <span>浙公网安备 33010902002564号</span>
        </div>
      </div>
      <div class="tp">
        <div class="imga">
          <div class="imnga"></div>
          <div class="nameimg"></div>
        </div>
        <div class="imga">
          <div class="imnga"></div>
          <div class="nameimg"></div>
        </div>
        <div class="imga">
          <div class="imnga"></div>
          <div class="nameimg"></div>
        </div>
        <div class="imga">
          <div class="imnga"></div>
          <div class="nameimg"></div>
        </div>
        <div class="imga">
          <div class="imnga"></div>
          <div class="nameimg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aaa {
  width: 50%;
}
.imga {
  margin: 0 3px;
}
.nameimg {
  background-position: 0 -108px;
  margin-left: -6px;
  width: 72px;

  margin: 5px 5px 0;
  width: 61px;
  height: 14px;
  background-size: 180px 139px;
  background-image: url(~assets/img/精灵图11.png);
}
.tp {
  display: flex;
  width: 50%;

  flex-wrap: wrap;
  justify-content: space-around;
}

.imnga {
  display: block;
  float: none;
  width: 47px;
  height: 45px;
  margin: 0 auto;
  background-position: -63px -456.5px;
  background-size: 110px 552px;
  background-image: url(~assets/img/精灵图10.png);
}
.imga:nth-child(2) .imnga {
  background-position: -63px -101px;
}
.imga:nth-child(3) .imnga {
  background-position: 0px 0px;
}
.imga:nth-child(4) .imnga {
  background-position: -62px -50px;
}
.imga:nth-child(5) .imnga {
  background-position: 0 -101px;
}
.imga:nth-child(2) .nameimg {
  background-position: -1px -91px;
  width: 52px;
  margin-left: 10px;
}
.imga:nth-child(3) .nameimg {
  background-position: 0px 0px;
  width: 52px;
  margin-left: 10px;
}
.imga:nth-child(4) .nameimg {
  background-position: 0 -54px;
  width: 52px;
  margin-left: 10px;
}
.imga:nth-child(5) .nameimg {
  background-position: -1px -72px;
  width: 52px;
  margin-left: 10px;
}

.xqs {
  display: flex;
  align-items: center;
}
.xqs span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gs {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  background-image: url(~assets/img/公安.png);
}
.ys1 {
  margin-bottom: 5px;
  display: flex;
}
.ys1 span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.xq {
  width: 56%;
  font-size: 0.0625rem;
  color: #666;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.bot {
  border: 1px solid #d3d3d3;
  padding-bottom: 60px;
  background-color: #f2f2f2;
  position: relative;
  bottom: 0;
  width: 100%;
}
.ys {
  display: flex;
  align-items: center;
  color: #999999;
  margin-bottom: 5px;
}
.ys span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ys span:nth-child(even) {
  display: inline-block;
  margin: 0 10px;
}
</style>