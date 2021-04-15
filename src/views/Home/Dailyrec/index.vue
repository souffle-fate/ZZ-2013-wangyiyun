<template>
  <div class="dailyrec">
    <div class="header">
      <span><van-icon name="arrow-left" @click="gohome" /></span>
      <span>{{ this.$route.meta.title }}</span>
    </div>
  </div>
</template>

<script>
import { reqDailyRec } from "../../../api/dailyrec";
import { isLogined } from "../../../utils/util";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    //点击返回按钮跳转首页
    gohome() {
      this.$router.push("/home");
    },
    //获取每日推荐歌单
    getDailyRec() {
      if (isLogined()) {
        reqDailyRec().then((res) => {
          console.log(res);
        });
      } else {
        this.$router.push("/login");
      }
    },
  },
  created() {
    this.getDailyRec();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style scoped lang='scss'>
.header {
  width: 100%;
  height: 50px;
  background: rgb(223, 66, 56);
  z-index: 1000;
  position: fixed;
  span {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 25px;
    color: #fff;
    margin-right: 3px;
  }
  span:last-child {
    font-size: 18px;
  }
}
</style>