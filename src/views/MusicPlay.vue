<template>
  <div class="Pmusic">
    <!-- <aplayer :music="audio[0]"></aplayer> -->
    <!-- <audio
      src="http://m8.music.126.net/20210413202913/f5a637da08c6f5ddc7dff67d26aa1a5f/ymusic/ts/free/d37f5180192c6ee361e72c1978d242de.mp3"
      controls="controls"
      class="audio"
    ></audio> -->
    <div>
      <aplayer
        :music="audio[0]"
        :lrcType="3"
        :showlrc="true"
        class="bofangqi"
        :list="musicList"
        v-if="flag"
      ></aplayer>
      <!-- <aplayer :audio="audio" :lrcType="3" ref="aplayer" /> -->

      <!-- <div class="dj" @click="tz">查看评论</div> -->
    </div>
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
          title: "",
          artist: "",
          url: this.$store.state.MusicUrl,
          pic: "",
          lrc: "",
        },
      ],
      showLrc: true,
      flag: true,
      musicList: [
        {
          title: "",
          artist: "",
          src: "",
          pic: "",
        },
      ],
    };
  },
  components: {
    aplayer,
  },
  methods: {
    tz() {
      this.$router.replace("/musiccomment");
    },
    // 歌曲简略信息
    async musicDetails() {
      // 必选参数 : ids: 音乐 id, 如 ids=347230
      const ids = this.$store.state.musicid;
      console.log(ids);
      const result = await reqMusicDetails({ ids });
      if (result.status === 200) {
        // console.log(11);
        // console.log(result);
        //歌曲背景图
        this.picUrl = result.data.songs[0].al.picUrl;
        // console.log(this.picUrl);
        this.audio[0].pic = this.picUrl;
        // console.log(this.audio[0].pic);

        //歌名
        this.name = result.data.songs[0].name;
        this.audio[0].title = this.name;
        // console.log(this.audio[0].title);
        //歌手名
        this.singerName = result.data.songs[0].ar[0].name;
        this.audio[0].artist = this.singerName;
        // console.log(this.audio[0].artist);
        // 歌曲id
        this.id = result.config.params.ids;
        // 调用了 获取音乐播放url的方法
        this.MusicUrl(this.id);
        this.musicLyrics(this.id);
        // console.log(this.audio);
        this.flag = true;
      }
    },
    // 获取音乐播放url
    async MusicUrl(id) {
      const result = await reqMusicUrl({ id });
      // console.log(id);
      // console.log(this.id);
      if (result.status === 200) {
        // console.log(result.data.data[0].url);
        this.musicUrl = result.data.data[0].url;
        // 音乐播放url
        this.$store.commit("playMusicUrl", this.musicUrl);
        // this.audio[0].url = this.musicUrl;
        console.log(this.audio[0].url);
        // alert("欢迎进入播放页面");
      }
    },
    // 获取歌词
    async musicLyrics(id) {
      const result = await reqMusicLyrics({ id });
      if (result.status === 200) {
        // console.log(result.data.lrc.lyric);
        this.songLyrics = result.data.lrc.lyric;
        this.audio[0].lrc = this.songLyrics;
        // alert(this.$store.state.MusicUrl);
        // alert(111);

        // 歌词
        // console.log(this.audio[0].lrc);
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
  top: 45px;
  margin: 0;
}
.dj {
  /* width: 80px; */
  height: 20px;
  position: fixed;
  padding: 2px;
  bottom: 118px;
  right: 0;
  border: 1px red solid;
  border-radius: 10px;
  /* background: yellowgreen; */
}
.bofangqi {
  margin-bottom: 10px;
}
</style>
