<template>
  <div>
    <van-nav-bar
      title="歌名"
      name="arrow-left"
      left-arrow
      @click-left="onClickLeft"
      bind:click-right="onClickRight"
    />
    <div class="gc"></div>
    <div class="db">
      <van-icon name="like-o" size="30px"  />
      <van-icon name="down" size="30px" />
      <van-icon name="chat-o" size="30px" />
      <van-icon name="ellipsis" size="30px" />
      <van-slider class="hk" />
    </div>
    <div class="bf">
      <van-icon name="replay" size="30px" class="zuo"/>
      <van-icon name="arrow-left" size="30px" class="zuo" />
      <van-icon
        ref="off"
        name="play-circle-o"
        size="30px"
        @click="change1"
        style="display: block"
        class="ks"
      />
      <van-icon
        ref="on"
        name="pause-circle-o"
        size="30px"
        @click="change2"
        style="display: none"
        class="ks"
      />
      <van-icon name="arrow" size="30px" class="you" />
      <van-icon name="bars" size="30px" class="you" />
    </div>
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
    onClickLeft(){
        this.$router.push('/'); 
        // console.log(11);
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.db {
  width: 100%;
  position: fixed;
  bottom: 50px;
  text-align: center;
}
.db .van-icon {
  width: 15%;
}
.hk {
  width: 80%;
  margin-left: 10%;
  margin-top: 10px;
}
.bf{
    position: fixed;
    bottom: 0;
    width: 90%;
    margin-left: 5%;
}
.zuo{
    float: left;
    width: 18%;
    text-align: center;
}
.ks{
    float: left;
    width: 18%;
    text-align: center;

}
.you{
    width: 18%;
    text-align: center;
}
</style>