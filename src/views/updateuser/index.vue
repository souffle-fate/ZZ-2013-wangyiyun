<template>
  <div class="update">
    <div class="header">
      <span class="el-icon-back" style="margin-left: 10px"> </span
      ><span style="margin-left: 10px">我的资料</span>
    </div>
    <div class="contain">
      <div class="box" @click="$router.push('/headerimg')">
        <p>头像</p>
      </div>
      <div class="box" @click="$router.push('/backimg')">
        <p class="fl">个人主页背景</p>
        <span class="fr" style="margin: 10px 10px 0 0"
          ><img :src="backgroundUrl" alt="" style="width: 45px; height: 45px"
        /></span>
      </div>
      <div
        class="box"
        style="position: relative"
        @click="$router.push('/nickname')"
      >
        <p class="fl">昵称</p>
        <!-- <p>{{ username }}</p> -->
        <span
          class="fr"
          style="
            position: absolute;
            top: 0px;
            right: 10px;
            font-size: 12px;
            color: #999999;
          "
          >{{ username }}</span
        >
      </div>
      <div class="box" style="position: relative" @click="show = true">
        <van-button
          type="primary"
          text="性别"
          class="fl"
          style="
            color: black;
            background-color: white;
            border: none;
            font-size: 16px;
            height: 100%;
            margin-left: -5px;
          "
        />
        <span
          class="fr"
          style="
            position: absolute;
            top: 0px;
            right: 10px;
            color: #999999;
            font-size: 12px;
          "
          >{{ (gender = 1 ? "女" : "男") }}</span
        >
      </div>
      <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
          <div class="block" style="height: 50px; width: 80%">
            <p style="height: 25px; line-height: 25px">
              <span class="fl" style="margin-left: 10px">男</span>
            </p>
            <div style="clear: both"></div>
            <p style="height: 25px; line-height: 25px">
              <span class="fl" style="margin-left: 10px">女</span>
            </p>
            <div style="clear: both"></div>
          </div>
        </div>
      </van-overlay>

      <div class="box">
        <p class="fl">二维码</p>
        <van-icon
          name="qr-invalid"
          class="fr"
          style="line-height: 60px; margin-right: 10px; font-size: 24px"
        />
      </div>
      <div class="box" style="position: relative">
        <p class="fl">生日</p>
        <span
          class="fr"
          style="
            position: absolute;
            top: 0px;
            right: 10px;
            color: #999999;
            font-size: 12px;
          "
          >{{ this.birthday }}</span
        >
      </div>
      <div class="box" style="position: relative">
        <p class="fl">大学</p>
        <span
          class="fr"
          style="
            position: absolute;
            top: 0px;
            right: 10px;
            color: #999999;
            font-size: 12px;
          "
          >未填写</span
        >
      </div>
      <p
        style="margin: 5px 0; color: #999999; font-size: 8px; text-indent: 10px"
      >
        此三项可以在"设置"页中设置为隐私
      </p>
      <div class="box" style="position: relative">
        <p class="fl">签名</p>
        <span
          class="fr"
          style="
            position: absolute;
            top: 0px;
            right: 10px;
            color: #999999;
            font-size: 12px;
          "
          >还没有签名</span
        >
      </div>
      <div class="box">
        <p class="fl">账号和绑定设置</p>
      </div>
      <div class="box">
        <p class="fl">个人主页展示设置</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reqInfo } from "../../api/music";

export default {
  data() {
    return {
      username: "西班牙大鱿鱼",
      active: 0,
      level: 0,
      avatarUrl: "",
      backgroundUrl: "",
      gender: "",
      birthday: "",
      city: "",
      show: false,
    };
  },
  methods: {
    async getInfo() {
      let uid = localStorage.getItem("uid", 32953014);
      console.log(uid);
      const result = await reqInfo({ uid: 32953014 });
      const obj = result;
      console.log(obj);
      this.username = obj.data.profile.nickname; //昵称
      this.level = obj.data.level; //等级
      this.avatarUrl = obj.data.profile.avatarUrl; //头像
      //北京图片
      this.backgroundUrl = obj.data.profile.backgroundUrl;
      //性别
      this.gender = obj.data.profile.gender;
      //生日
      //地区
      this.city = obj.data.profile.city;
      var date = new Date(parseInt(obj.data.profile.birthday));
      var mon = date.getMonth() + 1;
      var day = date.getDate();
      this.birthday = mon + "月" + day + "日";
    },

    goBack() {
      this.$router.push("/list");
    },
  },
  created() {
    this.getInfo();
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.header {
  height: 85px;
  line-height: 85px;
  background: #dd4037;
  position: relative;
  color: white;
  font-size: 18px;
  line-height: 120px;
}
.box {
  width: 100%;
  height: 60px;
  border-bottom: solid 0.1px #f6f6f6;
  font-weight: bold;
  line-height: 60px;
  text-indent: 10px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
