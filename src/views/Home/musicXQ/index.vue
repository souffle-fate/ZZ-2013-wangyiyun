<template>
  <div id="box">
    <!-- 搜索---导航 -->
    <div class="search-nav">
      <van-icon name="arrow-left" class="arrow-left" @click="goHome" />
      <van-search
        v-model="value"
        shape="round"
        background="#ec4141"
        placeholder="请输入搜索关键词"
        class="search-input searchMusic"
        @search="onSearch"
      />
    </div>
    <van-tabs :swipeable="true">
      <!-- 单曲页面 -->
      <van-tab title="单曲">
        <div v-for="(item, index) in hotMusic" :key="index">
          <van-cell
            center
            :title="item.name"
            value="..."
            :label="item.artists[0].name"
            @click="musicId(item.artists[0].id)"
          />
        </div>

        <!-- item.name.artists[0].name" -->
      </van-tab>
      <van-tab title="歌手">
        <div v-for="(item, index) in Singer" :key="index" class="singr">
          <img :src="item.picUrl" alt="" />
          <div class="gs">{{ item.name }}</div>
        </div>
      </van-tab>
      <van-tab title="专辑" class="zhuanji">
        <div v-for="(item, index) in Album" :key="index" class="Album">
          <img :src="item.picUrl" alt="" />
          <div class="zj">{{ item.artist.name }}</div>
          <div class="geshou">{{ item.name }}</div>
        </div>
      </van-tab>
      <van-tab title="用户">
        <div v-for="(item, index) in user" :key="index">
          <img :src="item.avatarUrl" alt="" />
          <div class="yh">{{ item.nickname }}</div>
        </div>
      </van-tab>
      <van-tab title="电台">
        <div v-for="(item, index) in RadioStation" :key="index">
          <img :src="item.picUrl" alt="" />
          <div class="yh">{{ item.dj.nickname }}</div>
        </div>
      </van-tab>
      <van-tab title="视频">
        <div v-for="(item, index) in MV" :key="index">
          <img :src="item.coverUrl" alt="" class="Img" />
          <div class="Mvtitle">{{ item.title }}</div>
          <div class="MvUserName">by {{ item.creator[0].userName }}</div>
        </div>
      </van-tab>
      <van-tab title="歌词" class="GC">
        <div class="biaoti">
          <span>音乐标题</span>
          <span>歌手</span>
          <!-- <span>专辑</span> -->
        </div>
        <div v-for="(item, index) in Lyrics" :key="index" class="Lyrics">
          <div>
            <span>{{ item.name }}</span>
            <span>{{ item.artists[0].name }}</span>
            <!-- <span>{{ item.album.name }}</span> -->
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <!-- x下面的列表 -->
  </div>
</template>

