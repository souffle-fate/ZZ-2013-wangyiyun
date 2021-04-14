<template>
  <div class="update">
    <div class="header">
      <span
        class="el-icon-back"
        style="margin-left: 10px"
        @click="$router.push('/list')"
      >
      </span
      ><span style="margin-left: 10px">我的资料</span>
    </div>
    <div class="contain">
      <div class="box" @click="$router.push('/headerimg')">
        <p class="fl">头像</p>
        <span class="fr" style="margin: 10px 10px 0 0"
          ><img :src="avatarUrl" alt="" style="width: 45px; height: 45px"
        /></span>
      </div>
      <div
        class="box"
        @click="$router.push('/backimg')"
        style="position: relative"
      >
        <p class="fl">个人主页背景</p>
        <span class="fr" style="margin: 10px 10px 0 0"
          ><img
            :src="backgroundUrl"
            alt=""
            style="
              width: 45px;
              height: 45px;
              position: absolute;
              top: 0px;
              right: 10px;
            "
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
      <!-- 性别 -->
      <van-cell
        is-link
        title="性别"
        @click="show1 = true"
        style="padding: 20px 10px; font-size: 16px"
      />
      <van-action-sheet v-model="show1" :actions="actions" @select="onSelect" />

      <div class="box">
        <p class="fl">二维码</p>
        <van-icon
          name="qr-invalid"
          class="fr"
          style="line-height: 60px; margin-right: 10px; font-size: 24px"
        />
      </div>
      <!-- 生日 -->
      <van-cell
        title="生日"
        :value="date"
        @click="show = true"
        style="padding: 20px 10px; font-size: 16px"
      />
      <van-calendar v-model="show" @confirm="onConfirm" />

      <div
        class="box"
        style="position: relative"
        @click="$router.push('/daxue')"
      >
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
      <div
        class="box"
        style="position: relative"
        @click="$router.push(`/qianming`)"
      >
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
      <div class="box" @click="$router.push('/zhanghao')">
        <p class="fl">账号和绑定设置</p>
      </div>
      <div class="box" @click="$router.push('/myshow')">
        <p class="fl">个人主页展示设置</p>
      </div>
      <div class="box" @click="logout">
        <p class="fl" style="color: red; text-align: center">退出登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reqInfo } from "../../api/music";
import { Toast } from "vant";
export default {
  data() {
    return {
      date: "",
      username: "西班牙大鱿鱼",
      active: 0,
      level: 0,
      avatarUrl: "",
      backgroundUrl: "",
      gender: "",
      birthday: "",
      city: "",
      show: false,
      show1: false,
      actions: [{ name: "性别 男" }, { name: "性别 女" }],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("uid");
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    fn() {
      this.id = localStorage.getItem("uid");
      console.log(this.id);
      console.log(this.data);
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show1 = false;
      Toast(item.name);
    },
    formatDate(date) {
      console.log(`${date.getMonth() + 1}/${date.getDate()}`);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },

    async getInfo() {
      let uid = localStorage.getItem("uid");
      console.log(uid);
      const result = await reqInfo({ uid: uid });
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
      this.date = mon + "/" + day;
    },

    goBack() {
      this.$router.push("/list");
    },
  },
  created() {
    this.getInfo();
    this.fn();
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
