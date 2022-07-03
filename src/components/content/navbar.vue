<template>
   <div class="tob">
      <div class="rm" @click="fn()">{{name}}</div>
      <div class="fle">
        <span v-for="(item,index) in arr" :key="index" class="sp" @click="fna(item)">{{item}}</span>
        <slot name='anniu'><div></div></slot>
      </div>
      <div class="zw"></div>
      <slot name="gduo"><div class="gd" @click="fn()">更多</div></slot>
    </div> 
</template>

<script>
export default {
  methods:{
    fn(){
      if(this.routera!=""){
        this.$router.push({
          path:this.routera
        })
      }
    },
    fna(name){
      this.$emit('namea',name)
      console.log(name);
    }
  },
props:{
  arr:{
    type:Array,
    default(){
      return []
    }
  },
  name:{
    type:String,
    default:''
  },

  routera:{
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
  font-size: .099842rem;
  padding-left: 25px;
  margin-left: 10px;
  background: url(~assets/img/精灵图1.png) no-repeat;
      background-position: -233px -156px;
}

.sp{
  padding-right: 20px;
  padding-left: 20px;
  color: #adadad;
  cursor: pointer;
  font-size: .067262rem;
  border-right: 2px solid #acabab;
}
.sp:hover{
  text-decoration: underline;
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
  font-size: .066211rem;
  cursor: pointer;
}
.gd:hover{
  text-decoration: underline;
}

</style>