<template>
  <div class="diantai">
    <van-nav-bar
      title="我的电台"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-divider
      content-position="left"
      :style="{ color: '#ff6034', borderColor: '#ff6034', padding: '0 16px' }"
      >我订阅的电台</van-divider
    >
    <div class="div" v-for="item in djRadios" :key="item.id">
      <img :src="item.picUrl" />
      <h3>{{ item.name }}</h3>
      <p>{{ item.category }}</p>
      <van-icon name="arrow" class="vanIcon" size="20" />
    </div>
    <van-divider
      :style="{ color: '#ff6034', borderColor: '#ff6034', padding: '0 16px' }"
      >电台推荐</van-divider
    >
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item1 in data" :key="item1.id">
        <van-image :src="item1.picUrl" />
        <span style="font-size: 9px; height: 30px">{{
          item1.lastProgramName
        }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import { reqUserYonghuDiantai, reqUserDiantaiYX } from "../../../api/user";
export default {
  components: {},
  data() {
    return {
      djRadios: [],
      data: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/user");
    },
    async reqUserYonghuDiantais() {
      const result = await reqUserYonghuDiantai();
      console.log(result);
      this.djRadios = result.data.djRadios;
    },
    async reqUserDiantaiYXs() {
      const result1 = await reqUserDiantaiYX();
      console.log(result1);
      console.log(result1.data.data);

      this.data = result1.data.data;
    },
  },
  created() {
    this.reqUserYonghuDiantais();
    this.reqUserDiantaiYXs();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>
.div {
  width: 100%;
  height: 60px;
  background-color: rgb(243, 242, 242);
  position: relative;
}
.div img {
  width: 60px;
  height: 60px;
  margin-left: 5px;
  border-radius: 10px;
  float: left;
  margin-right: 8px;
}
.div p {
  color: rgb(119, 119, 119);
}
.vanIcon {
  position: absolute;
  top: 20px;
  left: 92%;
}
.van-nav-bar {
  background-color: #e20001;
}
</style>