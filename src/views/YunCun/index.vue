<template>
  <div id="yuncun">
    <!-- <router-link :to="{ name: 'HotTopic' }">11</router-link>
    <router-link :to="{ name: 'Mv' }">22</router-link> -->
    <van-sticky>
      <van-tabs>
        <van-tab title="热门话题" :to="{ name: 'HotTopic' }"></van-tab>
        <van-tab title="推荐MV" :to="{ name: 'Mv' }"></van-tab>
      </van-tabs>
    </van-sticky>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
router-link {
  position: fixed;
  top: 0;
}
</style>
