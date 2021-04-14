<template>
  <div class="qianming">
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
      <van-field
        v-model="message"
        rows="4"
        autosize
        label=""
        type="textarea"
        maxlength="150"
        placeholder="一句话介绍"
        show-word-limit
      />
    </div>
  </div>
</template>

<script>
import { reqInfo } from "../../../api/music";

export default {
  data() {
    return { message: "", signature: "" };
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
</style>
