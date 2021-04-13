<template>
  <div class="headerimg">
    <div class="header">
      <span
        class="el-icon-back"
        style="margin-left: 10px"
        @click="$router.push(`/updateuser/${id}`)"
      >
      </span
      ><span style="margin-left: 10px">全部照片</span>
    </div>
    <div class="img">
      <van-uploader v-model="fileList">
        <template #preview-cover="{ file }">
          <div class="preview-cover van-ellipsis">{{ file.name }}</div>
        </template>
      </van-uploader>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      id: 0,
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
</style>
