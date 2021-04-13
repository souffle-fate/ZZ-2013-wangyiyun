<template>
  <div class="loging">
    <img
      src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=757666885,897650839&fm=26&gp=0.jpg"
      class="img"
    />
    <div style="width: 300px; margin: 0 auto">
      <van-button round type="info" size="large" class="btn1" @click="denglu"
        >手机号登录</van-button
      >
      <van-button round type="info" size="large" class="btn" @click="miandenglu"
        >立即体验</van-button
      >
    </div>
    <br />
    <div class="divImg">
      <img
        src="https://img01.yzcdn.cn/vant/share-sheet-wechat.png"
        class="img1"
      />
      <img
        src="https://img01.yzcdn.cn/vant/share-sheet-weibo.png"
        class="img1"
      />
      <img src="https://img01.yzcdn.cn/vant/share-sheet-qq.png" class="img1" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {
    denglu() {
      this.$router.push("/enter");
    },
    miandenglu() {
      this.$router.push("/");
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.loging {
  width: 100%;
  height: 100%;
  background-color: #e20001;
  padding-top: 450px;
}
.img {
  width: 30%;
  position: absolute;
  top: 100px;
  left: 35%;
}
.btn {
  width: 300px;
  height: 40px;
  background-color: #e20001;
  border: #ffffff 1px solid;
  margin-bottom: 5px;
}
.btn1 {
  width: 300px;
  height: 40px;
  background-color: #ffffff;
  border: #ffffff 1px solid;
  margin-bottom: 8px;
  color: #e20001;
}
.img1 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  margin: 0 42.5px;
}
.divImg {
  width: 375px;
  height: 40px;
  margin-top: 30px;
  margin: 0 auto;
}
</style>
