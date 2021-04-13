<template>
  <div class="toplist" v-if="toplist">
    <div class="list1box">
      <h2>官方榜</h2>
      <div
        class="innerbox"
        v-for="(item, index) in toplist.slice(0, 6)"
        :key="index"
      >
        <div class="left">
          <img :src="item.coverImgUrl" alt="" />
          <p>{{ item.updateFrequency }}</p>
        </div>
        <div class="right">
          <!-- <p>{{ item.name }}</p> -->
        </div>
      </div>
    </div>

    <h2>全球榜</h2>
    <div class="list2box">
      <div
        class="innerbox"
        v-for="(item, index) in toplist.slice(7)"
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
import { reqToplist } from "../../api/toplist";
export default {
  components: {},
  props: {},
  data() {
    return {
      toplist: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getToplist() {
      const res = await reqToplist();
      console.log(res);
      if (res.data.code === 200) {
        this.toplist = res.data.list;
        console.log(this.toplist);
      }
    },
  },
  created() {
    this.getToplist();
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
.list1box {
  width: 100%;
  padding: 0 5px;
  .innerbox {
    width: 100%;
    .left {
      width: 30%;
      position: relative;

      p {
        position: absolute;
        bottom: 0;
        left: 5px;
        font-size: 12px;
        color: #fff;
      }
      img {
        width: 90px;
        border-radius: 10px;
      }
    }
    .right {
      width: 70%;
      float: left;
      p {
        color: rgb(104, 104, 104);
        font-size: 15px;
      }
    }
  }
}
.list2box {
  padding: 0 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .innerbox {
    .top {
      position: relative;
      img {
        width: 120px;
        border-radius: 10px;
      }
      p {
        position: absolute;
        bottom: 0;
        left: 5px;
        font-size: 12px;
        color: #fff;
      }
    }
    .bottom {
      p {
        width: 120px;
        font-size: 14px;
      }
    }
  }
}
</style>
