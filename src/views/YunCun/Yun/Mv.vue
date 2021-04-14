<template>
  <div class="MV">
    <div v-for="item in result" :key="item.id">
      <img :src="item.cover" alt="" @click="ss(item.id)" />
      <h6>{{ item.artistName }}</h6>
      <p>{{ item.name }}</p>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// export const reqYunCunMVBofang = (a) => get("/mv/url?id=" + a);
import { reqYunCunMV } from "../../../api/user";
export default {
  components: {},
  data() {
    return {
      result: [],
      url: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async reqYunCunMVs() {
      const result = await reqYunCunMV();
      console.log(result);
      console.log(result.data.data);
      this.result = result.data.data;
    },

    ss(id) {
      this.$router.push(`/mvid/${id}`);
    },
  },
  created() {
    this.reqYunCunMVs();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>
img {
  width: 100%;
  border-radius: 5px;
}
p {
  font-size: 12px;
  color: rgb(87, 85, 85);
  margin-bottom: 12px;
}
</style>
