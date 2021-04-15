import { get} from "../utils/request";

export const reqSongList = (data) => get("/top/playlist/highquality", data);
