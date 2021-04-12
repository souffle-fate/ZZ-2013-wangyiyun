// /cloudsearch
import { get } from "../utils/request";

// 搜索歌曲（不需要登录）
export const reqSearchMusic = (data) => get("/search", data);

// 热搜列表(详细)
export const reqSearchHotMusic = () => get("/search/hot/detail");

// 获取歌曲详情
export const reqMusicDetails = (data) => get("/song/detail", data);
// 必选参数 : ids: 音乐 id, 如 ids=347230
