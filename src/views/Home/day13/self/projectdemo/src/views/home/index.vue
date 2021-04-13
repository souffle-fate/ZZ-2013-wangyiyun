<template>
  <div class="home">
    <van-cell
      v-for="item in plist"
      :key="item._id"
      :title="item.name"
      @click="godetail(item._id)"
    />
  </div>
</template>

<script>
import { reqPlist } from "../../api/product";
export default {
  components: {},
  props: {},
  data() {
    return {
      plist: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    async initList() {
      const res = await reqPlist();
      if (res.status == 200) {
        this.plist = res.data.products;
      }
    },
    godetail(id) {
      this.$router.push({
        path: `/detail/${id}`,
      });
    },
  },
  created() {
    this.initList();
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