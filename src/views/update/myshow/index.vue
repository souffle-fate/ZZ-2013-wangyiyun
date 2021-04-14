<template>
  <div class="myshow">
    <div class="header">
      <span
        class="el-icon-back"
        style="margin-left: 10px"
        @click="$router.push(`/updateuser/${id}`)"
      >
      </span
      ><span style="margin-left: 10px">个人主页展示设置</span>
    </div>
    <div>
      <van-cell is-link title="谁可以看到我的个人信息" @click="show = true" />
      <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect" /> -->
      <van-cell is-link title="谁可以看到我的微博账号" @click="show = true" />
      <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect" /> -->
      <van-cell is-link title="谁可以看到我的听歌排行" @click="show = true" />
      <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect" /> -->
      <van-cell is-link title="谁可以看到我的评论" @click="show = true" />
      <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect" /> -->
      <van-cell is-link title="谁可以看到我的购票信息" @click="show = true" />
      <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { ActionSheet } from "vant";
import { Toast } from "vant";
Vue.use(ActionSheet);
export default {
  data() {
    return {
      show: false,
      actions: [{ name: "所有人" }, { name: "我关注的人" }, { name: "我自己" }],
    };
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    fn1() {
      this.id = localStorage.getItem("uid");
      console.log(this.id);
    },
  },
  created() {
    this.fn1();
  },
  components: {},
};
</script>

<style scoped>
.myshow {
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
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
</style>
