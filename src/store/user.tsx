import { observable } from 'mobx'
import Taro from "@tarojs/taro";
import {getIsLogin,getToken,getUserInfo,getUid,setUid,setIsLogin,setToken,setUserInfo} from './handleStorage'
const UserStore = observable({
  counter: 0,
  token : getToken()||'',
  userInfo : getUserInfo()||{},
  uid : getUid()||'',
  isLogin :getIsLogin()||false,
  changeIsLogin(data) {
    setIsLogin(data.isLogin||'');
    setUserInfo(data.userInfo||'');
    setUid(data.uid||'');
    let isLogin = Taro.getStorageSync('isLogin');
    let userInfo = Taro.getStorageSync('userInfo');
    let uid = Taro.getStorageSync('uid');
    this.isLogin = isLogin;
    this.userInfo = userInfo;
    this.uid = uid;
  },
  changeToken(data) {
    console.log('###################################');
    setToken(data)
    let token = getToken();
    this.token = token||'';
  },
  loginOut(){
    let params = {
      token : '',
      userInfo : {},
      uid : '',
      isLogin :false,
    };
    this.changeIsLogin(params);
    let param = {
      token : '',
    }
    this.changeToken(param)
    Taro.reLaunch({
      url: '/pages/login/login'
    });
  }
})
export default UserStore
