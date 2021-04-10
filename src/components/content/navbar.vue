<template>
   <div class="tob">
      <div class="rm">{{name}}</div>
      <div class="fle">
        <span v-for="(item,index) in arr" :key="index" class="sp">{{item}}</span>
      </div>
      <div class="zw"></div>
      <div class="gd">更多</div>
    </div> 
</template>

<script>
export default {
props:{
  arr:{
    type:Array,
    default(){
      return []
    }
  },
  name:{
    type:String,
    default(){
      return ''
    }
  }
}
}
</script>

<style scoped>
.tob{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  height: 35px;
  color: #666666;
  text-align: center;
  border-bottom: 2px solid red;
}
.rm{
  margin-right: 5px;
  font-size: 1.5rem;
  padding-left: 25px;
  margin-left: 10px;
  background: url(~assets/img/精灵图1.png) no-repeat;
      background-position: -233px -156px;
}
.sp{
  padding-right: 20px;
  padding-left: 20px;
  color: #adadad;
  font-size: 0.8rem;
  border-right: 2px solid #acabab;
}
.sp:nth-child(5){
  border: 0;
}
.zw{
  flex: 1;
}
.gd{
  padding-right: 20px;
  background: url(~assets/img/精灵图1.png) no-repeat;
  background-position: 33px -237px;
  font-size: 0.8rem;
}

</style>