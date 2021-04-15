<template>
  <div :style="note">
    <van-nav-bar
      :title="name"
      name="arrow-left"
      left-arrow
      @click-left="onClickLeft"
      bind:click-right="onClickRight"
      :fixed="fixed"
      :placeholder="placeholder"
    />
    <!-- 歌词 -->
    <div class="gc">
      <!-- {{ songLyricsarr }} -->
      <div class="gc_a">
        <p v-for="(item, index) in songLyricsarr" :key="index">
          {{ item }}
        </p>
      </div>
    </div>
    <!-- 底部 -->
    <div class="dibu">
      <div class="db">
        <van-icon name="like-o" size="30px" />
        <van-icon name="down" size="30px" />
        <van-icon name="chat-o" size="30px" @click="tiaopinglun" />
        <van-icon name="ellipsis" size="30px" />
      </div>
    </div>
    <Pmusic></Pmusic>
  </div>
</template>

<script>
import Pmusic from "../MusicPlay";
import { reqMusicDetails, reqMusicUrl, reqMusicLyrics } from "../../api/music";
export default {
  components: {
    Pmusic,
  },
  data() {
    //这里存放数据
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
      // 进度条
      value: 50,
      note: {
        // backgroundImage: "url(" + this.picUrl + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100% ",
        backgroundPosition: "center",
        backdropFilter: blur(15 + "px"),
        // marginTop: "5px",
      },
    };
  },
  methods: {
    change1() {
      this.$refs.on.style.display = "block";
      this.$refs.off.style.display = "none";
    },
    change2() {
      this.$refs.on.style.display = "none";
      this.$refs.off.style.display = "block";
    },
    onClickLeft() {
      this.$router.go(-1);
      // console.log(11);
    },
    tiaopinglun() {
      this.$router.push("/musiccomment");
    },
    // 歌曲简略信息
    async musicDetails() {
      // 必选参数 : ids: 音乐 id, 如 ids=347230
      const ids = this.$store.state.musicid;
      console.log(ids);
      const result = await reqMusicDetails({ ids });
      console.log(result);
      if (result.status === 200) {
        // console.log(result.config.params.ids);
        //歌曲背景图
        this.picUrl = result.data.songs[0].al.picUrl;
        console.log(this.picUrl);
        // this.note.backgroundImage = "url(" + this.picUrl + ")";
        this.note.backgroundColor = "#ec4141";
        //歌名
        this.name = result.data.songs[0].name;
        //歌手名
        this.singerName = result.data.songs[0].ar[0].name;
        // 歌曲id
        this.id = result.config.params.ids;
        // 调用了 获取音乐播放url的方法
        this.MusicUrl(this.id);
        this.musicLyrics(this.id);
      }
    },
    // 获取音乐播放url
    async MusicUrl(id) {
      const ids = this.$store.state.musicid;
      console.log(ids);
      const result = await reqMusicUrl({ id });
      console.log(this.id);
      if (result.status === 200) {
        // console.log(result.data.data[0].url);
        this.musicUrl = result.data.data[0].url;
        // 音乐播放url
        console.log(this.musicUrl);
      }
    },
    // 获取歌词
    async musicLyrics(id) {
      const ids = this.$store.state.musicid;
      console.log(ids);
      const result = await reqMusicLyrics({ id });

      if (result.status === 200) {
        // console.log(result.data.lrc.lyric);
        this.songLyrics = result.data.lrc.lyric;
        console.log(this.songLyrics);
        const aaa = /(\[)[0-9]{2}:{1}[0-9]{2}.{1}[0-9]{3}(\])/g;
        const dateStr = this.songLyrics.replace(aaa, ",");
        // console.log(dateStr);
        // console.log(dateStr.split(","));
        this.songLyricsarr = dateStr.split(",");
        // arr.splice(0, 9);
        // console.log(arr.splice(0, 9));
      }
      // /必选参数 : id: 音乐 id
    },
    onChange(value) {
      // Toast("当前值：" + value);
      console.log(value);
    },
  },
  created() {
    this.musicDetails();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* .con{} */
.db {
  width: 100%;
  padding: 20px;
  position: fixed;
  bottom: 0;
  text-align: center;
  background: white;
}
.db .van-icon {
  width: 15%;
}
.dibu {
  background: white;
  height: 120px;
  overflow: hidden;
}
.gc {
  overflow: hidden;
  padding-top: 100px;
}
.gc_a {
  margin: 0 auto;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: 500;
}
</style>
