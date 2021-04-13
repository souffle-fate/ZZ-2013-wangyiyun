<template>
  <div id="MusicPlay">
    <img src="../assets/logo.png" alt="" @click="tz" />
    <van-icon name="bars" size="40px" class="xq" />
    <van-icon
      ref="off"
      name="play-circle-o"
      size="40px"
      @click="change1"
      style="display: block"
      class="bf"
    />
    <van-icon
      ref="on"
      name="pause-circle-o"
      size="40px"
      @click="change2"
      class="bf"
      style="display: none"
    />
  </div>
</template>

<script>
export default {
  methods: {
    change1() {
      this.$refs.on.style.display = "block";
      this.$refs.off.style.display = "none";
    },
    change2() {
      this.$refs.on.style.display = "none";
      this.$refs.off.style.display = "block";
    },
    tz(){
      this.$router.replace('/detail')
    }
  },
};
</script>

<style scoped>
#MusicPlay {
  width: 100%;
  height: 70px;
  background: rgb(211, 208, 208);
  position: fixed;
  bottom: 50px;
}
img {
  width: 40px;
  margin-top: 15px;
}
.xq {
  float: right;
  margin-top: 15px;
}
.bf {
  float: right;
  margin-top: 15px;
  margin-right: 15px;
}
</style>