import { get, post } from '../utils/request'

//加入购物车
export const reqAddcart = (data) => post('/api/v1/shop_carts', data)

//请求购物车列表
export const reqCart = () => get('/api/v1/shop_carts')