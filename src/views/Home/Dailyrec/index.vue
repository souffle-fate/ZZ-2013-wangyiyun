<template>
  <div class="dailyrec">
    <div class="header">
      <span><van-icon name="arrow-left" @click="gohome" /></span>
    </div>
    <!-- <div v-for="item in data" :key="item.id" style="position: relative">
      <img :src="item.picUrl" alt="" style="width: 100%" />
      <p>{{ item.copywriter }}</p>
      <h3>{{ item.name }}</h3>
    </div> -->
    <div class="main">
      <ul>
        <li v-for="item in data" :key="item.id">
          <div class="imgbox">
            <img :src="item.picUrl" alt="" />
          </div>
          <p>{{ item.copywriter }}</p>
        </li>
      </ul>
    </div>
    <!-- <van-divider content-position="left"
      >播放全部
      <van-icon name="play-circle-o" size="20" color="red" /> -->
    <!-- </van-divider> -->
  </div>
</template>

<script>
import { reqDailyRec } from "../../../api/dailyrec";
// import { isLogined } from "../../../utils/util";
export default {
  components: {},
  props: {},
  data() {
    return {
      data: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    //点击返回按钮跳转首页
    gohome() {
      this.$router.push("/home");
    },
    //获取每日推荐歌单
    //   getDailyRec() {
    //     if (isLogined()) {
    //       reqDailyRec().then((res) => {
    //         console.log(res);
    //       });
    //     } else {
    //       this.$router.push("/login");
    //     }
    //   },
    async getDailyRec() {
      const result = await reqDailyRec();
      console.log(result.data.recommend);
      this.data = result.data.recommend;
    },
  },
  created() {
    this.getDailyRec();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style scoped lang='scss'>
.dailyrec {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 50px;
  background: rgb(223, 66, 56);
  z-index: 1000;
  position: fixed;
  span {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 25px;
    color: rgb(255, 255, 255);
    margin-right: 3px;
  }
  span:last-child {
    font-size: 18px;
  }
}

.main {
  padding-top: 50px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      width: 180px;
      margin-bottom: 15px;
      .imgbox {
        position: relative;
        span {
          position: absolute;
          top: 0;
          right: 5px;
          color: #fff;
        }
        p {
          position: absolute;
          bottom: 5px;
          left: 5px;
          color: #fff;
        }
      }
    }
  }
}
img {
  width: 180px;
  border-radius: 10px;
}
p,
i {
  line-height: 20px;
  font-size: 12px;
}
</style>