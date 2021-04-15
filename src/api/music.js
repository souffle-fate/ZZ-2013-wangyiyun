// /cloudsearch
import { get } from "../utils/request";

// 搜索歌曲（不需要登录）
export const reqSearchMusic = (data) => get("/search", data);

// 热搜列表(详细)
export const reqSearchHotMusic = () => get("/search/hot/detail");

// 获取歌曲详情
export const reqMusicDetails = (data) => get("/song/detail", data);
// 必选参数 : ids: 音乐 id, 如 ids=347230
// 获取用户电台
export const reqInfoFollows = (data) => get("/user/follows", data);
//获取用户歌单
export const reqInfoplaylist = (data) => get("/user/playlist", data);
// 获取用户详情/user/detail
export const reqInfo = (data) => get("/user/detail", data);
// 获取歌单详情/playlist/detail/dynamic
export const reqDynamic = (data) => get("/playlist/detail/dynamic", data);

// 获取热门话题
export const reqHotTopic = () => get("/hot/topic");
// /hot/ciopt;

// 获取话题详情
export const reqTopicDetails = (data) => get("/topic/detail", data);
// /topic/detail?actid=111551188

// 获取话题详情热门动态
export const reqTDHot = (data) => get("/topic/detail/event/hot", data);
//  /topic/detail/event/hot

// 歌曲评论
export const reqMusicComment = (data) => get("/comment/music", data);
//必选参数 : id: 音乐 id    可选参数 : limit: 取出评论数量 , 默认为 20

//获取音乐 url
export const reqMusicUrl = (data) => get("/song/url", data);
// 必选参数 : id : 音乐 id

// 获取歌词
export const reqMusicLyrics = (data) => get("/lyric", data);
// /lyric  必选参数 : id: 音乐 id

// 喜欢音乐
export const reqLikeMusic = (data) => get("/like", data);

// 给评论点赞
export const GoodComment = (data) => get("/comment/like", data);
// 说明 : 调用此接口 , 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 )
// 必选参数 : id : 资源 id, 如歌曲 id,mv id
// cid : 评论 id
// t : 是否点赞 ,1 为点赞 ,0 为取消点赞
// tpye: 0: 歌曲
