import { get,post} from "../utils/request";

// 轮播图
export const reqBannerswip = (data) => get("/banner", data);
//私人音乐
export const reqPrivateFMs = (data) => post("/personal_fm", data);
//每日推荐
export const reqErc = (data) => post("/recommend/songs", data);
