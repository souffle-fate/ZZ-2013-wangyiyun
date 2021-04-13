<template>
  <div class="register">
    <van-form @submit="onSubmit">
      <van-field
        v-model="userName"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />

      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="nickName"
        name="nickName"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-uploader :after-read="afterRead" v-if="!imgUrl" />
      <img :src="imgUrl" alt="" width="100" v-else />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { reqRegister } from "../../api/user";
export default {
  components: {},
  props: {},
  data() {
    return {
      userName: "",
      password: "",
      nickName: "",
      imgUrl: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    //文件上传
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.imgUrl = file.content;
    },
    //注册请求
    async onSubmit(values) {
      //提交注册
      console.log("submit", values);
      const res = await reqRegister({ ...values, avatar: this.imgUrl });
      console.log(res);
      if (res.status === 200) {
        this.$router.replace("/login");
      }
    },
  },
  created() {},
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
<style scoped>
</style>