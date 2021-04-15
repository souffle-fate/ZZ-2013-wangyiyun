<template>
  <div class="listdetailbox">
    <div class="listdetail" v-if="resObj">
      <!-- playlist.coverImgUrl 封面图  shareCount 分享总量 commentCount 总评论数 .name 右侧描述  收藏量 subscribedCount   subscribed是否收藏
      subscribers 收藏人   trackCount歌单歌曲个数 trackIds歌单歌曲id
      出品人 小下标  playlist.creator.avatarDetail.identityIconUrl     出品人头像 .avatarUrl   出品人名称  .nickname -->
      <!-- 封面 -->
      <div class="listtit">
        <div class="top">
          <div class="left">
            <img :src="resObj.coverImgUrl" alt="" />
          </div>
          <div class="right">
            <p>{{ resObj.name }}</p>
            <p>
              <img :src="resObj.creator.avatarUrl" alt="" />
              <span>{{ resObj.creator.nickname }}<van-icon name="arrow"/></span>
            </p>
          </div>
        </div>
        <div class="bottom">
          <ul>
            <li>
              <van-icon name="chat-o" />
              <span>{{ resObj.commentCount }}</span>
            </li>
            <li>
              <van-icon name="share-o" />
              <span>{{ resObj.shareCount }}</span>
            </li>
            <li>
              <van-icon name="down" />
              <span>下载</span>
            </li>
            <li>
              <van-icon name="certificate" />
              <span>多选</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 列表歌曲 -->
      <div class="playlist">
        <div class="top">
          <div class="left">
            <van-icon name="play-circle-o" />
            <i>播放全部</i><span>(共{{ resObj.trackCount }}首)</span>
          </div>
          <div class="right">
            <van-button type="primary"
              >+收藏({{ resObj.subscribedCount }})</van-button
            >
          </div>
        </div>
        <ul class="bottom">
          <!--  .name 歌曲名称  .id歌曲id .mv mv的id可能为空  .al.name 专辑名称  .ar演唱者 数组  .ar.name演唱者  -->
          <li v-for="(item, index) in tracks" :key="index" @click="tz(item.id)">
            <div class="left">
              <p>{{ index + 1 }}</p>
              <div>
                <span>{{ item.name | ellipsisSong }}</span>
                <!-- <span v-for="(subitem, subindex) in item.ar" :key="subindex"> -->
                <!-- {{ item.ar[0].name }}{{ item.ar[1].name }} -->
                <!-- </span> -->
                <div class="info">
                  <span>{{ item.ar[0].name }}</span>
                  <span v-if="item.ar.length == 2">/{{ item.ar[1].name }}</span>
                  <span v-if="item.al.name"
                    >-{{ item.al.name | ellipsisArt }}</span
                  >
                </div>
              </div>
            </div>
            <div class="right">
              <span><van-icon name="video-o" v-show="item.mv"/></span>
              <span><van-icon name="arrow-up"/></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reqListDetail, reqSongDetail } from "../../api/reclist";
import {
  reqMusicUrl,
  // 获取音乐url,
  reqMusicLyrics, //获取歌词
} from "../../api/music";

export default {
  components: {},
  filters: {
    ellipsisSong(str) {
      if (!str) return ""; //如果没有返回空
      if (str.length > 28) {
        return str.slice(0, 28) + "..."; //长度大于10的后面用......代替
      }
      return str;
    },
    ellipsisArt(str) {
      if (!str) return ""; //如果没有返回空
      if (str.length > 10) {
        return str.slice(0, 10) + "..."; //长度大于10的后面用......代替
      }
      return str;
    },
  },
  props: {},
  data() {
    return {
      id: this.$route.params.id,
      trackIds: [],
      resObj: null,
      trackIdsStr: "",
      tracks: [],
      musicUrl: "",
      songLyrics: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    tz(ids) {
      // const uid = this.$route.params.id;
      // 把歌曲ID存到vuex里面
      console.log(ids, 111);
      this.$store.commit("getMusicId", ids);
      this.MusicUrl(ids);
      this.musicLyrics(ids);
      this.$router.push(`/Detail`);
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
    async getListDetail(id) {
      // console.log(id);
      let res = await reqListDetail({ id: id, s: 5 });
      // console.log(res);
      if (res.data.code === 200) {
        this.resObj = res.data.playlist;
        // console.log(this.resObj);
        this.trackIds = this.resObj.trackIds.map((item) => {
          return item.id;
        });
        // console.log(this.trackIds);
        this.trackIdsStr = this.trackIds.join(",");
        reqSongDetail({ ids: this.trackIdsStr }).then((res) => {
          console.log(res);
          if (res.data.code === 200) {
            this.tracks = res.data.songs;
            console.log(this.tracks);
          }
        });
      }
    },
  },
  created() {
    this.getListDetail(this.id);
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
<style scoped lang="scss">
.listdetailbox {
  background: #000;
}
.listdetail {
  padding-bottom: 50px;
  .listtit {
    min-height: 230px;

    .top {
      overflow: hidden;
      padding: 10px 0px;
      .left {
        float: left;
        margin: 15px 10px;
        img {
          width: 120px;
        }
      }
      .right {
        margin-top: 30px;
        p:first-child {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 30px;
          line-height: 25px;
        }
        p:last-child {
          // position: relative;
          font-size: 14px;
          color: rgb(208, 218, 216);
          img:first-child {
            width: 30px;
            border-radius: 30px;
          }
          // img:nth-child(2) {
          //   width: 10px;
          //   position: absolute;
          //   right: 203px;
          //   bottom: 8px;
          // }
          span {
            display: inline-block;
            margin-left: 10px;
          }
        }
      }
    }
    .bottom {
      color: #fff;
      ul {
        width: 100%;
        display: flex;
        li {
          flex: 1;
          height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          font-size: 30px;
          van-icon {
            color: #fff;
          }
          span {
            font-size: 12px;
            line-height: 30px;
            color: rgb(208, 218, 216);
          }
        }
      }
    }
  }
}

.playlist {
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  background: #fff;
  .top {
    height: 50px;
    border-bottom: 1px rgb(248, 248, 248) solid;
    .left {
      float: left;
      line-height: 50px;
      font-size: 14px;
      van-icon {
        color: rgb(109, 109, 109);
      }
      i {
        margin-left: 5px;
      }
      span {
        color: rgb(164, 164, 164);
      }
    }
    .right {
      float: right;
      font-size: 20px;
    }
  }
  .bottom {
    li {
      border-bottom: 1px rgb(248, 248, 248) solid;
      height: 60px;
      line-height: 60px;
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      .left {
        display: flex;
        p {
          color: rgb(153, 153, 153);
          width: 40px;
          text-align: center;
        }
        & > div {
          line-height: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .info {
            color: rgb(153, 153, 153);
          }
        }
      }
      .right {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        span {
          width: 25px;
        }
      }
    }
  }
}
</style>
