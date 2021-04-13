<template>
  <div class="gedan"></div>
</template>

<script>
import { reqDynamic } from "../../api/music";
export default {
  data() {
    return {};
  },
  methods: {
    async getDynamic() {
      const id = this.$route.params.Id;
      const result = await reqDynamic({ id });
      console.log(result);
    },
  },
  created() {
    this.getDynamic();
  },
  components: {},
};
</script>

<style scoped>
</style>
