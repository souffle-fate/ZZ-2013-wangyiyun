<template>
  <div class="rank">
    <h2>歌手榜</h2>
    <!-- <div class="tabs">
      <span>华语</span><span>欧美</span><span>韩国</span><span>日本</span>
    </div> -->
    <van-tree-select
      height="55vw"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <van-image
          v-if="active === 0"
          src="https://img01.yzcdn.cn/vant/apple-1.jpg"
        />
        <van-image
          v-if="active === 1"
          src="https://img01.yzcdn.cn/vant/apple-2.jpg"
        />
      </template>
    </van-tree-select>
    <div class="singers"></div>
  </div>
</template>

<script>
import { Notify } from "vant";
import { reqSingerRank } from "../../api/singerrank";
export default {
  components: {},
  props: {},
  data() {
    return {
      activeKey: 0,
      num: 1,
      singerlistArr: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    //切换侧边栏
    onChange(index) {
      Notify({ type: "primary", message: index });
    },
    //请求歌手列表
    async getSingerRank(num) {
      let res = await reqSingerRank({ type: num });
      // console.log(res);
      if (res.data.code === 200) {
        this.singerlistArr = res.data.list.artists;
        console.log(this.singerlistArr);
      }
    },
  },
  created() {
    this.getSingerRank(this.num);
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
</style>