// /cloudsearch
import { get } from "../utils/request";

// 搜索歌曲（不需要登录）
export const reqSearchMusic = (data) => get("/search", data);

// 热搜列表(详细)
export const reqSearchHotMusic = () => get("/search/hot/detail");

// 获取歌曲详情
export const reqMusicDetails = (data) => get("/song/detail", data);
// 必选参数 : ids: 音乐 id, 如 ids=347230

// 歌曲评论
export const reqMusicComment = (data) => get("/comment/music", data);
//必选参数 : id: 音乐 id    可选参数 : limit: 取出评论数量 , 默认为 20

//获取音乐 url
export const reqMusicUrl = (data) => get("/song/url", data);
// 必选参数 : id : 音乐 id

// 发送/删除评论

// t:1 发送, 2 回复  id:对应资源 id   content :要发送的内容  commentId :回复的评论id (回复评论时必填)
// /comment
