<template>
  <div id="app">
    <router-view />
    <van-tabbar route v-model="active" active-color="deeppink">
      <van-tabbar-item :to="{ name: 'Home' }" @click="active = 0" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item :to="{ name: 'About' }" @click="active = 1" icon="search"
        >标签</van-tabbar-item
      >
      <van-tabbar-item
        :to="{ name: 'List' }"
        @click="active = 2"
        icon="friends-o"
        >标签</van-tabbar-item
      >
      <van-tabbar-item
        :to="{ name: 'Cart' }"
        @click="active = 3"
        icon="setting-o"
        >标签</van-tabbar-item
      >
      <van-tabbar-item
        :to="{ name: 'User' }"
        @click="active = 4"
        icon="setting-o"
        >标签</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
    };
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
