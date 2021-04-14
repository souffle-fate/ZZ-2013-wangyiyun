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
export default {
  data() {
    return { message: "" };
  },
  methods: {
    fn() {
      this.id = localStorage.getItem("uid");
      console.log(this.id);
    },
  },
  created() {
    this.fn();
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
