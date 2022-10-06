import request from '@/utils/request'
/**
 * 获取品牌
 * @params {}
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'GET', { limit })
}
/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}
