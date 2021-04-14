import { get } from "../utils/request";

// 搜索建议（不需要登录）
export const reqSearchproposal = (data) => get("/search/suggest", data);

//获取歌曲详情（不需要登录）
export const reqXingqing = (id) => get("/song/detail",+id);