<template>
  <div class="cart">
    <div class="clist" v-for="item in cartList" :key="item._id">
      <van-checkbox v-model="item.checked">单选</van-checkbox>
      <p>{{ item.product.name }}</p>
      <p>{{ item.product.price }}</p>
      <p>{{ item.quantity }}</p>
      <img :src="item.product.coverImg" alt="" width="50px" />
    </div>
    <div>
      <van-submit-bar
        :price="sumPrice * 100"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <!-- 总价默认单位是角，乘100。 -->
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { reqCart } from "../../api/cart";

export default {
  components: {},
  props: {},
  data() {
    return {
      cartList: [],
    };
  },
  computed: {
    checked: {
      // set设置选中状态
      set(flag) {
        return this.cartList.forEach((item) => (item.checked = flag));
      },
      get() {
        // 调用get方法
        return (
          this.cartList.length ==
          this.cartList.filter((item) => item.checked == true).length
        );
      },
    },
    sumPrice() {
      //filter返回的是符合条件的新数组
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce(function (pre, cur) {
          console.log(pre, cur);
          return pre + cur.product.price * cur.quantity;
        }, 0);
    },
  },
  watch: {},
  methods: {
    async initCartList() {
      const res = await reqCart();
      console.log(res);
      this.cartList = res.data;
      console.log(this.cartList);
    },
    //提交订单
    onSubmit() {},
  },
  created() {
    this.initCartList();
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
.clist {
  padding-bottom: 50px;
}
</style>