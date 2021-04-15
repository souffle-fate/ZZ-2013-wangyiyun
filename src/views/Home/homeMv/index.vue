<template>
  <div class="mv">
    <video :src="url" controls="controls" autoplay="autoplay"></video>
  </div>
</template>

<script>
import { reqMvsXQ } from "../../../api/mv";
export default {
  components: {},
  props: {},
  data() {
    return {
      url: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getMvXQ() {
      const id = this.$route.params.id;
      const res = await reqMvsXQ({ id: id });
      console.log(res.data.data);
      this.url = res.data.data.url;
    },
  },
  created() {
    // alert(this.$route.params.id);
    this.getMvXQ();
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
video {
  width: 100%;
}
</style>