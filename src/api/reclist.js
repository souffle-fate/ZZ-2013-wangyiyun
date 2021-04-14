import { get } from "../utils/request";

//获取推荐歌单
export const reqRecsongs = (data) => get("/personalized", data)
//可选参数 : limit: 取出数量 , 默认为 30

//获取歌单详情
export const reqListDetail = (data) => get("/playlist/detail", data)
// 必选参数 : id : 歌单 id    可选参数 : s : 歌单最近的 s 个收藏者,默认为8

//获取歌曲详情
export const reqSongDetail = (data) => get("/song/detail", data)