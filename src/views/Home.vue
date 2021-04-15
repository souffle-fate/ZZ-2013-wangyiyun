<template>
  <div class="home">
    <router-view></router-view>
    <div class="home-barder">
      <van-icon class="wap-nav" name="wap-nav" />
      <van-search
        class="search"
        v-model="value"
        placeholder="请输入搜索关键词"
        @click="url_search"
      />
      <van-icon class="volume" name="volume" />
    </div>
    <!-- 侧边栏 -->
    <div class="mask"></div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in reqBannerswips" :key="index">
        <img :src="item.imageUrl" alt="" />
        <!-- <p>{{ item.encodeId }}</p> -->
      </van-swipe-item>
    </van-swipe>
    <!-- 音乐分类 -->

    <div class="MusicCategory">
      <div class="MusicCategorySmall" @click="goFM">
        <div class="MusicCategorySmallIcon">
          <van-icon class="video" name="video-o" />
        </div>
        <div class="MusicCategorySmallDesc">私人FM</div>
      </div>
      <div class="MusicCategorySmall">
        <div class="MusicCategorySmallIcon">
          <van-icon name="notes-o" />
        </div>
        <div class="MusicCategorySmallDesc">每日推荐</div>
      </div>
      <div class="MusicCategorySmall">
        <div class="MusicCategorySmallIcon">
          <van-icon name="bullhorn-o" />
        </div>
        <div class="MusicCategorySmallDesc">歌单</div>
      </div>
      <div class="MusicCategorySmall">
        <div class="MusicCategorySmallIcon">
          <van-icon name="bar-chart-o" />
        </div>
        <div class="MusicCategorySmallDesc">排行榜</div>
      </div>
    </div>

    <!-- <van-cell title="单元格" icon="shop-o" @click="url_search">
      使用 right-icon 插槽来自定义右侧图标
      <template #right-icon>
        <van-icon name="search" class="search-icon" />
      </template>
    </van-cell> -->
  </div>
</template>

<script>
import { reqBannerswip } from "../api/home";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { Field } from "vant";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      value: "",
      reqBannerswips: "",
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goFM() {
      this.$router.push("/list");
    },
    async reqBannerswip() {
      // console.log(111);
      const result = await reqBannerswip();
      // console.log(result);
      if (result.status === 200) {
        // console.log(result.data);
        this.reqBannerswips = result.data.banners;
        // console.log(this.reqBannerswips);
      }
    },

    url_search() {
      this.$router.push("/Search");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.reqBannerswip();
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
.home {
  position: relative;
}
.home .mask {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
.home-barder {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: rgb(243, 77, 64);
  padding-top: 15px;
  padding-bottom: 15px;
}
.wap-nav {
  font-size: 30px;
  line-height: 50px;
  color: white;
}
.search {
  width: 280px;
  border-radius: 50px;
}
.volume {
  font-size: 30px;
  line-height: 50px;
  color: white;
}
/* 轮播图 */
.my-swipe {
  /* margin-top: 20px; */
  background: darkblue;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 0px;
  text-align: center;
  /* background-color: #39a9ed; */
}
img {
  width: 100%;
}
/* 音乐类别 */
.MusicCategory {
  width: 100%;
  height: 90px;
  /* background: orange; */
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.MusicCategorySmall {
  /* background: cornflowerblue; */
  text-align: center;
}
.MusicCategorySmallIcon {
  text-align: center;
  width: 50px;
  height: 50px;
  line-height: 60px;
  background: rgb(243, 77, 64);
  border-radius: 50%;
  font-size: 30px;
  color: white;
}
.video {
  text-align: center;
  color: white;
}
</style>
