import Taro, { getStorage as _getStorage, setStorage as _setStorage, getStorageSync as _getStorageSync, request as _request } from "@tarojs/taro-h5";
import counterStore from '../store/counter';
// import config from '../../config/index'
export const host = HOST;
export const hostM = HOST_M;

const store = {
  counterStore
};

function getStorage(key) {
  return _getStorage({ key }).then(res => res.data).catch(() => '');
}

export function ceshi(options) {
  console.log(options);
}

function updateStorage(data = {}) {
  return Promise.all([_setStorage({ key: 'token', data: data.token || '' }), _setStorage({ key: 'uid', data: data.uid || '' })]);
}

export function request(options) {
  /**
   * url：api
   * method:请求方式
   * payload：参数
   * token:是否需要token
   * **/

  const { url, method = 'GET', payload = {}, token = false } = options;
  console.log('host------------', host);
  console.log('hostM------------', hostM);
  // Taro.setStorageSync('token','12345678');
  //updateStorage({token:'12345678',uid:'boonook'});
  let config = {};
  let header = {};
  if (token === true) {
    let token = _getStorageSync('token');
    config = { 'token': token };
  }
  if (method + '' !== 'GET' && method + '' !== 'DELETE') {
    header = {
      'content-type': 'application/json',
      ...config
    };
  } else {
    header = {
      ...config
    };
  }
  let baseUrl = `${host}` + url;
  return _request({
    url: baseUrl,
    method: method,
    header: header
  }).then(res => {
    if (url === '/api/user/login') {
      ////将token存储到缓存中去，同时修改store中的值
    }
    if (url === '/api/user/userInfo') {
      ////将获取的用户信息存到缓存中去同时头该用户的登陆状态
    }
    return res.data;
  }).catch(err => {
    throw new Error(`网络请求错误`);
  });
}