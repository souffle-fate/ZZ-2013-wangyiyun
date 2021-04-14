<template>
  <div class="music">
    <div class="box1">
      <div class="title">
        <p>歌单({{ num2 }})</p>
      </div>
      <div
        class="main"
        v-for="(item, index) in arr"
        :key="index"
        @click="getmusiclist(item.id)"
      >
        <span :id="arr[index].id"
          ><img :src="arr[index].coverImgUrl" alt=""
        /></span>
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
      arr2: [],
      num2: 0,
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getfollows() {
      let uid = localStorage.getItem("uid");
      const result = await reqInfoFollows({ uid: uid });
      this.arr2 = result.data.follow;
      console.log(this.arr2);
      this.num = this.arr2.length + 1;
      for (let i = 0; i < this.arr2.length; i++) {
        this.avatarUrl.push(this.arr2[i].avatarUrl);
        this.nickname.push(this.arr2[i].nickname);
        this.follows.push(this.arr2[i].follows);
        this.followeds.push(this.arr2[i].followeds);
        this.userId.push(this.arr2[i].userId);
      }
    },
    async getplaylist() {
      let uid = localStorage.getItem("uid");

      const result = await reqInfoplaylist({ uid: uid });
      const arr = result.data.playlist;
      this.arr = arr;
      console.log(arr[0].id);
      this.num2 = arr.length;
    },
    async getmusiclist(id) {
      console.log(id);
      this.$router.push(`/listdetail/${id}`);
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
  padding-bottom: 150px;
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
