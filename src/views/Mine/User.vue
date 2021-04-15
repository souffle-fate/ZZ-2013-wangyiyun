<template>
  <div class="user">
    <div class="top"></div>
    <div class="topDaohang">
      <img
        src="https://img2.baidu.com/it/u=1666256797,972082711&fm=26&fmt=auto&gp=0.jpg"
        alt=""
        class="img"
        v-if="!tage"
        @click="topDaohangImg"
      />
      <p v-if="!tage">未登录</p>
      <img
        :src="avatarUrl"
        alt=""
        class="img"
        v-if="tage"
        @click="$router.push('/list')"
      />
      <p v-if="tage">{{ nickname }}</p>
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
      <van-cell title="本地音乐" value=">" icon="service-o" to="bendi" />
      <van-cell title="最近播放" value=">" icon="play-circle-o" to="zueijin" />
      <van-cell title="下载管理" value=">" icon="like-o" to="xiazai" />
      <van-cell title="我的电台" value=">" icon="volume-o" to="diantai" />
      <van-cell title="我的收藏" value=">" icon="star-o" to="shocang" />
      <van-cell title="推荐歌单" size="large" />
    </van-cell-group>
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in result" :key="item.id">
        <van-image :src="item.picUrl" @click="goListDetail(item.id)" />
        <span style="font-size: 9px; height: 30px">{{ item.name }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
//reqUserPer
import { reqUser } from "../../api/user";
import { reqUserPer } from "../../api/user";
import { getToken } from "../../utils/util";
export default {
  components: {},
  data() {
    return {
      loading: true,
      result: [],
      avatarUrl: "",
      nickname: "",
      tage: true,
    };
  },
  computed: {},
  watch: {},

  methods: {
    async reqUsers() {
      const getTokens = getToken();
      console.log(getTokens);
      if (getTokens === null) {
        this.tage = false;
      } else {
        const id = localStorage.getItem("uid");
        var uid = "?uid=" + id;
        const result = await reqUser(uid);
        console.log(result);
        this.avatarUrl = result.data.profile.avatarUrl;
        this.nickname = result.data.profile.nickname;
        this.tage = true;
      }
    },
    async reqUserPers(a) {
      const result1 = await reqUserPer(a);
      console.log(result1);
      this.result = result1.data.result;
    },
    topDaohangImg() {
      this.$router.push("/login");
    },
    //获取歌单详情
    goListDetail(id) {
      // console.log(id);
      this.$router.push({ path: `/listdetail/${id}` });
    },
  },
  created() {
    this.reqUsers();
    this.reqUserPers(6);
    // this.reqUserUsers();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>
.user {
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
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
  line-height: 50px;
  float: left;
  font-size: 12px;
  color: rgb(226, 110, 110);
}
.btn {
  float: right;
  margin-top: 12px;
}
</style>
