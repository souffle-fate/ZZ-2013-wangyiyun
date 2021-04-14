<template>
  <div class="dongtai">
    <p>暂时还没有动态哦</p>
  </div>
</template>

<script>
import { reqEvent } from "../../../api/user";
export default {
  data() {
    return {};
  },
  methods: {
    // 获取用户动态
    async getEvent() {
      const result = await reqEvent({
        uid: 32953014,
      });
      console.log(result);
    },
  },
  created() {
    this.getEvent();
  },
  components: {},
};
</script>

<style scoped>
.dongtai {
  padding-bottom: 70px;
}
.dongtai p {
  font-size: 12px;
  color: #999999;
  margin-top: 30px;
  text-align: center;
}
</style>
