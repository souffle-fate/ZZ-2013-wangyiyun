import axios from "axios";
import { serverURL } from "./common";
// import { Notify } from "vant";

const intance = axios.create({
  baseURL: serverURL,
  timeout: 5000,
  // headers: { "content-type": "application/x-www-form-urlencoded" },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

intance.interceptors.request.use(
  function(config) {
    // 如果token有值，就添加到header头里面
    // if (getToken()) {
    //   config.headers.authorization = "Bearer " + getToken();
    // }
    // config.headers.authorization = {
    //   "content-type": "application/x-www-form-urlencoded",
    // };
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

intance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // alert("error");
    return Promise.reject(error);
  }
);

// get请求
export const get = (url, params) => intance.get(url, { params: params });

// post请求
export const post = (url, data) => intance.post(url, data);
