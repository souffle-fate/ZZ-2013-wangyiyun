import { get} from "../utils/request";
/* 
推荐 mv
说明 : 调用此接口 , 可获取推荐 mv

接口地址 : /personalized/mv

调用例子 : /personalized/mv
*/
export const reqMvs = (data) => get("/personalized/mv", data);
/* 
获取播放列表接口
必选参数 : id: 视频 的 id
接口地址 : /video/url
调用例子 : /video/url?id=89ADDE33C0AAE8EC14B99F6750DB954D
*/
export const reqMvsXQ = (data) => get("/mv/url", data);

