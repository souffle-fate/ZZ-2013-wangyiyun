<template>
  <div class="home">
    <router-view></router-view>
    <div class="home-barder">
      <van-icon class="wap-nav" name="wap-nav" />
      <van-search
        v-model="value"
        shape="round"
        background="#f34d3f"
        placeholder="请输入搜索关键词"
        @click="url_search"
      />
      <van-icon class="volume" name="volume" />
    </div>

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
      <div class="MusicCategorySmall" @click="gotoplist">
        <div class="MusicCategorySmallIcon">
          <van-icon name="bar-chart-o" />
        </div>
        <div class="MusicCategorySmallDesc">排行榜</div>
      </div>
    </div>
    <!-- jia 推荐歌单 -->
    <div class="recsonglist">
      <h2>
        <a href="">推荐歌单<van-icon name="arrow" /></a>
      </h2>
      <div class="main">
        <ul>
          <li
            v-for="(item, index) in recsongs"
            :key="index"
            @click="goListDetail(item.id)"
          >
            <div class="imgbox">
              <img :src="item.picUrl" alt="" />
              <span>
                <van-icon name="audio" />
                <i>{{ item.playCount | numFormat }}</i>
              </span>
            </div>
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- jia最新音乐  最新专辑-->
    <div class="latestsongs">
      <h2><a href="">最新专辑</a><van-icon name="arrow" /></h2>
      <div class="main">
        <ul>
          <!-- name 专辑名称 id专辑id  blurPicUrl 专辑封面图 .artist.name 专辑出品人 -->
          <li v-for="(item, index) in newestAl.slice(0, 6)" :key="index">
            <img :src="item.blurPicUrl" alt="" />
            <p>{{ item.artist.name }}</p>
            <p class="line2">{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- jia 主播电台 -->

    <div class="livefm">
      <h2><a href="">主播电台</a><van-icon name="arrow" /></h2>
      <div class="main">
        <ul>
          <!-- picUrl 封面图 name 电台描述  id电台id-->
          <li v-for="(item, index) in liveFMs" :key="index">
            <img :src="item.picUrl" alt="" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { Field } from "vant";
import { reqRecsongs } from "../../api/reclist";
import { reqBannerswip } from "../../api/home";
import { reqNewestAl } from "../../api/newestAl";
import { reqLiveFM } from "../../api/livefm";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      recsongs: [],
      value: "",
      reqBannerswips: "",
      newestAl: [],
      liveFMs: [],
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 搜索框跳转
    url_search() {
      this.$router.push("/search");
    },
    // 私人fm跳转歌曲详情
    goFM() {
      this.$router.push("/fm");
    },
    gotoplist() {
      this.$router.push({ path: "/toplist" });
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
    //获取推荐歌单
    async getRecsong() {
      let res = await reqRecsongs({ limit: 6 });
      // console.log(res);
      if (res.status === 200) {
        this.recsongs = res.data.result;
        // console.log(this.recsongs);
      }
    },
    //获取最新专辑
    async getNewestAl() {
      let res = await reqNewestAl();
      // console.log(res);
      if (res.data.code === 200) {
        this.newestAl = res.data.albums;
        // console.log(this.newestAl);
      }
    },
    //获取主播电台
    async getLiveFM() {
      let res = await reqLiveFM();
      // console.log(res);
      if (res.data.code === 200) {
        this.liveFMs = res.data.result;
        console.log(this.liveFMs);
      }
    },
    //获取歌单详情
    goListDetail(id) {
      // console.log(id);
      this.$router.push({ path: `/listdetail/${id}` });
    },
  },

  filters: {
    numFormat(num) {
      if (parseInt(num) > 100000000) {
        return (parseInt(num) / 100000000).toFixed(1) + "亿";
      } else if (parseInt(num) > 10000) {
        return parseInt(parseInt(num) / 10000) + "万";
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.reqBannerswip();
    this.getRecsong();
    this.getNewestAl();
    this.getLiveFM();
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

<style scoped lang='scss'>
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
  margin-top: 10px;
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

.recsonglist,
.latestsongs,
.livefm {
  .main {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        width: 120px;
        margin-bottom: 15px;
        .imgbox {
          position: relative;
          span {
            position: absolute;
            top: 0;
            right: 5px;
            color: #fff;
          }
        }
      }
    }
  }
  img {
    width: 120px;
    border-radius: 10px;
  }
  p,
  i {
    line-height: 20px;
    font-size: 12px;
  }
}
.latestsongs {
  .main {
    .line2 {
      color: rgb(135, 135, 135);
    }
  }
}
</style>
