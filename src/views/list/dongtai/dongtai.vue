<template>
  <div class="dongtai">
    <p></p>
  </div>
</template>

<script>
import { reqEvent } from "../../../api/user";
export default {
  data() {
    return {};
  },
  methods: {
    async getEvent() {
      const result = await reqEvent();
      console.log(result);
    },
  },
  components: {},
};
</script>

<style scoped>
.dongtai {
  background: #f3f3f3;
}
</style>
