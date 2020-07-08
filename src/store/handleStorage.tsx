import Taro from "@tarojs/taro";

export const getIsLogin =()=>{
  return Taro.getStorageSync('isLogin')
}

/**
 * @param {boolean} data 登陆状态
 * **/
export const setIsLogin =(data)=>{
  Taro.setStorageSync( 'isLogin', data || '' );
}

export const getToken =()=>{
  return Taro.getStorageSync('token')
}

export const setToken =(data)=>{
  Taro.setStorageSync('token',data.token||'');
}

export const getUserInfo =()=>{
  return Taro.getStorageSync('userInfo')
}

export const setUserInfo =(data)=>{
  Taro.setStorageSync('userInfo', data.userInfo || '' );
}

export const getUid =()=>{
  return Taro.getStorageSync('uid')
}

export const setUid =(data)=>{
  Taro.setStorageSync( 'uid', data.uid || '' );
}
