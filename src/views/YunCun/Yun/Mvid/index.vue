<template>
  <div class="mvid">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <video :src="url" controls="controls" autoplay="autoplay"></video>
    <van-grid>
      <van-grid-item icon="like-o" @click="like = !like" v-if="!like" />
      <van-grid-item icon="like" @click="like = !like" v-else />
      <van-grid-item icon="good-job-o" @click="like1 = !like1" v-if="!like1" />
      <van-grid-item icon="good-job" @click="like1 = !like1" v-else />
      <van-grid-item icon="chat-o" badge="99+" />
      <van-grid-item icon="share-o" @click="showShare = true" />
    </van-grid>

    <h6>{{ data.name }}</h6>
    <span>{{ data.artistName }}</span>
    <span>{{ data.publishTime }}</span>
    <p>详情:{{ data.desc }}</p>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>
<script>
import { reqYunCunMVBofang, reqYunCunMVXiang } from "../../../../api/user";
export default {
  components: {},
  data() {
    return {
      url: "",
      data: [],
      like: false,
      like1: false,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async reqYunCunMVBofangs() {
      const id = this.$route.params.id;
      const result = await reqYunCunMVBofang(id);
      this.url = result.data.data.url;
    },
    async reqYunCunMVXiangs() {
      const uid = this.$route.params.id;
      const result1 = await reqYunCunMVXiang(uid);
      //   console.log(result1);
      this.data = result1.data.data;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onSelect() {
      this.showShare = false;
    },
  },
  created() {
    this.reqYunCunMVBofangs();
    this.reqYunCunMVXiangs();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>
video {
  width: 100%;
}
h6 {
  padding: 5px 10px;
}
span {
  padding: 10px;
  color: rgb(226, 136, 136);
}
p {
  padding: 10px;
  font-size: 16px;
  color: rgb(131, 126, 126);
  line-height: 20px;
}
</style>