<template>
  <div class="listdetail" v-if="resObj">
    <!-- playlist.coverImgUrl 封面图  shareCount 分享总量 commentCount 总评论数 .name 右侧描述  收藏量 subscribedCount   subscribed是否收藏
      subscribers 收藏人
      出品人 小下标  playlist.creator.avatarDetail.identityIconUrl     出品人头像 .avatarUrl   出品人名称  .nickname -->
    <!-- 封面 -->
    <div class="listtit">
      <div class="top">
        <div class="left">
          <img :src="resObj.coverImgUrl" alt="" />
        </div>
        <div class="right">
          <p>{{ resObj.name }}</p>
          <p>
            <img :src="resObj.creator.avatarUrl" alt="" />
            <img :src="resObj.creator.avatarDetail.identityIconUrl" alt="" />
            <span>{{ resObj.creator.nickname }}<van-icon name="arrow" /></span>
          </p>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <van-icon name="chat-o" />
            <span>{{ resObj.commentCount }}</span>
          </li>
          <li>
            <van-icon name="share-o" />
            <span>{{ resObj.shareCount }}</span>
          </li>
          <li>
            <van-icon name="down" />
            <span>下载</span>
          </li>
          <li>
            <van-icon name="certificate" />
            <span>多选</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 列表歌曲 -->
    <div class="playlist">
      <ul>
        <!-- trackCount trackIds  name 歌名  mv 0,1是否有mv  -->
      </ul>
    </div>
  </div>
</template>

<script>
import { reqListDetail, reqSongDetail } from "../../../api/reclist";
// import { mapState } from "vuex";
export default {
  components: {},
  props: {},
  data() {
    return {
      id: this.$route.params.id,
      trackIds: [],
      resObj: null,
      trackIdsStr: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getListDetail(id) {
      // console.log(id);
      let res = await reqListDetail({ id: id, s: 5 });
      // console.log(res);
      if (res.data.code === 200) {
        this.resObj = res.data.playlist;
        // console.log(this.resObj);
        this.trackIds = this.resObj.trackIds.map((item) => {
          return item.id;
        });
        // console.log(this.trackIds);
        this.trackIdsStr = this.trackIds.join(",");

        // this.$store.commit("songids/setIds", this.trackIdsStr);
      }
    },

    async getSongDetail(ids) {
      let res = await reqSongDetail({ ids: ids });
      console.log(res);
    },
  },
  created() {
    this.getListDetail(this.id);
    this.getSongDetail(this.trackIdsStr);
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
.listdetail {
  padding-bottom: 50px;
  .listtit {
    min-height: 230px;
    background: rgb(63, 73, 101);
    .top {
      overflow: hidden;
      padding: 10px 0px;
      .left {
        float: left;
        margin: 15px 10px;
        img {
          width: 120px;
        }
      }
      .right {
        margin-top: 30px;
        p:first-child {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 30px;
        }
        p:last-child {
          position: relative;
          font-size: 14px;
          color: rgb(208, 218, 216);
          img:first-child {
            width: 30px;
            border-radius: 30px;
          }
          img:nth-child(2) {
            width: 10px;
            position: absolute;
            right: 203px;
            bottom: 8px;
          }
          span {
            display: inline-block;
            margin-left: 10px;
          }
        }
      }
    }
    .bottom {
      color: #fff;
      ul {
        width: 100%;
        display: flex;
        li {
          flex: 1;
          height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          van-icon {
            color: #fff;
          }
          span {
            font-size: 14px;
            color: rgb(208, 218, 216);
          }
        }
      }
    }
  }
}
</style>