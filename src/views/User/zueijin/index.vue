<template>
  <div class="zueijin">
    <van-sticky>
      <van-nav-bar
        title="最近播放"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />

      <van-cell
        title="全部播放"
        icon="play-circle-o"
        size="large"
        border
        style="background-color: rgb(226, 222, 222)"
        type="primary"
      />
    </van-sticky>
    <div class="gequ" v-for="item in allData" :key="item.song.id">
      <img :src="item.song.al.picUrl" alt="" />
      <h3>{{ item.song.al.name }}</h3>
      <p>{{ item.song.ar[0].name }}</p>
    </div>
  </div>
</template>
<script>
import { reqUserZueijin } from "../../../api/user";
export default {
  components: {},
  data() {
    return {
      allData: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/user");
    },
    async reqUserZueijins() {
      const id = localStorage.getItem("uid");
      var uid = "?uid=" + id;
      const result = await reqUserZueijin(uid);
      console.log(result);
      this.allData = result.data.allData;
    },
  },
  created() {
    this.reqUserZueijins();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>
.gequ {
  width: 100%;
  height: 46px;
  border: silver 0.5px solid;
}
.gequ h3 {
  line-height: 20px;
  font-size: 16px;
  margin-top: 5px;
}
.gequ p {
  line-height: 26px;
  font-size: 12px;
}
.gequ img {
  width: 46px;
  height: 46px;
  float: left;
  border-radius: 8px;
  margin-right: 8px;
}
.van-nav-bar {
  background-color: #e20001;
}
</style>