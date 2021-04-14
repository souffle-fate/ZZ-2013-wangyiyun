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
          url: "",
          pic: "",
          lrc: "",
        },
      ],
      showLrc: true,
      flag: true,
      musicList: [
        {
          title: "白羊",
          artist: "徐秉龙",
          src:
            "http://m8.music.126.net/20200607160502/d62b8d5dc9c90c93a151914be957a617/ymusic/25a2/4ff4/52fc/d664724d25de35a8d4e23c1b986c60b5.mp3",
          pic:
            "https://p1.music.126.net/tczb_7II9KzSuLQsVt89Gw==/109951163049336667.jpg",
        },
        {
          title: "说谎",
          artist: "林宥嘉",
          src:
            "http://m7.music.126.net/20200607161953/af2e67e22c2407fea966c46769106159/ymusic/05ee/4458/4a12/e3ea4813e0c4abafe6c3d40b13cb9f65.mp3",
          pic:
            "https://p2.music.126.net/mMZNB-jhYsw29K61QtopJA==/109951163187404137.jpg",
        },
        {
          title: "成都",
          artist: "赵雷",
          src:
            "http://m7.music.126.net/20200607162234/8629f14056f784879d33dedbab34bf03/ymusic/fa90/df9c/59f7/95c4a2802e0b9191ae1a048f127e53c5.mp3",
          pic:
            "https://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",
        },
        {
          title: "陪你到底",
          artist: "许华升",
          src:
            "http://m7.music.126.net/20200607161155/1ddfddaa4d9a7c3100c3e7329ce8e3da/ymusic/540f/005e/065e/ce65b58fea742cac390e1499eb32db98.mp3",
          pic:
            "https://p1.music.126.net/a7QkLGexMQGT2lF3mqcUdw==/109951163693319625.jpg",
        },
        {
          title: "广东爱情故事",
          artist: "雨神",
          src:
            "http://m7.music.126.net/20200607160858/6143003bbb9021f13678624978f9ba14/ymusic/c69c/aeed/2bd9/57487636f38ec8ef9355bf67d0741dfe.mp3",
          pic:
            "https://p1.music.126.net/gjvguk9I-QwuyWFjQHM9SA==/109951163189947600.jpg",
        },
        {
          title: "烟火里的尘埃",
          artist: "华晨宇",
          src:
            "http://m8.music.126.net/20200607161716/e2266bad871c28351a3ce257061b3310/ymusic/5d63/5150/0851/5f226aac018cafc2cb248f7d28fbd5b4.mp3",
          pic:
            "https://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg",
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
      const result = await reqMusicDetails({ ids: 347230 });
      if (result.status === 200) {
        console.log(11);
        // console.log(result);
        //歌曲背景图
        this.picUrl = result.data.songs[0].al.picUrl;
        // console.log(this.picUrl);
        this.audio[0].pic = this.picUrl;
        console.log(this.audio[0].pic);

        //歌名
        this.name = result.data.songs[0].name;
        this.audio[0].title = this.name;
        console.log(this.audio[0].title);
        //歌手名
        this.singerName = result.data.songs[0].ar[0].name;
        this.audio[0].artist = this.singerName;
        console.log(this.audio[0].artist);
        // 歌曲id
        this.id = result.config.params.ids;
        // 调用了 获取音乐播放url的方法
        this.MusicUrl(this.id);
        this.musicLyrics(this.id);
        console.log(this.audio);
        this.flag = true;
      }
    },
    // 获取音乐播放url
    async MusicUrl(id) {
      const result = await reqMusicUrl({ id });
      // console.log(this.id);
      if (result.status === 200) {
        // console.log(result.data.data[0].url);
        this.musicUrl = result.data.data[0].url;
        // 音乐播放url
        this.audio[0].url = this.musicUrl;
        console.log(this.audio[0].url);
      }
    },
    // 获取歌词
    async musicLyrics(id) {
      const result = await reqMusicLyrics({ id });
      if (result.status === 200) {
        // console.log(result.data.lrc.lyric);
        this.songLyrics = result.data.lrc.lyric;
        this.audio[0].lrc = this.songLyrics;
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
