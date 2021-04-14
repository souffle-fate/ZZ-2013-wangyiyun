<template>
  <div class="list">
    <div class="img">
      <img :src="backgroundUrl" alt="" />
      <div class="message">
        <div class="headPortrait">
          <div class="img fl" style="margin-left: 10px">
            <img :src="avatarUrl" alt="" />
          </div>
          <div class="fr" @click="redact">
            <p
              class="el-icon-edit"
              style="
                width: 72px;
                height: 32px;
                text-align: center;
                line-height: 32px;
                border: solid 0px;
                background-color: rgba(255, 255, 255, 0.5);
                margin-top: 20px;
                margin-right: 10px;
              "
            >
              编辑
            </p>
          </div>
        </div>
        <div class="geren" style="margin-left: 10px">
          <p style="font-weight: bold; margin-bottom: 10px">{{ username }}</p>
          <p style="margin-bottom: 10px">
            <span
              ><i>关注 </i><span>24</span> | <span></span><i>粉丝 </i
              ><span>24</span></span
            >
          </p>
          <div class="box">
            <span style="opacity: 0.3">黑胶</span>
            <span style="opacity: 0.7">lv.{{ level }}</span>
            <span style="opacity: 0.8">河洛市</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <van-tabs v-model="active">
        <van-tab title="音乐" to="/list/music"> </van-tab>
        <van-tab title="动态" to="/list/dongtai"></van-tab>
        <van-tab title="关于我" to="/list/mine"></van-tab>
      </van-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { reqInfo } from "../../api/music";

export default {
  components: {},
  props: {},
  data() {
    return {
      username: "西班牙大鱿鱼",
      active: 0,
      level: 0,
      avatarUrl: "",
      backgroundUrl: "",
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async getInfo() {
      localStorage.setItem("uid", 32953014);
      console.log(uid);
      let uid = localStorage.getItem("uid");
      const result = await reqInfo({ uid: uid });
      const obj = result;
      console.log(obj);
      this.username = obj.data.profile.nickname;
      console.log(this.username);
      this.level = obj.data.level;
      this.avatarUrl = obj.data.profile.avatarUrl;
      this.backgroundUrl = obj.data.profile.backgroundUrl;
    },
    redact() {
      let uid = localStorage.getItem("uid");
      this.$router.push(`/updateuser/${uid}`);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getInfo();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped>
.list {
  position: relative;
}
.list .main {
  overflow: hidden;
  border: solid 0px white;
  margin-top: -10px;
  border-radius: 10px 10px 0 0;
}
.list .img {
  width: 100%;
  height: 290px;
  color: white;
}
.list .img img {
  width: 100%;

  height: 290px;
}
.list .img .message {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.list .img .headPortrait {
  width: 100%;
  margin-top: 105px;
  min-height: 100px;
}
.list .img .headPortrait .img {
  overflow: hidden;
  width: 76px;
  border-radius: 50%;
  background: orange;
  height: 76px;
}
.list .img .headPortrait .img img {
  width: 100%;
  height: 100%;
}
.geren .box span {
  padding: 2px 10px;
  border: solid 1px;
  border-radius: 10px;
  color: white;
  font-weight: bolder;
  /* background: white; */
}
</style>