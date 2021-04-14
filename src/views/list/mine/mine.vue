<template>
  <div class="mine">
    <div class="selfMessage">
      <i>个人信息</i>
      <p>等级:{{ arr.level }}</p>
      <p>性别:{{ (arr.gender = 1 ? "女" : "男") }}</p>
      <p>地区:河南省 郑州市</p>
    </div>
    <div class="selfIntor">
      <i>个人介绍</i>
      <p>还没有填写个人介绍</p>
    </div>
    <div class="myDiscuss">
      <i>我的评论</i>
      <van-skeleton title avatar :row="3" :loading="loading">
        <div>
          <div style="border-radius: 3px; width: 100%" class="fl">
            <img
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              alt=""
              class="fl"
              style="width: 29px; height: 29px"
            />
            <p
              class="fl"
              style="display: inline-block width: 29px; height: 29px;line-height:29px;font-size:12px;color:#999999"
            >
              单曲[Pretty Please]-王嘉尔/Galantis
            </p>
            <van-icon
              name="good-job-o"
              class="fr"
              style="width: 29px; height: 29px; line-height: 29px"
              color="#999999"
            />
          </div>
          <div style="clear: both"></div>
          <div class="fl">
            <p style="margin-bottom: 17px">还阔以</p>
            <p style="font-size: 10px; color: #999999">2020年10月28日</p>
          </div>
          <div style="clear: both"></div>
          <el-divider></el-divider>
        </div>
      </van-skeleton>
    </div>
  </div>
</template>

<script>
import { reqInfo } from "../../../api/music";
import { reqHistory } from "../../../api/user";

export default {
  data() {
    return { loading: true, arr: [] };
  },
  methods: {
    // 获取用户信息
    async getInfo() {
      let uid = localStorage.getItem("uid");
      const result = await reqInfo({ uid: uid });
      //result.data.profile.nickname名字,等级result.data.level,性别gender:1（女），地区city,
      this.arr = result.data;
      console.log(this.arr);
    },
    // 获取用户历史评论
    async getmydis() {
      const result = await reqHistory({ uid: 32953014 });
      console.log(result);
    },
  },
  created() {
    this.getInfo();
    this.getmydis();
  },
  mounted() {
    this.loading = false;
  },
  components: {},
};
</script>

<style scoped>
.mine {
  padding-bottom: 100px;
}
.mine div {
  margin-left: 8px;
}
.selfMessage {
  min-height: 20px;
  margin-top: 15px;
}
.selfMessage i {
  font-weight: bolder;
  display: block;
  margin-bottom: 16px;
}
.selfMessage p {
  color: #999999;
  font-size: 14px;
  margin-bottom: 8px;
}
.selfIntor {
  margin: 40px 0;
}
.selfIntor i {
  font-weight: bolder;
  display: block;
  margin-bottom: 16px;
}
.selfIntor p {
  color: #999999;
  font-size: 14px;
  margin-bottom: 8px;
}
.myDiscuss i {
  font-weight: bolder;
  display: block;
  margin-bottom: 16px;
}
</style>
