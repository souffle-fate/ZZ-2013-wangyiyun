<template>
  <div class="rank">
    <h2>歌手榜</h2>
    <div class="tabs">
      <span @click="change1">华语</span>
      <span @click="change2">欧美</span>
      <span @click="change3">韩国</span>
      <span @click="change4">日本</span>
    </div>
    <div class="singers">
      <ul>
        <li
          v-for="(item, index) in singerlistArr.slice(0, 30)"
          :key="index"
          @click="gosingerdetail"
          :id="item.id"
        >
          <img :src="item.img1v1Url" alt="" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reqSingerRank } from "../../api/singerrank";
export default {
  components: {},
  props: {},
  data() {
    return {
      num: 1,
      singerlistArr: [],
      id: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    //请求歌手列表
    async getSingerRank(num) {
      let res = await reqSingerRank({ type: num });
      // console.log(res);
      if (res.data.code === 200) {
        this.singerlistArr = res.data.list.artists;
        console.log(this.singerlistArr);
      }
    },
    //点击改变num值
    change1() {
      this.num = 1;
      this.getSingerRank(this.num);
    },
    change2() {
      this.num = 2;
      this.getSingerRank(this.num);
    },
    change3() {
      this.num = 3;
      this.getSingerRank(this.num);
    },
    change4() {
      this.num = 4;
      this.getSingerRank(this.num);
    },
    //跳转歌手详情
    gosingerdetail(id) {
      this.$router.push(`/singerdetail/${id}`);
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
<style scoped lang='scss'>
.rank {
  h2 {
    width: 100%;
    background: rgb(222, 65, 55);
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    position: fixed;
  }
  .tabs {
    background: rgb(247, 248, 250);
    padding-top: 40px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
    span {
      font-size: 18px;
      display: inline-block;
      width: 25%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: rgb(254, 249, 249);
      &:hover {
        background: #fff;
      }
    }
  }
  .singers {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        width: 100px;
        img {
          width: 100%;
          border-radius: 10px;
        }
        p {
          width: 100%;
          font-size: 12px;
          text-align: center;
          line-height: 30px;
        }
      }
    }
  }
}
</style>