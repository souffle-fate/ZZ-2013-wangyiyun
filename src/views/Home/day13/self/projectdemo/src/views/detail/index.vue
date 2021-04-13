<template>
  <div class="detail" v-if="obj">
    <img :src="obj.coverImg" alt="" width="200" />
    <p>{{ obj.name }}</p>
    <p>{{ obj.price }}</p>
    <p>{{ obj.quantity }}</p>
    <van-button type="info" block @click="addcart(obj._id, obj.quantity)"
      >加入购物车</van-button
    >
  </div>
</template>

<script>
import { reqDetail } from "../../api/product";
import { isLogined } from "../../utils/util";
import { reqAddcart } from "../../api/cart";
export default {
  components: {},
  props: {},
  data() {
    return {
      obj: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    //  获取商品详情
    async getDetail(id) {
      const res = await reqDetail(id);
      console.log(res);
      if (res.status === 200) {
        this.obj = res.data;
      }
    },
    // 加入购物车
    addcart(id, quantity) {
      if (isLogined()) {
        //已登录调用加入购物车接口
        reqAddcart({ product: id, quantity }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.$router.replace("/cart");
          }
        });
      } else {
        //未登录跳转到登录接口
        this.$router.replace("/login"); //replace方法没有历史记录
      }
    },
  },
  created() {
    const id = this.$route.params.id;
    this.getDetail(id); //调用方法
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