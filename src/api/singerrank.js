import { get } from "../utils/request";

// 歌手榜  
// type : 地区  1: 华语   2: 欧美   3: 韩国  4: 日本
export const reqSingerRank = (data) => get("/toplist/artist", data);