<template>
  <div class="home">
    <van-cell title="单元格" icon="shop-o" @click="url_search">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-icon name="search" class="search-icon" />
      </template>
    </van-cell>
    <div class="recsonglist">
      <h2>
        <a href="">推荐歌单<van-icon name="arrow" /></a>
      </h2>
      <div class="main">
        <ul>
          <li
            v-for="(item, index) in recsongs"
            :key="index"
            @click="goListDetail(item.id)"
          >
            <div class="imgbox">
              <img :src="item.picUrl" alt="" />
              <span>
                <van-icon name="audio" />
                <i>{{ item.playCount | numFormat }}</i>
              </span>
            </div>
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>

    <a href="">排行榜</a>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { Field } from "vant";
import { reqRecsongs } from "../../api/reclist";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      recsongs: [],
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    url_search() {
      this.$router.push("/Search");
    },
    async getRecsong() {
      let res = await reqRecsongs({ limit: 6 });
      // console.log(res);
      if (res.status === 200) {
        this.recsongs = res.data.result;
        // console.log(this.recsongs);
      }
    },
    goListDetail(id) {
      // console.log(id);
      this.$router.push({ path: `/listdetail/${id}` });
    },
  },

  filters: {
    numFormat(num) {
      if (parseInt(num) > 100000000) {
        return (parseInt(num) / 100000000).toFixed(1) + "亿";
      } else if (parseInt(num) > 10000) {
        return parseInt(parseInt(num) / 10000) + "万";
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getRecsong();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped lang='scss'>
.recsonglist {
  .main {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        width: 120px;
        .imgbox {
          position: relative;
          span {
            position: absolute;
            top: 0;
            right: 5px;
            color: #fff;
          }
        }
      }
    }
  }
  img {
    width: 120px;
  }
  p,
  i {
    font-size: 12px;
  }
}
</style>
