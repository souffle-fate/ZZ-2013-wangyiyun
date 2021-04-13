<template>
  <div class="zueijin">
    <van-nav-bar
      title="最近播放"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
<script>
import { reqListsZueijin } from "../../../api/user";
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
    async reqListsZueijins() {
      const id = localStorage.getItem("uid");
      var uid = "?uid=" + id;
      const result = await reqListsZueijin(uid);
      console.log(result);
    },
  },
  created() {
    this.reqListsZueijins();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>
</style>