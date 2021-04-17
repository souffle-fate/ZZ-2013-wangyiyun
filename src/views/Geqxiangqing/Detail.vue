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
    <!-- 转圈圈 -->
    <div class="con" v-if="flag">
      <img :src="picUrl" alt="" class="con_pic" />
    </div>
    <!-- 歌词 -->
    <div class="detail" v-else>
      <div class="song-title">
        <p ref="song">{{ song }}</p>
        <p ref="singer">{{ singer }}</p>
      </div>
      <div class="wrapper">
        <ul class="content">
          <li v-for="(item, index) of ms" :key="index">{{ item.c }}</li>
        </ul>
      </div>
    </div>

    <div>
      <p>查看歌词</p>
    </div>
    <!-- 底部 -->
    <div class="dibu">
      <div class="db">
        <span @click="sss">
          <van-icon
            name="like"
            color="white"
            size="30px"
            v-if="dj"
            @click="dj = !dj"/>
          <van-icon name="like-o" size="30px" v-else @click="dj = !dj"
        /></span>
        <van-icon name="down" size="30px" @click="flag = !flag" />
        <van-icon name="chat-o" size="30px" @click="tiaopinglun" />
        <van-icon name="ellipsis" size="30px" @click="chakangeci" />
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
import { Toast } from "vant";
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
      flag: true,
      // 进度条
      value: 50,
      Lrc: "",
      ms: [],
      song: "",
      singer: "",
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
    chakangeci() {
      this.$router.push("/geci");
      // alert(111);
    },
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
        // console.log(this.picUrl);
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
      // console.log(this.id);
      if (result.status === 200) {
        // console.log(result.data.data[0].url);
        this.musicUrl = result.data.data[0].url;
        // 音乐播放url
        // console.log(this.musicUrl);
      }
    },
    // 获取歌词
    async musicLyrics() {
      const id = this.$store.state.musicid;
      console.log(id);
      const result = await reqMusicLyrics({ id });

      if (result.status === 200) {
        // console.log(result.data.lrc.lyric);
        // 歌词的lrc格式
        this.songLyrics = result.data.lrc.lyric;
        var lrcs = this.songLyrics.split("\n"); //用回车拆分成数组
        for (var i in lrcs) {
          //遍历歌词数组
          lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
          var t = lrcs[i].substring(
            lrcs[i].indexOf("[") + 1,
            lrcs[i].indexOf("]")
          ); //取[]间的内容
          var s = t.split(":"); //分离:前后文字
          if (!isNaN(parseInt(s[0]))) {
            //是数值
            var arr = lrcs[i].match(/\[(\d+:.+?)\]/g); //提取时间字段，可能有多个
            var start = 0;
            for (var k in arr) {
              start += arr[k].length; //计算歌词位置
            }
            var content = lrcs[i].substring(start); //获取歌词内容
            for (var m in arr) {
              var tt = arr[m].substring(1, arr[m].length - 1); //取[]间的内容
              var ss = tt.split(":"); //分离:前后文字
              this.ms.push({
                //对象{t:时间,c:歌词}加入ms数组
                t: (parseFloat(ss[0]) * 60 + parseFloat(ss[1])).toFixed(3),
                c: content,
              });
            }
          }
        }

        // console.log(this.songLyrics);
        // const aaa = /(\[)[0-9]{2}:{1}[0-9]{2}.{1}[0-9]{3}(\])/g;
        // const dateStr = this.songLyrics.replace(aaa, ",");
        // this.songLyricsarr = dateStr.split(",");
      }
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
      const aaa = localStorage.getItem("cookie");
      const result = await reqLikeMusic({ id, cookie: aaa });
      if (result.status === 200) {
        console.log(result);
        Toast.success("收藏成功");
      }
    },
  },
  created() {
    this.musicDetails();
  },
};
</script>

<style scoped lang="scss">
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
  // background: #ec4141;
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
.detail {
  position: absolute;
  top: 1rem;
  bottom: 2.6rem;
  left: 0;
  right: 0;
  text-align: center;
  color: #000000;
  // background: violet;
}
.song-title {
  width: 100%;
  height: 2rem;
  /* // background-color: #eeefff; */
  p {
    width: 100%;
    line-height: 0.8rem;
    font-size: 18px;
    color: #ffd700;
    margin-top: 0.1rem;
    text-align: center;
    // background-color #fff
  }
}
.wrapper {
  // overflow: hidden;
  position: absolute;
  top: 2rem;
  right: 0;
  left: 0;
  height: 545px;
  // background-color yellow
  ul {
    line-height: 32px;
    width: 100%;
    padding-bottom: 100px;
    padding-top: 100px;
    // background-color red
    li {
      font-size: 16px;
      transition-duration: 1200ms;
      // background-color skyblue
      line-height: 25px;
    }
  }
}
</style>
