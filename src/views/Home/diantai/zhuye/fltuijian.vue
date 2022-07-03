<template>
  <!-- 分类推荐 -->
  <div class="fl" v-if="arr.length != 0">
    <navbar :name="name+'·电台'" @click="fn2(arr[0].categoryId)"></navbar>
    <div class="fla">
      <div
        class="xq"
        v-for="(item, index) in arr"
        :key="index"
        @click="fn(item.id)"
      >
        <div class="nm"><img :src="item.picUrl" alt="" /></div>
        <div class="zm">
          <div class="name">{{ item.name }}</div>
          <div>{{ item.rcmdtext }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from 'components/content/navbar.vue'
export default {
  components: { navbar },
  props:{
    name:{
      typeof:String,
      default:''
    },
     arr:{
      typeof:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    fn(id){
      this.$router.push({
        path:"/home/diantaixq",
        query:{
          id:id
        }
    })
  },
    fn2(id){
      this.$router.push({
        path:"/home/diantai/fl",
        query:{
          id:id
        }
    })
  }
  }
}
</script>

<style scoped>
.zm {
  margin-left: 20px;
  width: 50%;
}
.zm div:nth-child(2) {
  color: #999;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: 0.088542rem;
  margin-bottom: 20px;
  font-weight: 600;
}
.name:hover {
  text-decoration: underline;
  cursor: pointer;
}
.fl {
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  padding-bottom: 0px;
}
.fla {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.xq {
  margin: 20px 0px;
  width: 46%;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e7e7e7;
}
.nm {
  width: 120px;
  height: 120px;
}
img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>