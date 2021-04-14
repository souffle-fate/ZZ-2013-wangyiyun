<template>
  <div class="xiazai">
    <van-nav-bar
      title="本地下载"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
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
    onClickLeft() {
      this.$router.push("/user");
    },
    onClickRight() {
      console.log("按钮");
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
<style  scoped>
.van-nav-bar {
  background-color: #e20001;
}
</style>