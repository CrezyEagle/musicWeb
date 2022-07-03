<template>
  <div class="tobimg">
    <slot name="imga">
      <div class="imgdiv"><img :src="imgurl" alt=""></div>
    </slot>
    <div class="youm">
      <div class="top">
        <slot name="xq"><div class="xq"></div></slot>
        <div class="name">{{name}}</div>
      </div>
      <slot name="zz">
        <div class="zz">
          <img :src="zzurl" alt="">
          <span class="zznam">{{zzname}}</span>
          <span v-if="sja!=0" class="sj">{{sj}}</span>
        </div>
      </slot>
      <bftb class="bf" :sc="sc" :lx='lx' @sca='sca' @sjsx='sjsx' :fxname='name' :id="id" :subscribed='subscribed' :fx="fx" :pl="pl" @bfa="bfa"></bftb>
      <slot name="xq2">
        <div class="xq2">
          标签：<span class="bp" v-for="(item,index) in tags " :key="index">{{item}}</span>
        </div>
        <div class="js">
          介绍：{{description}}
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import bftb from './bftb.vue';
export default {
  methods:{
    sjsx(){
      this.$emit('sjsx')
    },
    sca(sc){
      this.$emit('sca',sc)
    },
    bfa(){
      this.$emit('bfa1')
    }
  },
  components: { bftb },
  computed:{
    sj(){
      var date = new Date(this.sja);
      return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+'创建'
    }
  },
props:{
  //图片
  imgurl:{
    typeof:String,
    default:''
  },
  //歌单名
  name:{
    typeof:String,
    default:''
  },
  //作者图片
    zzurl:{
    typeof:String,
    default:''
  },
  //是否收藏
  subscribed:{
    typeof:Boolean,
    default:false
  },
  //作者名
      zzname:{
    typeof:String,
    default:''
  },
  //创建时间
     sja:{
    typeof:Number,
    default:0
  },
   //id
     id:{
    typeof:Number,
    default:0
  },
  //当前类型
     lx:{
    typeof:Number,
    default:0
  },
  //歌单收藏数量
    sc:{
    typeof:String,
    default:'收藏'
  },
  //歌单分享数量
    fx: {
      type: Number,
      default:0
    },
    //歌单评论数量
    pl: {
      type: Number,
      default:0
    },
    //歌单标签
    tags:{
      type:Array,
      default(){
        return []
      }
    },
    //歌单介绍
        description:{
    typeof:String,
    default:''
  },
}
}
</script>

<style scoped>
.js{
    color: #777;
    font-size: .046875rem;
    margin-top: 10px;
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
}

.bp{
  display: block;
     padding: 0 13px 0 13px;
     border: 1px solid #D6D6D6;
     border-radius: 10px;
     margin-right: 5px;
     background-color: #f1f1f1d3;
     display: flex;
     justify-content: center;
     align-items: center;
}
.xq2{
  display: flex;
  margin-top: 20px;
  font-size: .046875rem;
  color: #777;
  align-items: center;
}
.sj{
  margin-left: 10px;
      color: #999;
          overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.tobimg{
 width: 100%;
  display: flex;

}
.imgdiv{
  width: 200px;
  padding: 3px;
  border: 1px solid #DBDBDB;
  height: 200px;

}
img{
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
   border: 1px solid #DBDBDB;
}
.top{
  display: flex;
  align-items: center;
}
.bf{
  margin-top: 20px;
}
.xq{
      width: 54px;
    height: 24px;
    background-position: 0 -243px;
    background-image: url(~assets/img/精灵图4.png);
}
.youm{
  margin-left: 40px;
  width:65%;

}
.name{
  font-size: .104167rem;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  margin-left: 10px;
}
.zz{
  display: flex;
  margin-top: 10px;
  align-items: center;
}
.zz img{
  width: 35px;
  height: 35px;
}
.zznam{
     color: #0c73c2;
     display: block;
     margin-left: 10px;
}
</style>