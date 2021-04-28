<template>
  <!-- 左侧导航栏封装   -->
  <div v-if="Object.keys(obj).length != 0" class="topf">
    <div class="t">{{ obj.name }}</div>
    <div class="name" @click="fn(1)">{{ obj.name }}男歌手</div>
    <div class="name" @click="fn(2)">{{ obj.name }}女歌手</div>
    <div class="name" @click="fn(3)">{{ obj.name }}组合/乐队</div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      typeof: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    fn(id){
      this.$router.push({
        path:'/home/geshou/xq',
        query:{
          area:this.obj.area,
          type:id,
          name:this.obj.name
        }
      })
    }
  }
};
</script>

<style scoped>
.topf{
    padding-bottom: 10px;
border-bottom: 1px solid #d5d5d5;
margin-bottom: 20px;
}
.t{
  font-size: .078125rem;
  color: #333;
  font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.name {
  padding: 6.5px 30px;
  background-image: url(~assets/img/点.png);
  background-position: 0 -30px;
  padding-right: 0;
  margin-right: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.name:hover {
  background-image: url(~assets/img/点.png);
  color: #c20c0c;
  background-position: 0 0;
  border-right: 1px solid #d5d5d5;
  text-decoration: underline;
  cursor: pointer;
}
</style>