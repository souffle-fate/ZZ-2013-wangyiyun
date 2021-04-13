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


