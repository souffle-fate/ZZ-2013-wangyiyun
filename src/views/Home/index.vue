<template>
  <div class="home">
    <router-view></router-view>

    <div class="home-barder">
      <van-icon class="wap-nav" name="wap-nav" />
      <van-button type="primary" text="" @click="toggle" />
      <van-overlay :show="show" @click="toggle" />
      <van-search
        v-model="value"
        shape="round"
        background="#f34d3f"
        placeholder="请输入搜索关键词"
        @click="url_search"
      />
      <van-icon class="volume" name="volume" />
    </div>
    <!-- 侧边框 -->
    <transition>
      <div class="side" v-if="flag">
        <div class="sidebox" ref="sb" @click="$router.push('/list')">
          <div style="height: 137px; width: 100%">
            <img
              :src="backgroundUrl"
              alt=""
              style="height: 100%; width: 100%"
            />
            <div class="sidelbox" style="width: 100%">
              <div
                style="
                  width: 60px;
                  height: 60px;
                  border: solid 1px;
                  border-radius: 70px;
                  overflow: hidden;
                "
              >
                <img
                  :src="avatarUrl"
                  alt=""
                  style="width: 100%; height: 100%"
                />
              </div>

              <p style="width: 100%; color: white">
                <span>{{ username }}</span>
                <i style="font-weight: bolder; font-style: italic">vip</i>
                <i style="font-weight: bolder; font-style: italic"
                  >lv{{ level }}</i
                >
                <i
                  class="fr"
                  style="
                    font-style: normal;
                    font-weight: 100;
                    width: 40px;
                    height: 15px;
                    margin-right: 20px;
                    color: white;
                  "
                  >签到</i
                >
              </p>
            </div>
          </div>
          <div class="box2" style="margin-bottom: 5px">
            <van-row class="vanrow">
              <van-col span="8">
                <van-icon name="envelop-o" style="line-height" />
                <i> 我的消息</i></van-col
              >
              <van-col span="8"></van-col>
              <van-col span="8" style="text-align: end"
                ><van-badge :content="20" />
              </van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="8"
                ><van-icon name="vip-card-o" /> <i>我的会员</i></van-col
              >
              <van-col span="8"></van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="8"
                ><van-icon name="shopping-cart-o" /> <i>商城</i></van-col
              >
              <van-col span="1"></van-col>
              <van-col span="15" style="text-align: end"
                ><i style="font-size: 9px; color: #999999">耳机0元限时购</i
                ><span
                  style="
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    border: solid 0.1px dashed;
                    overflow: hidden;
                  "
                  ><img
                    src="https://img1.baidu.com/it/u=1827090422,1046415074&fm=26&fmt=auto&gp=0.jpg"
                    alt=""
                    style="width: 20px; height: 20px" /></span
              ></van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="8"
                ><van-icon name="fire-o" /> <i>游戏推荐</i></van-col
              >
              <van-col span="8"></van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="11">
                <van-icon name="ecard-pay" /> <i>在线听歌免费</i></van-col
              >
              <van-col span="5"> </van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
          </div>
          <div class="box2" style="margin-bottom: 5px">
            <van-row class="vanrow">
              <van-col span="8">
                <van-icon name="friends-o" />
                <i> 我的好友</i></van-col
              >
              <van-col span="8"></van-col>
              <van-col span="8" style="text-align: end"
                ><van-badge :content="8" />
              </van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="8"
                ><i class="el-icon-map-location"> 附近的人</i></van-col
              >
              <van-col span="8"></van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
          </div>
          <div class="box2" style="margin-bottom: 5px">
            <van-row class="vanrow">
              <van-col span="8">
                <i class="el-icon-picture-outline"> 个性换肤</i></van-col
              >
              <van-col span="8"></van-col>
              <van-col span="8" style="text-align: end"
                ><i style="font-size: 9px; color: #999999">官方红</i
                ><van-badge :content="5" />
              </van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="8">
                <i class="el-icon-microphone"> 听歌识曲</i></van-col
              >
              <van-col span="8"></van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="13">
                <i class="el-icon-time"> 定时停止播放</i></van-col
              >
              <van-col span="1"></van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="8"> <i class="el-icon-view"> 扫一扫</i></van-col>
              <van-col span="8"></van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="11">
                <i class="el-icon-alarm-clock"> 音乐闹钟</i></van-col
              >
              <van-col span="5"> </van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="11">
                <i class="el-icon-bank-card"> 驾驶模式</i></van-col
              >
              <van-col span="5"> </van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="11">
                <i class="el-icon-cloudy"> 亲子频道</i></van-col
              >
              <van-col span="5"> </van-col>
              <van-col span="8" style="text-align: end"
                ><i style="font-size: 9px; color: #999999"
                  >一键轻松有儿</i
                ></van-col
              >
            </van-row>
            <van-row class="vanrow">
              <van-col span="11">
                <i class="el-icon-cloudy"> 音乐云盘</i></van-col
              >
              <van-col span="5"> </van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
            <van-row class="vanrow">
              <van-col span="11"> <i class="el-icon-film"> 优惠券</i></van-col>
              <van-col span="5"> </van-col>
              <van-col span="8" style="text-align: end"></van-col>
            </van-row>
          </div>
        </div>
        <div style="clear: both"></div>
      </div>
    </transition>
    <transition>
      <div
        class="footer"
        v-if="flag"
        style="
          width: 80%;
          height: 40px;
          background-color: white;
          position: fixed;
          bottom: 0px;
          left: 0;
          z-index: 100;
          border-top: solid 1px #e1e1e1;
        "
      >
        <van-row class="vanrow" style="font-size: 16px; line-height: 40px">
          <van-col span="10">
            <van-icon />
            <i class="el-icon-moon" @click="night">夜间模式</i></van-col
          >
          <van-col span="6"> <i class="el-icon-setting">设置</i></van-col>
          <van-col span="8" style=""
            ><i class="el-icon-switch-button back" @click="back"
              >退出</i
            ></van-col
          >
        </van-row>
      </div>
    </transition>

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
      <div class="MusicCategorySmall" @click="godailyrec">
        <div class="MusicCategorySmallIcon">
          <van-icon name="notes-o" />
        </div>
        <div class="MusicCategorySmallDesc">每日推荐</div>
      </div>
      <div class="MusicCategorySmall" @click="goplaylist">
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
        <span>推荐歌单<van-icon name="arrow" /></span>
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
      <h2><span>最新专辑</span><van-icon name="arrow" /></h2>
      <div class="main">
        <ul>
          <!-- name 专辑名称 id专辑id  blurPicUrl 专辑封面图 .artist.name 专辑出品人 -->
          <li
            v-for="(item, index) in newestAl.slice(0, 6)"
            :key="index"
            @click="goListDetail"
          >
            <img :src="item.blurPicUrl" alt="" />
            <p>{{ item.name }}</p>
            <span class="line2">{{ item.artist.name }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- jia 主播电台 -->
    <div class="livefm">
      <h2><span>主播电台</span><van-icon name="arrow" /></h2>
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
import { reqInfo } from "../../api/music";

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
      username: "西班牙大鱿鱼",
      level: 0,
      avatarUrl: "",
      backgroundUrl: "",
      obj: {},
      show: false,
      flag: false,
      flag1: true,
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 监听页面滚动
    fn1() {
      window.onscroll = function () {
        // height是滚动条滚动的距离
        let height =
          document.documentElement.scrollTop + document.body.clientHeight;
        let side = document.querySelector(".sidebox");

        if (side) {
          let cha =
            parseInt(window.getComputedStyle(side).height) -
            document.body.clientHeight;
          if (height > parseInt(window.getComputedStyle(side).height)) {
            side.style.position = "fixed";
            side.style.top = `-${cha + 50}px`;
            side.style.left = 0;
            side.style.width = "80%";
          } else {
            side.style.position = "absolute";
            side.style.width = "100%";
            side.style.top = 0;
            side.style.left = 0;
          }
        }
      };
    },
    night() {
      let side = document.querySelector(".sidebox");
      let body = document.querySelector("body");
      let vanrow = document.querySelectorAll(".vanrow ");
      if (this.flag1) {
        for (let i = 0; i < vanrow.length; i++) {
          vanrow[i].style.backgroundColor = "black";
          vanrow[i].style.color = "white";
        }
        side.style.backgroundColor = "black";
        body.style.backgroundColor = "black";
        this.flag1 = false;
      } else {
        for (let i = 0; i < vanrow.length; i++) {
          vanrow[i].style.backgroundColor = "white";
          vanrow[i].style.color = "black";
        }
        side.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        this.flag1 = true;
      }
      // vanrow.
    },
    back() {
      localStorage.removeItem("uid");
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    toggle() {
      this.flag = !this.flag;
      this.show = !this.show;
      setTimeout(() => {
        let side = document.querySelector(".sidebox");
        let vanrow = document.querySelectorAll(".vanrow ");
        if (this.flag1) {
          for (let i = 0; i < vanrow.length; i++) {
            vanrow[i].style.backgroundColor = "white";
            vanrow[i].style.color = "black";
          }
          side.style.backgroundColor = "white";
          side.style.color = "black";
        } else {
          for (let i = 0; i < vanrow.length; i++) {
            vanrow[i].style.backgroundColor = "black";
            vanrow[i].style.color = "white";
          }
          side.style.backgroundColor = "black";
          side.style.color = "white";
        }
      }, 100);
    },
    // 获取用户详情
    async getInfo() {
      let uid = localStorage.getItem("uid");
      const result = await reqInfo({ uid: uid });
      const obj = result;
      this.username = obj.data.profile.nickname;
      this.obj = obj;
      // 粉丝this.obj.data.profile.follows
      this.level = obj.data.level;
      this.avatarUrl = obj.data.profile.avatarUrl;
      this.backgroundUrl = obj.data.profile.backgroundUrl;
    },
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
    //跳转排行榜
    gotoplist() {
      this.$router.push({ path: "/toplist" });
    },
    //跳转每日推荐
    godailyrec() {
      this.$router.push({ path: "/dailyrec" });
    },
    //跳转歌单
    goplaylist() {
      this.$router.push("/playlist");
    },
    //跳转专辑详情
    // goAlbDetail(id) {
    //   this.$router.push(`/listdetail/${id}`);
    // },
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
      console.log(res);
      if (res.data.code === 200) {
        this.liveFMs = res.data.result;
        // console.log(this.liveFMs);
      }
    },
    //获取电台详情
    //获取歌单详情
    goListDetail(id) {
      this.$router.push({ path: `/listdetail/${id}` });
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
    this.fn1();
    this.reqBannerswip();
    this.getRecsong();
    this.getNewestAl();
    this.getLiveFM();
    this.getInfo();
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
.vanrow {
  height: 35px;
  background-color: white;
  line-height: 35px;
  font-size: 13px;
}
.sidebox {
  width: 100%;
  height: 697px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f3f3f3;
  z-index: 7;
}

.sidelbox {
  position: absolute;
  top: 40px;
  left: 10px;
  min-width: 100px;
  min-height: 50px;
}

.sidelbox p i {
  border: solid 1px white;
  display: inline-block;
  width: 30px;
  height: 15px;
  border-radius: 10px;
  text-align: center;
  line-height: 15px;
  font-size: 12px;
}
.sidelbox p {
  margin-top: 10px;
}
.sidelbox p span {
  color: white;
  font-size: 15px;
  margin-right: 5px;
}
.side {
  position: absolute;
  width: 80%;
  min-height: 20px;
  background-color: #f3f3f3;
  z-index: 4;
  top: 0;
  left: 0;
}
.van-overlay {
  z-index: 3;
}
.v-enter,
.v-leave-to {
  transform: translateX(-150px);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all ease 1s;
}
.van-button {
  opacity: 0;
  position: absolute;
  height: 30px;
  top: 27px;
  left: 5px;
  z-index: 1;
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
