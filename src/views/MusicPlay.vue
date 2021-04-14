<template>
  <div class="Pmusic" v-if="$route.meta.showTabbar">
    <aplayer :music="audio[0]"></aplayer>
    <div class="dj" @click="tz"></div>
  </div>
</template>

<script>
import { reqMusicDetails, reqMusicUrl, reqMusicLyrics } from "../api/music";
import aplayer from "vue-aplayer";
export default {
  data() {
    return {
      //歌曲背景图
      picUrl: "",
      //   歌名
      name: "",
      //歌手名
      singerName: "",
      //   音乐 id
      id: "",
      //音乐播放链接
      musicUrl: "",
      fixed: true,
      placeholder: true,
      // 歌词 字符串
      songLyrics: "",
      // 歌词 数组
      songLyricsarr: "",
      // 音频列表
      audio: [
        {
          title: this.name,
          artist: this.singerName,
          url: this.musicUrl,
          pic: this.picUrl,
          lrc: this.songLyrics,
        },
      ],
    };
  },
  components: {
    aplayer,
  },
  methods: {
    tz() {
      this.$router.replace("/detail");
    },
    // 歌曲简略信息
    async musicDetails() {
      // 必选参数 : ids: 音乐 id, 如 ids=347230
      const result = await reqMusicDetails({ ids: 347230 });
      if (result.status === 200) {
        // console.log(result.config.params.ids);
        //歌曲背景图
        this.picUrl = result.data.songs[0].al.picUrl;
        this.audio[0].pic = this.picUrl;
        //歌名
        this.name = result.data.songs[0].name;
        this.audio[0].title = this.name;
        //歌手名
        this.singerName = result.data.songs[0].ar[0].name;
        this.audio[0].artist = this.singerName;
        // 歌曲id
        this.id = result.config.params.ids;
        // 调用了 获取音乐播放url的方法
        this.MusicUrl(this.id);
        this.musicLyrics(this.id);
      }
    },
    // 获取音乐播放url
    async MusicUrl(id) {
      const result = await reqMusicUrl({ id });
      console.log(this.id);
      if (result.status === 200) {
        // console.log(result.data.data[0].url);
        this.musicUrl = result.data.data[0].url;
        // 音乐播放url
        this.audio[0].url = this.musicUrl;
        console.log(this.musicUrl);
      }
    },
    // 获取歌词
    async musicLyrics(id) {
      const result = await reqMusicLyrics({ id });
      if (result.status === 200) {
        // console.log(result.data.lrc.lyric);
        this.songLyrics = result.data.lrc.lyric;
        this.audio.lrc = this.songLyrics;

        // console.log(this.songLyrics);
      }
      // /必选参数 : id: 音乐 id
    },
  },
  created() {
    this.musicDetails();
  },
};
</script>

<style scoped>
.aplayer {
  width: 100%;
  position: fixed;
  bottom: 45px;
}
.dj {
  width: 45%;
  height: 35px;
  position: fixed;
  bottom: 80px;
  right: 0;
}
</style>
