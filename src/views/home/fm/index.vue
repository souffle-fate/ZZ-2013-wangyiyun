<template>
  <div class="list">
    <van-nav-bar
      title="私人FM"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div
      class="list-box"
      v-for="(item, index) in reqPrivateFM.slice(0, 1)"
      :key="index"
    >
      <img
        class="list-img"
        :src="item.album.blurPicUrl"
        alt=""
        @click="bofang(item.id)"
      />
      <p class="list-Sname">{{ item.album.name }}</p>
      <p class="list-Uname">{{ item.artists[0].name }}</p>
    </div>
  </div>
</template>

<script>
import { reqPrivateFMs } from "../../../api/home";
import {
  reqMusicUrl,
  // 获取音乐url,
  reqMusicLyrics, //获取歌词
} from "../../../api/music";

export default {
  components: {},
  props: {},
  data() {
    return {
      reqPrivateFM: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    bofang(ids) {
      // const uid = this.$route.params.id;
      // 把歌曲ID存到vuex里面
      console.log(ids, 111);
      this.$store.commit("getMusicId", ids);
      this.MusicUrl(ids);
      this.musicLyrics(ids);
      this.$router.push(`/Detail`);
    },
    // 电机返回首页
    onClickLeft() {
      // Toast('返回');
      this.$router.push("/");
    },
    // 获取音乐url
    async MusicUrl(id) {
      // 音乐id
      // alert(id);
      console.log(id);
      const result = await reqMusicUrl({ id });
      console.log(111);
      if (result.status === 200) {
        this.musicUrl = result.data.data[0].url;
        // 音乐播放url  存到vuex里面
        this.$store.commit("playMusicUrl", this.musicUrl);
        localStorage.setItem("url", JSON.stringify(this.musicUrl));
        console.log(this.musicUrl);
      }
    },
    // 获取歌词
    async musicLyrics(id) {
      const result = await reqMusicLyrics({ id });
      if (result.status === 200) {
        // console.log(result.data.lrc.lyric);
        this.songLyrics = result.data.lrc.lyric;
        // 把歌词放到vuex里面
        this.$store.commit("getLyrics", this.musicUrl);
        // this.audio[0].lrc = this.songLyrics;
        // 歌词
        // console.log(this.audio[0].lrc);
      }
    },
    // 获得fm
    async getFM() {
      const res = await reqPrivateFMs();
      console.log(res);
      if (res.status === 200) {
        // console.log(res.data.data);
        this.reqPrivateFM = res.data.data;
        console.log(this.reqPrivateFM);
      }
    },
  },
  created() {
    this.getFM();
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
.list-box {
  text-align: center;
}
.list-img {
  width: 80%;
  margin-top: 100px;
}
</style>
