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
      <div class="MusicCategorySmall" @click="goSongList">
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

    <!-- mv -->
    <div class="home-mvs">
      <div class="home-mv" v-for="(item, index) in HQmv" :key="index">
        <img :src="item.picUrl" alt="" @click="goHomeMv(item.id)" />
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
import { reqMvs } from "../../api/mv";

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
      HQmv: "",
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goHomeMv(id) {
      this.$router.push(`/homeMv/${id}`);
    },
    // 点击歌单跳转歌单列表
    goSongList() {
      this.$router.push("/songList");
    },
    // 搜索框跳转
    url_search() {
      this.$router.push("/search");
    },
    // 私人fm跳转歌曲详情
    goFM() {
      this.$router.push("/fm");
    },
    // 轮播图
    async reqBannerswip() {
      const result = await reqBannerswip();
      // console.log(result);
      if (result.status === 200) {
        // console.log(result.data);
        this.reqBannerswips = result.data.banners;
        // console.log(this.reqBannerswips);
      }
    },

    async getRecsong() {
      let res = await reqRecsongs({ limit: 6 });
      // console.log(res);
      if (res.status === 200) {
        this.recsongs = res.data.result;
        // console.log(this.recsongs);
      }
    },
    goListDetail(id) {
      // console.log(id);
      this.$router.push({ path: `/listdetail/${id}` });
    },
    // 推荐mv接口
    async getMv() {
      const res = await reqMvs();
      // console.log(res.data.result);
      this.HQmv = res.data.result;
    },
  },
  //点击视频跳转到mv页面

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
    this.getMv();
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
.home-mvs {
  // background: black;
  padding-bottom: 200px;
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
  // background: orange;
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.MusicCategorySmall {
  // background: cornflowerblue;
  text-align: center;
  // width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.recsonglist {
  .main {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        width: 120px;
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
  }
  p,
  i {
    font-size: 12px;
  }
}
</style>
