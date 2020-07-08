import { observable } from 'mobx';
import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
const counterStore = observable({
  counter: 0,
  token: _getStorageSync('token') || 'boonook',
  userInfo: _getStorageSync('userInfo') || {},
  uid: _getStorageSync('uid') || '',
  isLogin: _getStorageSync('isLogin') || false,
  counterStore() {
    this.counter++;
  },
  increment() {
    this.counter++;
  },
  decrement() {
    this.counter--;
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  },
  changeIsLogin(data) {
    _setStorageSync('isLogin', data.isLogin || '');
    _setStorageSync('userInfo', data.userInfo || {});
    _setStorageSync('uid', data.uid || '');
    let isLogin = _getStorageSync('isLogin');
    let userInfo = _getStorageSync('userInfo');
    let uid = _getStorageSync('uid');
    this.isLogin = isLogin;
    this.userInfo = userInfo;
    this.uid = uid;
  },
  changeToken(data) {
    console.log('###################################');
    _setStorageSync('token', data);
    let token = _getStorageSync('token');
    this.token = token || '';
  },
  loginOut() {
    let params = {
      token: '',
      userInfo: {},
      uid: '',
      isLogin: false
    };
    this.changeIsLogin(params);
    let param = {
      token: ''
    };
    this.changeToken(param);
    Taro.reLaunch({
      url: '/pages/login/login'
    });
  }
});
export default counterStore;