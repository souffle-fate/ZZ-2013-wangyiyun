<template>
  <div class="fm">11111</div>
</template>

 

<script>
import { reqPrivateFMs } from "../../../api/home";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    async getFM() {
      const res = await reqPrivateFMs();
      console.log(res);
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
</style>