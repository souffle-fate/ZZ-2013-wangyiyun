<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
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
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登陆</van-button
        >
        <van-cell value="没有账号？" @click="goreg" />
      </div>
    </van-form>
  </div>
</template>

<script>
import { reqLogin } from "../../api/user";
import { setToken } from "../../utils/util";
import { Toast } from "vant";
export default {
  components: {},
  props: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    //没有账号去注册
    goreg() {
      this.$router.push("/register");
    },
    async onSubmit(values) {
      //提交登陆
      console.log("submit", values);
      const res = await reqLogin({ ...values });
      console.log(res);
      //存取token
      if (res.status === 200) {
        setToken(res.data.token);
        Toast.success("登录成功");
        this.$router.replace("/");
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