<template>
  <div class="daxue">
    <div class="header">
      <span
        class="el-icon-back"
        style="margin-left: 10px"
        @click="$router.push(`/updateuser/${id}`)"
      >
      </span
      ><span style="margin-left: 10px">我的资料</span>
    </div>
    <div>
      <img
        src="../../../assets/QQ截图20210413211001.png"
        alt=""
        style="width: 80%; display: block; margin: 20px auto"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
