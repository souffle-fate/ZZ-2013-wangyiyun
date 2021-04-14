<template>
  <div class="list">
    <div
      class="list-box"
      v-for="(item, index) in reqPrivateFM.slice(0, 1)"
      :key="index"
    >
      <img class="list-img" :src="item.album.blurPicUrl" alt="" />
      <p class="list-Sname">{{ item.album.name }}</p>
      <p class="list-Uname">{{ item.artists[0].name }}</p>
    </div>
  </div>
</template>

<script>
import { reqPrivateFMs } from "../api/home";

export default {
  components: {},
  props: {},
  data() {
    return {
      reqPrivateFM: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getFM() {
      const res = await reqPrivateFMs();
      console.log(res);
      if (res.status === 200) {
        // console.log(res.data.data);
        this.reqPrivateFM = res.data.data;
        console.log(this.reqPrivateFM);
      }
    },
  },
  created() {
    this.getFM();
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
.list-box {
  text-align: center;
}
.list-img {
  width: 80%;
  margin-top: 100px;
}
</style>