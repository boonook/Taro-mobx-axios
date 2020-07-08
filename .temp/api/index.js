import { request } from "../utils/request";

export const getHomeBannerlist = params => {
  /**
   * api
   * params
   * 是否需要token
   * 是否开启返回提示
   * **/
  return new Promise((resolve, reject) => {
    request({
      url: '/api/v1/topics',
      payload: {},
      method: 'GET',
      token: true
    }).then(res => {
      resolve(res);
    }).catch(error => {
      resolve(error);
    });
  });
};