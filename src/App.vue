<template>
  <div id="app">
    <router-view />
    <van-tabbar
      route
      v-model="active"
      active-color="deeppink"
      v-if="$route.meta.showTabbar"
    >
      <van-tabbar-item :to="{ name: 'Home' }" @click="active = 0" icon="home-o"
        >首页</van-tabbar-item
      >
      <!-- 排行榜 -->
      <van-tabbar-item
        :to="{ name: 'Rank' }"
        @click="active = 1"
        icon="orders-o"
        >推荐列表</van-tabbar-item
      >
      <van-tabbar-item
        :to="{ name: 'List' }"
        @click="active = 2"
        icon="coupon-o"
        >我的歌单</van-tabbar-item
      >
      <van-tabbar-item
        :to="{ name: 'Index' }"
        @click="active = 3"
        icon="friends-o"
        >云村</van-tabbar-item
      >
      <van-tabbar-item :to="{ name: 'User' }" @click="active = 4" icon="contact"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
    <Footer></Footer>
    <Pmusic></Pmusic>
  </div>
</template>
<script>
import Pmusic from "./views/MusicPlay";
export default {
  name: "App",
  data() {
    return {
      active: 0,
    };
  },
  components: {
    Pmusic,
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  /* background-color: gray; */
}
</style>
