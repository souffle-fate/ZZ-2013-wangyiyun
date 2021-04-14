<template>
  <div class="shocang">
    <van-nav-bar
      title="我的收藏"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active">
      <van-tab title="MV"> </van-tab>
      <van-tab title="歌手">内容 2</van-tab>
      <van-tab title="视频">内容 3</van-tab>
      <van-tab title="专栏">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { reqUserMV } from "../../../api/user";
export default {
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/user");
    },
    async reqUserMVs() {
      const result = await reqUserMV();
      console.log(result);
      // this.result = result1.data.result;
    },
  },
  created() {
    this.reqUserMVs();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>
.van-nav-bar {
  background-color: #e20001;
}
</style>