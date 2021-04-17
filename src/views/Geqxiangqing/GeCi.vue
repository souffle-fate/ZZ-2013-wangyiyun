<template>
  <div id="geci">
    <van-nav-bar
      title="歌词"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="detail">
      <div class="song-title">
        <p ref="song">{{ song }}</p>
        <p ref="singer">{{ singer }}</p>
      </div>
      <div class="wrapper">
        <ul class="content">
          <li v-for="(item, index) of ms" :key="index">{{ item.c }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {
  reqMusicLyrics,
  //   获取歌词
} from "../../api/music";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      // 歌词 字符串
      songLyrics: "",
      // 歌词 数组
      songLyricsarr: "",
      Lrc: "",
      ms: [],
      song: "",
      singer: "",
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 获取歌词
    async musicLyrics() {
      const id = this.$store.state.musicid;
      console.log(id);
      const result = await reqMusicLyrics({ id });

      if (result.status === 200) {
        // console.log(result.data.lrc.lyric);
        // 歌词的lrc格式
        this.songLyrics = result.data.lrc.lyric;
        var lrcs = this.songLyrics.split("\n"); //用回车拆分成数组
        for (var i in lrcs) {
          //遍历歌词数组
          lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
          var t = lrcs[i].substring(
            lrcs[i].indexOf("[") + 1,
            lrcs[i].indexOf("]")
          ); //取[]间的内容
          var s = t.split(":"); //分离:前后文字
          if (!isNaN(parseInt(s[0]))) {
            //是数值
            var arr = lrcs[i].match(/\[(\d+:.+?)\]/g); //提取时间字段，可能有多个
            var start = 0;
            for (var k in arr) {
              start += arr[k].length; //计算歌词位置
            }
            var content = lrcs[i].substring(start); //获取歌词内容
            for (var m in arr) {
              var tt = arr[m].substring(1, arr[m].length - 1); //取[]间的内容
              var ss = tt.split(":"); //分离:前后文字
              this.ms.push({
                //对象{t:时间,c:歌词}加入ms数组
                t: (parseFloat(ss[0]) * 60 + parseFloat(ss[1])).toFixed(3),
                c: content,
              });
            }
          }
        }

        // console.log(this.songLyrics);
        // const aaa = /(\[)[0-9]{2}:{1}[0-9]{2}.{1}[0-9]{3}(\])/g;
        // const dateStr = this.songLyrics.replace(aaa, ",");
        // this.songLyricsarr = dateStr.split(",");
      }
      // /必选参数 : id: 音乐 id
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.musicLyrics();
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
<style scoped lang="scss">
.detail {
  position: absolute;
  top: 1rem;
  bottom: 2.6rem;
  left: 0;
  right: 0;
  text-align: center;
  color: #26a2ff;
}
.song-title {
  width: 100%;
  height: 2rem;
  /* // background-color: #eeefff; */
  p {
    width: 100%;
    line-height: 0.8rem;
    font-size: 18px;
    color: #ffd700;
    margin-top: 0.1rem;
    text-align: center;
    // background-color #fff
  }
}
.wrapper {
  //   overflow: hidden;
  position: absolute;
  top: 2rem;
  right: 0;
  left: 0;
  height: 545px;
  // background-color yellow
  ul {
    line-height: 32px;
    width: 100%;
    padding-bottom: 1rem;
    // background-color red
    li {
      font-size: 16px;
      transition-duration: 1200ms;
      // background-color skyblue
      line-height: 25px;
    }
  }
}
</style>
