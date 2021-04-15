<template>
  <div class="playlist">
    <!-- jia全部歌单 -->
    <div class="header">
      <span><van-icon name="arrow-left" @click="gohome" /></span>
      <span>{{ this.$route.meta.title }}</span>
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
import { reqPlaylist } from "../../../api/playlist";
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
      playlistArr: [],
      tab: "全部",
    };
  },
  computed: {},
  watch: {},
  methods: {
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
.tabs {
  padding-top: 50px;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  .left {
    font-size: 18px;
  }
  .right {
    // width: 160px;
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