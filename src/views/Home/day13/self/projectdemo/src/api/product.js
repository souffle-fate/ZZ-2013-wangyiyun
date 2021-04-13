import { get } from '../utils/request'


//获取商品列表
//进一步封装请求export const get = (url, params) => instance.get(url, { params: params })
export const reqPlist = (data) => get('/api/v1/products', data)

//请求商品详情
export const reqDetail = (id) => get('/api/v1/products/' + id)