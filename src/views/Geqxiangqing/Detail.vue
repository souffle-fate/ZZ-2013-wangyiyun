<template>
  <div :style="note" id="app">
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
    <!-- <div class="gc">
      <div class="gc_a">
        <p v-for="(item, index) in songLyricsarr" :key="index">
          {{ item }}
        </p>
      </div>
    </div> -->
    <div class="con">
      <img :src="picUrl" alt="" class="con_pic" />
    </div>
    <!-- 底部 -->
    <div class="dibu">
      <div class="db">
        <span @click="sss">
          <van-icon
            name="like"
            color="red"
            size="30px"
            v-if="dj"
            @click="dj = !dj"/>
          <van-icon name="like-o" size="30px" v-else @click="dj = !dj"
        /></span>
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
import {
  reqMusicDetails,
  reqMusicUrl,
  reqMusicLyrics,
  reqLikeMusic,
} from "../../api/music";
import { getToken } from "../../utils/util";
export default {
  components: {
    Pmusic,
  },
  data() {
    //这里存放数据
    return {
      dj: false,
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
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "auto 100% ",
        // backgroundPosition: "center",
        // backdropFilter: blur(15 + "px"),
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
      this.$router.push("/");
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
        this.note.backgroundColor = "#fff";
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
    // 判断登录
    djs() {
      const res = getToken();
      console.log(res);
      if (res == null) {
        this.$router.push("/login");
      } else {
        console.log("登陆");
        // this.LikeMusic();
      }
    },
    sss() {
      console.log("点击sss");
      this.LikeMusic();
    },
    async LikeMusic() {
      const id = this.$store.state.musicid;
      const result = await reqLikeMusic({ id });
      if (result.status === 200) {
        console.log(result);
      }
    },
  },
  created() {
    this.musicDetails();
  },
};
</script>

<style scoped>
#app {
  margin: 0 auto;
  height: 100%;
}
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
  background: #ec4141;
}
.db .van-icon {
  width: 15%;
}
.dibu {
  background: #ec4141;
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
.con {
  width: 230px;
  height: 230px;
  background-color: #2c2c2e;
  z-index: 22;
  /* margin: 0 auto; */
  /* margin: 100px auto; */
  position: fixed;
  top: 250px;
  left: 22%;
  overflow: hidden;
  border-radius: 50%;
  animation: turn 10s linear infinite;
}
.con_pic {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 25px 25px;
}
@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
