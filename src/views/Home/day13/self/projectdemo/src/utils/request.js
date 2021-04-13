import axios from 'axios'
import { serverURL } from './common'
import { getToken } from './util'
import { Notify } from 'vant';

const instance = axios.create({
    baseURL: serverURL,
    timeout: 5000
})

instance.interceptors.request.use(
    function (config) {
        if (getToken()) {
            config.headers.authorization = "Bearer " + getToken();
        }
        return config;
    },
    function (error) {
        if (error && error.message.indexOf('401') > -1) {
            Notify({ type: 'warning', message: '权限不足，请先登录' });
            // location.href = '/#/login'
            location.href = '/'
        }
        return Promise.reject(error);
    }
);


instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export const get = (url, params) => instance.get(url, { params: params })
export const post = (url, data) => instance.post(url, data)