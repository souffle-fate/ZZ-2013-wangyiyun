<template>
  <div class="music">
    <div class="box1" ref="diantai">
      <div class="title">
        <p>电台({{ num }})</p>
      </div>
      <div class="main" v-for="(item, index) in userId" :key="item">
        <span><img :src="avatarUrl[index]" alt="" /></span>
        <p style="margin-left: 11px">
          <i
            style="
              font-size: 14px;
              display: inline-block;
              color: black;
              margin-bottom: 11px;
            "
            >{{ nickname[index] }}</i
          ><br /><b style="font-size: 11px"
            >共{{ follows[index] }}期，{{ followeds[index] }}人订阅</b
          >
        </p>
      </div>
    </div>
    <div class="box1">
      <div class="title">
        <p>歌单({{ num }})</p>
      </div>
      <div class="main" v-for="(item, index) in arr" :key="index">
        <span><img :src="arr[index].coverImgUrl" alt="" /></span>
        <p style="margin-left: 11px">
          <i
            style="
              font-size: 14px;
              display: inline-block;
              color: black;
              margin-bottom: 11px;
            "
            >{{ arr[index].name }}</i
          ><br /><b style="font-size: 11px"
            >{{ arr[index].trackCount }}首，播放{{ arr[index].playCount }}次</b
          >
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { reqInfoFollows, reqInfoplaylist } from "../../../api/music";
export default {
  data() {
    return {
      num: 0,
      avatarUrl: [],
      nickname: [],
      follows: [],
      followeds: [],
      userId: [],
      arr: [],
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getfollows() {
      const result = await reqInfoFollows({ uid: 32953014 });
      const arr = result.data.follow;
      console.log(arr);
      this.num = arr.length + 1;
      for (let i = 0; i < arr.length; i++) {
        this.avatarUrl.push(arr[i].avatarUrl);
        this.nickname.push(arr[i].nickname);
        this.follows.push(arr[i].follows);
        this.followeds.push(arr[i].followeds);
        this.userId.push(arr[i].userId);
      }
    },
    async getplaylist() {
      const result = await reqInfoplaylist({ uid: 32953014 });
      const arr = result.data.playlist;
      this.arr = arr;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getfollows();
    this.getplaylist();
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
img {
  width: 100%;
  height: 100%;
}
.music {
  background: #f3f3f3;
  font-size: 13px;
  color: #999999;
  min-height: 300px;
  padding-bottom: 55px;
}
.music .title p {
  height: 25px;
  line-height: 25px;
  text-indent: 1em;
}
.music .main {
  height: 58px;
  background-color: white;
  display: flex;
  align-items: center;
  flex: 1;
}
.music .main span {
  width: 50px;
  height: 50px;
  display: inline-block;
  border: solid 1px #f5f3f5;
  background-color: #e7e3e7;
  color: white;
  margin-left: 6px;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
}
</style>
