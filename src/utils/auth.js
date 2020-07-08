import Taro from '@tarojs/taro'
//授权用户 token
export async function  getAuthToken() {
  //login
  let res = await Taro.login();
  //获取token
  console.log('res------------------------',res);
}
