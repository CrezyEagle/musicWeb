<template>
  <div class="gsyh" v-if="yhgs.length != 0">
    <div class="wdgs">我订阅的电台（{{ yhgs.length }}）</div>
    <div v-for="(item, index) in yhgs" :key="index" class="gs">
      <div class="imga">
        <img
          :src="item.picUrl + '?param=80y80'"
          alt=""
          @click="tz(item.id, item.name, item.img1v1Url)"
        />
      </div>
      <div class="nam">
        <div class="name" @click="tz(item.id)">
          {{ item.name }}
        </div>
        <div class="name2">
          <span>by</span
          ><span class="mvs">{{ item.dj.nickname }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yhgs: [],
    };
  },
  activated() {
    if (this.$store.state.yhdt != "") {
      this.yhgs = this.$store.state.yhdt.djRadios;
    }
  },
  methods: {
    tz(id) {
      this.$router.push({
        path: "/home/diantaixq",
        query: {
          id,
        
        },
      });
    },
  },
};
</script>

<style scoped>
.nam {
  margin-left: 10px;
}
.gs {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}
.mvs {
  margin-left: 10px;
}
.name {
  font-size: 0.078125rem;
  font-weight: 600;
  cursor: pointer;
}
.name:hover {
  text-decoration: underline;
}
.name2 {
  display: flex;
  margin-top: 20px;
  align-items: center;
  color: #999;
}
.imga {
  width: 80px;
  height: 80px;
}
img {
  width: 100%;
  cursor: pointer;
  height: 100%;
}
.gsyh {
  width: 75%;
  padding: 30px;
  height: 1000px;
  box-sizing: border-box;
}
.wdgs {
  padding-bottom: 10px;
  border-bottom: 1px red solid;
  font-size: 0.104167rem;
  margin-bottom: 10px;
}
</style>