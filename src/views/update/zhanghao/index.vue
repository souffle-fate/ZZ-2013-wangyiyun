<template>
  <div class="zhanghao">
    <div class="header">
      <span
        class="el-icon-back"
        style="margin-left: 10px"
        @click="$router.push(`/updateuser/${id}`)"
      >
      </span
      ><span style="margin-left: 10px">账号和绑定设置</span>
    </div>
    <van-cell-group>
      <van-cell
        title="手机号"
        icon="phone"
        :value="telephone"
        @click="$router.push('/phone')"
      />
    </van-cell-group>
    <div style="margin-top: 10px">
      <van-cell-group>
        <van-cell
          title="微信"
          icon="wechat"
          value="未绑定"
          v-model="aa"
          @click="fn(aa)"
        />
        <van-cell
          title="QQ"
          icon="alipay"
          value="未绑定"
          v-model="bb"
          @click="fn(bb)"
        />
        <van-cell
          title="微博"
          icon="friends"
          value="未绑定"
          v-model="cc"
          @click="fn(cc)"
        />
        <van-cell
          title="网易邮箱"
          icon="service"
          value="未绑定"
          v-model="dd"
          @click="fn(dd)"
        />
      </van-cell-group>
    </div>
    <transition>
      <div class="mask" ref="mask" v-if="flag">{{ str }}</div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  data() {
    return {
      telephone: "",
      aa: "请安装微信",
      bb: "请安装QQ",
      cc: "未开发",
      dd: "未开发",
      width: 0,
      str: "",
      flag: false,
      id: 0,
    };
  },
  methods: {
    fn1() {
      this.id = localStorage.getItem("uid");
      console.log(this.id);
    },
    fn(str) {
      Toast(str);
    },
  },
  created() {
    this.fn1();
  },
};
</script>

<style scoped>
.zhanghao {
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  position: relative;
}
.header {
  height: 85px;
  line-height: 85px;
  background: #dd4037;
  position: relative;
  color: white;
  font-size: 18px;
  line-height: 120px;
}
.mask {
  background: #999999;
  width: 100px;
  height: 30px;
  border-radius: 30px;
  position: absolute;
  left: 137.5px;
  bottom: 150px;
  color: white;
  line-height: 30px;
  text-align: center;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all ease 1s;
}
.v-leave-active {
  transition: all ease 1s;
  display: none;
}
</style>
