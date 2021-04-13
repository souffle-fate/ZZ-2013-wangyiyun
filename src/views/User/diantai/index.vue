<template>
  <div class="diantai">
    <van-nav-bar
      title="我的电台"
      left-text="返回"
      right-text="按钮"
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
</style>