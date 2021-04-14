<template>
  <div class="phone">
    <div class="header">
      <span
        class="el-icon-back"
        style="margin-left: 10px"
        @click="$router.push(`/updateuser/${id}`)"
      >
      </span
      ><span style="margin-left: 10px">修改签名</span>
    </div>
    <div>
      <div>
        <img
          src="../../../assets/QQ截图20210414135632_03.jpg"
          alt=""
          style="display: block; margin: 50px auto"
        />
      </div>
      <div class="box1">
        <p>手机号:1780*****88</p>

        <van-button
          type="default"
          style="
            width: 80%;
            height: 30px;
            line-height: 30px;
            border: solid 1px #f3f3f3;
            border-radius: 30px;
            margin: 0 auto;
          "
          @click="$router.push('/password')"
          >重设密码</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reqInfo } from "../../../api/music";

export default {
  data() {
    return { message: "", signature: "", phone: "" };
  },
  methods: {
    fn() {
      this.id = localStorage.getItem("uid");
      console.log(this.id);
    },
    async getInfo() {
      let uid = localStorage.getItem("uid");
      console.log(uid);
      const result = await reqInfo({ uid: uid });
      const obj = result;
      console.log(obj);
      this.username = obj.data.profile.nickname; //昵称
      //性别
      this.gender = obj.data.profile.gender;
      //生日
      this.birthday = obj.data.profile.birthday;
      this.city = obj.data.profile.city;
      //地区
      this.message = obj.data.profile.signature;
      this.province = obj.data.profile.province;
      this.signature = obj.data.profile.signature;
    },
  },
  created() {
    this.fn();
    this.getInfo();
  },
  components: {},
};
</script>

<style scoped>
.header {
  height: 85px;
  line-height: 85px;
  background: #dd4037;
  position: relative;
  color: white;
  font-size: 18px;
  line-height: 120px;
}
.box1 {
  text-align: center;
}
.box1 p {
  margin-bottom: 20px;
}
</style>
