<template>
  <div class="playlist">
    <!--ru 封面 -->
    <div class="songlist">
      <div class="songlist-navtitle">
        <van-icon name="arrow-left" @click="gohome" />
        歌单
      </div>
      <div class="songlist-box">
        <div
          class="songlist-nav"
          v-for="(item, index) in reqSongLists.slice(0, 1)"
          :key="index"
        >
          <div class="songlist-nav-img">
            <img :src="item.coverImgUrl" alt="" />
          </div>
          <div @click="gojingpin" class="right">
            <div class="list">
              <span class="jingpingedan">精品歌单</span>
              <van-icon class="arrow" name="arrow" />
            </div>
            <div class="songlist-nav-name">
              <p class="itemname">{{ item.name }}</p>
              <p class="itemcopywriter">{{ item.copywriter }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 路由跳转  与二级路由选项卡 -->
    <div class="tabs">
      <div class="left">
        <span>{{ tab }}</span>
        <van-icon name="arrow" />
      </div>
      <div class="right">
        <span @click="changech">华语</span><span @click="changerap">说唱</span
        ><span @click="changelight">轻音乐</span>
      </div>
    </div>
    <!-- 歌单列表 -->
    <div class="listbox">
      <!--coverImgUrl 封面图地址 .name 歌单描述 .playCount 播放数 十万以上过滤器  .creator.nickname 出品人  -->
      <div class="main">
        <ul>
          <li
            v-for="(item, index) in playlistArr"
            :key="index"
            @click="goListDetail(item.id)"
          >
            <div class="imgbox">
              <img :src="item.coverImgUrl" alt="" />
              <span>
                <van-icon name="audio" />
                <i>{{ item.playCount | numFormat }}</i>
              </span>
              <p><van-icon name="contact" />{{ item.creator.nickname }}</p>
            </div>
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reqPlaylist, reqSongList } from "../../../api/playlist";
export default {
  components: {},
  props: {},
  filters: {
    numFormat(num) {
      if (parseInt(num) > 100000000) {
        return (parseInt(num) / 100000000).toFixed(1) + "亿";
      } else if (parseInt(num) > 10000) {
        return parseInt(parseInt(num) / 10000) + "万";
      }
    },
  },
  data() {
    return {
      reqSongLists: "",
      playlistArr: [],
      tab: "全部",
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
    //获取歌单
    async getPlaylist(str) {
      let res = await reqPlaylist({ order: "hot", cat: str });
      // console.log(res);
      if (res.data.code === 200) {
        this.playlistArr = res.data.playlists;
        // console.log(this.playlistArr);
      }
    },
    //获取歌单详情
    goListDetail(id) {
      // console.log(id);
      this.$router.push({ path: `/listdetail/${id}` });
    },
    //切换选项卡
    changech() {
      this.tab = "华语";
      this.getPlaylist(this.tab);
    },
    changerap() {
      this.tab = "说唱";
      this.getPlaylist(this.tab);
    },
    changelight() {
      this.tab = "轻音乐";
      this.getPlaylist(this.tab);
    },
    //点击返回按钮跳转首页
    gohome() {
      this.$router.push("/home");
    },
  },
  created() {
    this.getSongList();
    this.getPlaylist(this.tab);
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
<style scoped lang='scss'>
.header {
  width: 100%;
  height: 50px;
  background: rgb(223, 66, 56);
  z-index: 1000;
  position: fixed;
  span {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 25px;
    color: #fff;
    margin-right: 3px;
  }
  span:last-child {
    font-size: 18px;
  }
}
.songlist-navtitle {
  background: #000;
  height: 50px;
  line-height: 50px;
  color: #fff;
  padding-left: 10px;
}
.songlist-nav {
  background: #000;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-around;

  .songlist-nav-img {
    img {
      width: 160px;
    }
  }
  .right {
    .list {
      span,
      i {
        line-height: 30px;
        font-size: 20px;
        color: #fff;
      }
    }
    .songlist-nav-name {
      p {
        color: #fff;
        line-height: 30px;
      }
      p:last-child {
        color: rgb(164, 162, 147);
      }
    }
  }
}

.tabs {
  // padding-top: 50px;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  .left {
    font-size: 18px;
  }
  .right {
    span {
      display: inline-block;
      font-size: 14px;
      color: rgb(102, 102, 102);
      width: 50px;
      text-align: center;
      border-right: 1px solid rgb(235, 235, 235);
      // width: 30px;
    }
  }
}
.playlist {
  .main {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        width: 180px;
        margin-bottom: 15px;
        .imgbox {
          position: relative;
          span {
            position: absolute;
            top: 0;
            right: 5px;
            color: #fff;
          }
          p {
            position: absolute;
            bottom: 5px;
            left: 5px;
            color: #fff;
          }
        }
      }
    }
  }
  img {
    width: 180px;
    border-radius: 10px;
  }
  p,
  i {
    line-height: 20px;
    font-size: 12px;
  }
}
</style>