import { request } from '@utils/request'

export const getHomeBannerlist = params => {
  /**
   * api
   * params
   * 是否需要token
   * 是否开启返回提示
   * **/
  return request({
        url:'/api/admin/auth/login',
        payload:JSON.stringify(params),
        method:'POST'
      },false,true)
}
