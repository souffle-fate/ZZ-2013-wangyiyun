<template>
  <div id="MusicComment">
    <!-- 顶部导航 -->
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="fixed"
      :placeholder="placeholder"
      id="top_nav"
    />
    <!-- 歌曲简略信息 -->
    <div class="con">
      <div class="con_left">
        <img :src="picUrl" alt="" class="con_left_left" />
        <div class="con_left_right">
          <p class="con_left_right_p1">{{ name }}</p>
          <p class="con_left_right_p2">{{ singerName }}</p>
        </div>
      </div>
      <div class="con_right">
        <van-icon name="arrow" size="30" @click="PlayMusic" />
      </div>
    </div>
    <!-- 精彩评论 -->
    <div class="play_p1">
      <p>热门评论</p>
    </div>
    <van-skeleton
      title
      avatar
      :row="3"
      :loading="loading"
      v-for="(item, index) in hotComments"
      :key="index"
    >
      <div class="hotPlay">
        <!-- 顶部头像，用户名 -->
        <div class="hotPlay_img">
          <div class="hotPlay_img_left">
            <img :src="item.user.avatarUrl" alt="" />
            <span>{{ item.user.nickname }}</span>
          </div>
          <div class="hotPlay_img_right">
            <van-icon name="good-job-o" />
            <span>{{ item.likedCount }}</span>
          </div>
        </div>
        <!-- 评论内容 -->
        <div class="playContent">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </van-skeleton>
    <!-- 最新评论 -->
    <div class="play_p1">
      <p>最新评论</p>
    </div>
    <van-skeleton
      title
      avatar
      :row="3"
      :loading="loading"
      v-for="(item, index) in comments"
      :key="index"
    >
      <div class="hotPlay">
        <!-- 顶部头像，用户名 -->
        <div class="hotPlay_img">
          <div class="hotPlay_img_left">
            <img :src="item.user.avatarUrl" alt="" />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.user.nickname }}</span>
          </div>
          <div class="hotPlay_img_right">
            <van-icon name="good-job-o" />
            <span>{{ item.likedCount }}</span>
          </div>
        </div>
        <!-- 评论内容 -->
        <div class="playContent">
          <p>{{ item.content }}</p>
          <p class="playContent_p2" v-if="item.beReplied.length > 0">
            <a href="#">@{{ item.beReplied[0].user.nickname }}</a> :<span>{{
              item.beReplied[0].content
            }}</span>
          </p>
        </div>
      </div>
    </van-skeleton>

    <div></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { Toast } from "vant";
// import { Icon } from "vant";
// import { Skeleton } from "vant";  reqMusicDetails
// import { Popup } from "vant";
import { reqMusicComment, reqMusicDetails, reqMusicUrl } from "../../api/music";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      title: "歌曲评论",
      loading: true,
      //热门评论列表
      hotComments: [],
      //最新评论列表
      comments: [],
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
      show: false,
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onClickLeft() {
      //   Toast("返回");
      this.$router.push("/detail");
    },
    // 获取评论
    async musicComment() {
      const ids = this.$store.state.musicid;
      console.log(ids);
      //必选参数 : id: 音乐 id    可选参数 : limit: 取出评论数量 , 默认为 20
      const result = await reqMusicComment({ id: ids });
      //   console.log(result);
      if (result.status === 200) {
        // console.log(result.data);
        // 热门评论
        this.hotComments = result.data.hotComments;
        // 最新评论
        this.comments = result.data.comments;
        console.log(this.comments);
        console.log(this.comments[3].beReplied[0].content);
        console.log(this.comments[3].beReplied[0].user.nickname);

        // console.log(this.hotComments);
        // comments  最新评论   hotComments 热门评论
        // content 点赞内容   likedCount 点赞数  time 点赞时间
      }
    },
    // 歌曲简略信息
    async musicDetails() {
      const ids = this.$store.state.musicid;
      console.log(ids);
      // 必选参数 : ids: 音乐 id, 如 ids=347230
      const result = await reqMusicDetails({ ids });
      if (result.status === 200) {
        // console.log(result.config.params.ids);
        //歌曲背景图
        this.picUrl = result.data.songs[0].al.picUrl;
        //歌名
        this.name = result.data.songs[0].name;
        //歌手名
        this.singerName = result.data.songs[0].ar[0].name;
        // console.log(this.singerName);
        // 歌曲id
        this.id = result.config.params.ids;
        console.log(this.id);
        this.MusicUrl(this.id);
      }
    },
    // 点击播放
    PlayMusic() {
      // 跳转到歌曲详情页，并播放
      //location.href = this.musicUrl;
      console.log(this.musicUrl);
    },
    // 获取音乐播放url
    async MusicUrl(id) {
      const ids = this.$store.state.musicid;
      console.log(ids);
      console.log(id);
      const result = await reqMusicUrl({ id });
      console.log(this.id);
      if (result.status === 200) {
        // console.log(result.data.data[0].url);
        this.musicUrl = result.data.data[0].url;
        const aaa = this.$store.state.MusicUrl;
        console.log(aaa);
      }
    },
    // 发送评论
    async sendComments() {
      // const result = await reqSendComments();
      // console.log(result);
      console.log(111);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.musicComment();
    this.musicDetails();
    this.PlayMusic();
    this.sendComments();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.loading = false;
  },
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
#top_nav {
  background: #ec4141;
  color: white;
}
.con {
  width: 100%;
  min-height: 20px;
  /* background: yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.con_left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.con_left_right_p1 {
  font-weight: 600;
}
.con_left_right_p2 {
  font-size: 14px;
}
.con img {
  width: 80px;
  height: 80px;
}
.play_p1 {
  width: 100%;
  min-height: 0.2rem;
  background: rgb(236, 235, 235);
  /* line-height: 0; */
  margin-top: -16px;
}
.hotPlay_img {
  /* border-radius: 15px;
  overflow: hidden; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hotPlay_img_left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hotPlay_img_left img {
  border-radius: 20px;
}
.hotPlay img {
  width: 40px;
  height: 40px;
}
.hotPlay .playContent {
  width: 91%;
  float: right;
}
.hotPlay .playContent .playContent_p2 {
  border: 1px solid #ccc;
  /* background: rgb(238, 238, 238); */
}

/* playContent_p2 */

.hotPlay {
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}
</style>
