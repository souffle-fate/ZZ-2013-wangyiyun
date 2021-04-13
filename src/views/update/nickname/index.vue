<template>
  <div class="headerimg">
    <div class="header">
      <span
        class="el-icon-back"
        style="margin-left: 10px"
        @click="$router.push(`/updateuser/${id}`)"
      >
      </span
      ><span style="margin-left: 10px">修改昵称</span>
    </div>
    <div class="ipt"><i class="el-icon-user"></i><input type="text" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      id: 0,
      value1: "",
    };
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
.preview-cover {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
.ipt {
  border-bottom: solid 1px #999999;
  width: 90%;
  margin: 40px auto;
}
input {
  border: none;
}
</style>