<script>
// 搜索音乐接口
import { reqSearchMusic } from "../../../api/music";

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  // props: { MusicList },
  data() {
    //这里存放数据
    return {
      value: "",
      hotMusic: "",
      musicList: "",
      // 歌手
      Singer: [],
      // 专辑
      Album: [],
      // 用户
      user: [],
      // 电台
      RadioStation: [],
      // MV
      MV: [],
      // 歌词
      Lyrics: [],
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //点击歌曲，获取歌曲id
    musicId(id) {
      console.log(id);
      // this.$store.commit("getMusicId", ids);
      this.$router.push(`/Detail`);
    },
    // 回到上一页
    goHome() {
      this.$router.go(-1);
    },
    // 搜索歌曲
    async SearchMusic(val) {
      // alert(val);
      // console.log(this.value);
      if (this.value) {
        const result = await reqSearchMusic({ keywords: val });
        // console.log(result.data.result.songs);
        this.hotMusic = result.data.result.songs;
      } else {
        // alert("请输入内容");
        console.log("输入框没有内容");
      }
    },
    // 搜索歌手
    async SearchSinger(val) {
      if (this.value) {
        const result = await reqSearchMusic({ keywords: val, type: 100 });
        // console.log(result.data.result.artists);
        this.Singer = result.data.result.artists;
        // console.log(this.Singer);
      } else {
        // alert("请输入内容");
        console.log("输入框没有内容");
      }
    },
    // 搜索专辑
    async SearchAlbum(val) {
      if (this.value) {
        const result = await reqSearchMusic({ keywords: val, type: 10 });
        // console.log(result.data.result.albums);
        this.Album = result.data.result.albums;
      } else {
        // alert("请输入内容");
        console.log("输入框没有内容");
      }
    },
    // 搜索用户
    async SearchUser(val) {
      if (this.value) {
        const result = await reqSearchMusic({ keywords: val, type: 1002 });
        // console.log(result.data.result.userprofiles);
        this.user = result.data.result.userprofiles;
        // console.log(this.User);
      } else {
        // alert("请输入内容");
        console.log("输入框没有内容");
      }
    },
    // 搜索电台
    async SearchRadioStation(val) {
      if (this.value) {
        const result = await reqSearchMusic({ keywords: val, type: 1009 });
        // console.log(result.data.result.djRadios);
        this.RadioStation = result.data.result.djRadios;
      } else {
        // alert("请输入内容");
        console.log("输入框没有内容");
      }
    },
    // 搜索MV
    async SearchMV(val) {
      if (this.value) {
        const result = await reqSearchMusic({ keywords: val, type: 1014 });
        // console.log(result.data.result.videos);
        this.MV = result.data.result.videos;
      } else {
        // alert("请输入内容");
        console.log("输入框没有内容");
      }
    },
    // 搜索歌词
    async SearchLyrics(val) {
      if (this.value) {
        const result = await reqSearchMusic({ keywords: val, type: 1006 });
        // console.log(result.data.result.songs);
        this.Lyrics = result.data.result.songs;
      } else {
        // alert("请输入内容");
        console.log("输入框没有内容");
      }
    },

    onSearch() {
      // 搜索歌曲
      this.SearchMusic(this.value);
      // 搜索歌手
      this.SearchSinger(this.value);
      // 搜索专辑
      this.SearchAlbum(this.value);
      // 搜索用户
      this.SearchUser(this.value);
      // 搜索电台
      this.SearchRadioStation(this.value);
      // 搜索MV
      this.SearchMV(this.value);
      // 搜索歌词
      this.SearchLyrics(this.value);
    },
    music() {
      const aa = this.$store.state.array2;
      // 通过热搜出来的关键词
      // console.log(aa);
      if (aa.length === 0) {
        // 判断一下vuex里面有没有数据
        console.log("vuex里面没有数据");
      } else {
        this.hotMusic = aa;
        console.log(this.hotMusic);
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.xiangq(id);
    this.music();
    this.onSearch();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
#search {
  padding-bottom: 50px;
  /* padding-top: 50px; */
}
/* 搜索页面的头部 */
.search-nav {
  width: 100%;
  /* height: 80x; */
  background: #ec4141;
  display: flex;
  justify-content: space-around;
}
.search-input {
  width: 90%;
}
.arrow-left {
  width: 10%;
  height: 80x;
  line-height: 80px;
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  color: white;
}
.van-cell {
  border-bottom: 1px solid #ccc;
}
.singr {
  overflow: hidden;
}
img {
  width: 80px;
  margin-bottom: 10px;
  /* display: inline-block; */
}
.gs,
.yh {
  float: right;
  line-height: 80px;
}
.geshou {
  float: right;
  line-height: 80px;
  margin-right: 20px;
}
.zj {
  float: right;
  line-height: 80px;
}
.zhuanji {
  width: 100%;
  height: 80px;
}
.Img {
  width: 100%;
}
.MvUserName {
  font-size: 12px;
  color: #ccc;
  margin-bottom: 20px;
  float: right;
}
.GC span {
  width: 50%;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  margin-bottom: 5px;
  text-align: center;
}
.biaoti span {
  margin-bottom: 5px;
}
.Lyrics {
  border: solid 1px #ccc;
}
</style>
