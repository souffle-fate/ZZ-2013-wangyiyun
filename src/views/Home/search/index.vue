<template>
  <div id="search">
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

    <!-- 热搜榜单 -->
    <!-- <el-card class="box-card">
      <div v-for="(item, index) in hotMusicList" :key="index" class="text item">
        {{ index + 1 }} {{ item.searchWord }}
        <img :src="item.iconUrl" alt="" class="songImg" />
        <span class="hotHeight"> {{ item.score }} </span>
        <p class="songIntroduction">{{ item.content }}</p>
      </div>
    </el-card> -->
    <!-- 搜索歌曲 -->
    <!-- <div class="searchGList" ></div> -->
    <!-- 搜索歌曲---列表 -->
    <div
      class="MusicList"
      v-for="(item, index) in MusicList.slice(0, 11)"
      :key="index"
      @click="MusicListXQ(item.id)"
    >
      <p>{{ item.name }}</p>
      <span>{{ item.artists[0].name }}-</span>
      <span>{{ item.album.name }}-</span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { Search } from "vant";
import { reqSearchMusic, reqSearchHotMusic } from "../../../api/music";
import { Toast } from "vant";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      value: "",
      hotMusicList: "",
      MusicList: "",
      type: 1,
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 搜索歌曲建议接口
    // reqSearch() {
    //   console.log("qwertyui");
    // },
    // async reqSearch(value) {
    //   // console.log(value, 11111);
    //   const res = await reqSearchproposal({ keywords: value, type: this.type });
    //   console.log(res);
    // },

    //回到首页
    goHome() {
      this.$router.push("/home");
    },
    //点击歌曲跳转响应歌曲播放页面
    MusicListXQ(id) {
      // const res = await reqMusicDetails({});
      this.$router.push({
        path: `/musicXQ/${id}`,
      });
      // alert(id);
      console.log(11);
    },

    //搜索歌曲
    async onSearch(val) {
      const result = await reqSearchMusic({ keywords: val });
      //   alert(val);
      // console.log(result);
      if (result.status === 200) {
        if (result.data.code === 400) {
          // console.log(111);
        } else {
          console.log(result.data.code);
          // console.log(result.data.result.songs);
          this.MusicList = result.data.result.songs;
          console.log(this.MusicList);
          this.$store.state.array1.push(this.MusicList);
          //   跳转到歌曲搜索详情
          // this.$router.push("/musiclist");
        }
      }
    },
    async reqSearchHotMic() {
      const result = await reqSearchHotMusic();
      if (result.status === 200) {
        // console.log(result.data);
        this.hotMusicList = result.data.data;
        // console.log(this.hotMusicList);
      }
    },
    onClickLeft() {
      this.$router.push("/home");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.onSearch(this.value);
    this.reqSearchHotMic();
    // this.reqSearch(this.value);
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
.text {
  font-size: 14px;
  font-weight: 600;
}

.item {
  padding: 5px 0;
}
.box-card {
  width: 480px;
}
.box-card div {
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
}
.SearchTop {
  background: #ec4141;
  color: white;
  border: none;
}
/* .searchMusic { */
/* position: fixed; */
/* top: 0; */
/* left: 0; */
/* } */
.hotHeight {
  color: #999;
  font-size: 10px;
  widows: 100%;
}
.songIntroduction {
  color: #666;
  font-size: 12px;
}
.songImg {
  width: 14px;
}
/* 搜索页面的头部 */
.search-nav {
  width: 100%;
  /* height: 80x; */
  background: #ec4141;
  display: flex;
  justify-content: space-around;
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
.search-input {
  width: 90%;
}
/* 搜索框款渲染样式 */
.searchGList {
  width: 90%;
  height: 70%;
  /* margin-left: 5%; */
  background: violet;
  position: absolute;
  top: 80px;
  left: 0;
}
.MusicList {
  width: 100%;
  height: 70%;
}

/* 搜索建议 */
</style>
