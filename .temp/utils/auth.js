import Taro, { login as _login } from "@tarojs/taro-h5";
//授权用户 token
export async function getAuthToken() {
  //login
  let res = await _login();
  //获取token
  console.log('res------------------------', res);
}