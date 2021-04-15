<template>
  <div id="box">
    <!-- <h1>{{ $store.state.msg }}</h1> -->
    <van-nav-bar
      title="话题详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="banner">
      <img :src="img" alt="" class="img" />
      <p class="text">在:{{ text }}</p>
      <p class="biaoti">{{ title }}</p>
      <van-divider class="canyu">{{ people }}人参与</van-divider>
    </div>
    <!-- 热门评论 -->
    <!-- <van-skeleton
      title
      avatar
      :row="3"
      v-for="(item, index) in arr"
      :key="index"
    >
      <img :src="item.user.avatarUrl" alt="" />
    </van-skeleton> -->
    <van-divider content-position="left">热门动态</van-divider>
    <div class="list" v-for="(item, index) in arr" :key="index">
      <div class="list_top">
        <img :src="item.user.avatarUrl" alt="" class="usernameimg" />
        <span>{{ item.user.nickname }}</span>
      </div>
      <div class="list_neirong">
        <div class="div">
          <p>{{ JSON.parse(item.json).msg }}</p>
          <!-- <img :src="JSON.parse(item.json)." alt="" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { reqTopicDetails, reqTDHot } from "../../../api/music";
// import data from json
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      topicDetailsId: "",
      img: "",
      text: "",
      title: "",
      people: "",
      arr: [],
      json: [],
      css: {
        // backgroundUrl: "",
      },
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    gettopicDetails() {
      this.topicDetailsId = this.$store.state.msg;
      console.log(this.topicDetailsId);
    },

    async topicDetails(id) {
      const result = await reqTopicDetails({ actid: id });
      if (result.status === 200) {
        // console.log(result);
        // 图片
        // console.log(result.data.act.sharePicUrl);
        this.img = result.data.act.sharePicUrl;
        // 简介
        // console.log(result.data.act.text[0]);
        this.text = result.data.act.text[0];
        // 话题名字
        // console.log(result.data.act.title);
        this.title = result.data.act.title;
        // participateCount  话题参与人数
        // console.log(result.data.act.participateCount);
        this.people = result.data.act.participateCount;

        // console.log(111, result);
      }
    },
    async TDHot(id) {
      const result = await reqTDHot({ actid: id });
      if (result.status === 200) {
        console.log(result.data.events);
        const arrs = result.data.events;
        this.arr = arrs;

        // for (let i = 0; i < result.data.events.length; i++) {
        //   const json = result.data.events[i].json;
        //   console.log(JSON.parse(json));
        // }
      }
    },
    onClickLeft() {
      console.log(111);
      this.$router.go(-1);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.gettopicDetails();
    this.topicDetails(this.topicDetailsId);
    this.TDHot(this.topicDetailsId);
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
.banner {
  position: relative;
}
.img {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  overflow: hidden;
}
.biaoti {
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  position: absolute;
  top: 30%;
}
.canyu {
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: 800;
  position: absolute;
  top: 35%;
}
.text {
  width: calc(100% - 16px);
  padding: 8px;
  font-size: 16px;
  line-height: 18px;
}
.list .usernameimg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: left;
}
.list .list_top {
  width: 100%;
  height: 40px;
}
.list_top span {
  color: rgb(238, 117, 18);
  line-height: 40px;
  float: left;
  padding-left: 6px;
}
.div {
  width: calc(100% - 50px);
  padding: 10px 0 10px 50px;
  line-height: 18px;
  color: rgb(90, 87, 87);
}
</style>
