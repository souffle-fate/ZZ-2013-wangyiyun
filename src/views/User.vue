<template>
  <div class="user">
    <div class="top"></div>
    <div class="topDaohang">
      <img
        src="https://img1.baidu.com/it/u=2062164223,3783917881&fm=26&fmt=auto&gp=0.jpg"
        alt=""
        class="img"
      />
      <p>11</p>
      <van-button
        type="primary"
        size="mini"
        round
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        class="btn"
      >
        开通会员</van-button
      >
    </div>
    <van-cell-group>
      <van-cell title="本地音乐" value=">" icon="service-o" @click="click" />
      <van-cell
        title="最近播放"
        value=">"
        icon="play-circle-o"
        @click="click1"
      />
      <van-cell title="下载管理" value=">" icon="like-o" @click="click2" />
      <van-cell title="我的电台" value=">" icon="volume-o" @click="click3" />
      <van-cell title="我的收藏" value=">" icon="star-o" @click="click4" />
    </van-cell-group>
  </div>
</template>
<script>
import { reqList } from "../api/user";
export default {
  components: {},
  data() {
    return {
      loading: true,
    };
  },
  computed: {},
  watch: {},

  methods: {
    async reqLists() {
      const id = localStorage.getItem("uid");
      var uid = "?uid=" + id;
      const result = await reqList(uid);
      console.log(result);
    },
    click() {
      this.$router.push("/bendi");
    },
    click1() {
      this.$router.push("/zueijin");
    },
    click2() {
      this.$router.push("/xiazai");
    },
    click3() {
      this.$router.push("/diantai");
    },
    click4() {
      this.$router.push("/shocang");
    },
  },
  created() {
    this.reqLists();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>
.list {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 60px;
  background-color: #e20001;
}
.topDaohang {
  width: calc(100% - 40px);
  height: 50px;
  margin: 0 auto;
  background-color: pink;
  margin-top: -20px;
  border-radius: 5px;
  padding: 0 5px;
}
.img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 5px;
  float: left;
}
p {
  line-height: 25px;
  float: left;
}
.btn {
  float: right;
  margin-top: 12px;
}
</style>