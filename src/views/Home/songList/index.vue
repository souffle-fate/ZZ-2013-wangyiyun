<template>
  <div class="songlist">
    <div class="songlost-navtitle">
      <van-icon name="arrow-left" />
      歌单
    </div>
    <div class="songlist-box">
      <div
        class="songlost-nav"
        v-for="(item, index) in reqSongLists.slice(0, 1)"
        :key="index"
      >
        <div class="songlost-nav-img">
          <img :src="item.coverImgUrl" alt="" />
        </div>
        <div @click="gojingpin">
          <div class="jingpingedan">精品歌单</div>
          <van-icon class="arrow" name="arrow" />
        </div>

        <div class="songlost-nav-name">
          <p class="itemname">{{ item.name }}</p>
          <p class="itemcopywriter">{{ item.copywriter }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqSongList } from "../../../api/songList";
export default {
  components: {},
  props: {},
  data() {
    return {
      reqSongLists: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    gojingpin() {
      this.$router.push("/jingpinList");
    },
    async getSongList(id) {
      const res = await reqSongList({ id: id });
      // console.log(res.data.playlists);
      this.reqSongLists = res.data.playlists;
    },
  },
  created() {
    this.getSongList();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style scoped>
.songlost-navtitle {
  color: white;
  width: 100%;
  height: 50px;
  background: #575f30;
  line-height: 50px;
  position: fixed;
  top: 0;
  left: 0;
}
.songlost-nav {
  height: 150px;
  margin-top: 50px;
  background: #575f30;
}
/* 图片 */
.songlost-nav-img img {
  width: 130px;
  float: left;
  padding-left: 20px;
  margin-top: 20px;
}
/* 精品歌单 */

.jingpingedan {
  width: 50%;
  float: left;
  margin-top: 50px;
  color: white;
  margin-left: 20px;
}
.arrow {
  position: relative;
  top: 49px;
  left: -140px;
  color: aliceblue;
}
/* 名字 */
.songlost-nav-name {
  width: 50%;
}
.songlost-nav-name {
  margin-top: 10px;
  float: left;
}
.itemname {
  color: white;
  margin-left: 10px;
  font-size: 14px;
}
.itemcopywriter {
  color: white;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 5px;
}
</style>