<template>
  <div class="jingpin">
    <div class="jingpinNav">
      <van-icon name="arrow-left" @click="goHome" />
      <p>精品歌单·全部</p>
    </div>
    <div
      class="jingpinContent"
      v-for="(item, index) in reqSongLists.slice(0, 20)"
      :key="index"
    >
      <div class="jingpinContent-box">
        <div class="jingpinContent-left">
          <img :src="item.coverImgUrl" alt="" />
        </div>
        <div class="jingpinContent-right">
          <div class="imgcontent">
            <van-icon name="service-o" />
            <p>{{ item.__ob__.value.playCount | numFormat }}</p>
          </div>
          <p class="itemName">{{ item.name }}</p>
          <p class="itemCreatorNickname">by {{ item.creator.nickname }}</p>
          <p class="itemCopywriter">{{ item.copywriter }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqSongList } from "../../../api/playlist";

export default {
  components: {},
  props: {},
  data() {
    return {
      reqSongLists: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 回到首页
    goHome() {
      this.$router.push("/playlist");
    },
    async getSongList(id) {
      const res = await reqSongList({ id: id });
      console.log(res.data.playlists);
      this.reqSongLists = res.data.playlists;
    },
  },
  created() {
    this.getSongList();
  },
  filters: {
    numFormat(num) {
      if (parseInt(num) > 100000000) {
        return (parseInt(num) / 100000000).toFixed(1) + "亿";
      } else if (parseInt(num) > 10000) {
        return parseInt(parseInt(num) / 10000) + "万";
      }
    },
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
<style scoped>
/* 头部*/
.jingpinNav {
  background: rgb(243, 77, 64);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
}
/* 内容 */
.imgcontent {
  color: white;
}
.jingpinContent-box {
  margin-left: 10px;
  margin-top: 5px;
  min-height: 110px;
}
.jingpinContent-left {
  width: 30%;
  float: left;
}
.jingpinContent-right {
  width: 70%;
  float: right;
  line-height: 20px;
}
.itemName {
  font-size: 14px;
  font-weight: 600;
}
.itemCreatorNickname {
  font-size: 12px;
  color: rgb(152, 152, 152);
  margin-top: 5px;
}
.itemCopywriter {
  font-size: 12px;
  margin-top: 5px;
  /* font-weight: 600; */
  color: rgb(152, 152, 152);
}
.jingpinContent-left img {
  width: 100px;
}
.imgcontent {
  display: flex;
  position: relative;
  left: -75px;
  font-size: 12px;
}
</style>