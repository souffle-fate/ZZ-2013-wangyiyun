<template>
  <div class="enter">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
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
        <van-button round block type="danger" native-type="submit"
          >提交</van-button
        >
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
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/login");
    },

    async onSubmit(values) {
      console.log("submit", values);
      var aa = "?phone=" + this.phone + "&password=" + this.password;
      console.log(aa);
      const result = await reqLogin(aa);
      console.log(result);
      if (result.data.code === 200) {
        setToken(result.data.token);
        localStorage.setItem("uid", result.data.account.id);
        Toast.success("登录成功");
        this.$router.push("/");
        console.log("11");
      } else if (result.data.code === 400) {
        setToken(result.data.token);
        Toast.success("账户不存在");
      } else {
        Toast.success("密码输入错误");
      }
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>
</style>