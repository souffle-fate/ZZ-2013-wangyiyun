<template>
  <div id="hottopic">
    <div
      class="con"
      v-for="(item, index) in hottopicArr"
      :key="index"
      @click="topicDetails(item.actId)"
    >
      <div class="con_img">
        <img :src="item.sharePicUrl" alt="" />
      </div>
      <div class="con_left">
        <p>#{{ item.title }}#</p>
        <p>{{ item.participateCount }}人参与</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      hottopicArr: [],
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 获取评论
    // 热门话题
    // async hotTopic() {
    hotTopic() {
      axios.post("http://localhost:3000/hot/topic").then((res) => {
        if (res.status === 200) {
          console.log(res.data.hot);
          this.hottopicArr = res.data.hot;
          console.log(this.hottopicArr);
          // this.topicDetails(res.data.hot.actId);
        }
      });
    },
    //热门话题详情
    topicDetails(id) {
      this.$store.commit("getMusicUrl", id);
      console.log(id);
      this.$router.push("/topicdetails");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.hotTopic();

    // this.topicDetails();
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
#hottopic {
  padding-bottom: 45px;
}
.con {
  width: 100%;
  height: 80px;
  /* background: lawngreen; */
  overflow: hidden;
  padding: 5px 0;
  border-radius: 10px;
  border-bottom: 1px solid #ccc;
}
.con .con_img {
  float: left;
  /* background: lavenderblush; */
}
.con .con_img img {
  width: 80px;
  height: 80px;
}
.con .con_left {
  float: left;
  /* background: khaki; */
  line-height: 40px;
  margin-left: 10px;
}
</style>
