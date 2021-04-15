<template>
  <div class="toplist" v-if="toplist">
    <div class="header">
      <span><van-icon name="arrow-left" @click="gohome" /></span>
      <span>{{ this.$route.meta.title }}</span>
    </div>
    <div class="list1box">
      <h2>官方榜</h2>
      <!-- 获取榜单 -->

      <div class="left">
        <ul v-for="(item, index) in toplist.slice(0, 4)" :key="index">
          <li>
            <img :src="item.coverImgUrl" alt="" />
            <p>{{ item.updateFrequency }}</p>
          </li>
        </ul>
      </div>

      <!-- 榜单封面 -->
      <div class="right">
        <ul
          v-for="toplistTrack in toplistInfo.slice(0, 4)"
          :key="toplistTrack.id"
        >
          <!-- 榜单列表top3-->
          <li
            v-for="(subitem, subindex) in toplistTrack.tracks"
            :key="subindex"
          >
            <p>{{ subindex + 1 }}.{{ subitem.first }}-{{ subitem.second }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="list2box">
      <h2>全球榜</h2>
      <div
        class="innerbox"
        v-for="(item, index) in toplist.slice(5)"
        :key="index"
      >
        <div class="top">
          <img :src="item.coverImgUrl" alt="" />
          <p>{{ item.updateFrequency }}</p>
        </div>
        <div class="bottom">
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqToplist, reqToplistInfo } from "../../../api/toplist";
export default {
  components: {},
  props: {},
  data() {
    return {
      toplist: [],
      toplistInfo: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    //获取所有榜单
    async getToplist() {
      const res = await reqToplist();
      console.log(res);
      if (res.data.code === 200) {
        this.toplist = res.data.list;
        // console.log(this.toplist);
      }
    },
    //获取榜单摘要
    async getToplistInfo() {
      const res = await reqToplistInfo();
      // console.log(res);
      this.toplistInfo = res.data.list;
      // console.log(this.toplistInfo);
    },
    //点击返回按钮跳转首页
    gohome() {
      this.$router.push("/home");
    },
  },
  created() {
    this.getToplist();
    this.getToplistInfo();
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
.toplist {
  padding-bottom: 200px;
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
    color: #fff;
    margin-right: 3px;
  }
  span:last-child {
    font-size: 18px;
  }
}
.list1box {
  padding: 50px 5px 0 5px;
  h2 {
    line-height: 40px;
  }
  .left {
    margin-right: 10px;
    float: left;
    li {
      position: relative;
      p {
        position: absolute;
        bottom: 6px;
        left: 3px;
        font-size: 12px;
        color: #fff;
      }
      img {
        width: 90px;
        border-radius: 5px;
      }
    }
  }
  .right {
    float: left;
    ul {
      width: 260px;
      height: 92px;
      border-bottom: 1px solid rgb(245, 245, 245);
      li {
        height: 26px;
        line-height: 40px;
      }
    }
    p {
      height: 40px;
      color: rgb(104, 104, 104);
      font-size: 15px;
      font-size: 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
.list2box {
  width: 100%;
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h2 {
    width: 100%;
    line-height: 30px;
  }
  .innerbox {
    height: 160px;
    .top {
      position: relative;
      img {
        width: 115px;
        border-radius: 10px;
      }
      p {
        position: absolute;
        bottom: 10px;
        left: 5px;
        font-size: 12px;
        color: #fff;
      }
    }
    .bottom {
      p {
        width: 120px;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
