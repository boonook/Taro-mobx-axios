import Taro from '@tarojs/taro';
import constant from '@config/constant';
import {getToken, setToken} from "@store/handleStorage";
export const host = HOST;
export const hostM = HOST_M;
/**
 * @param {object} options 请求配置
 * @param {string} options.url 请求路径
 * @param {'GET','POST','PUT','DELETE','PATCH'} options.method 请求方法
 * @param {boolean} token 是否需要携带token
 * @param {boolean} isMsg 成功之后是否需要提示
 * ***/
export function  request(options,token=true,isMsg=false) {
  Taro.showLoading({
    title: '加载中',
    icon: 'loading'
  })
  /**
   * url：api
   * method:请求方式
   * payload：参数
   * token:是否需要token
   *
   * **/
  const { url, method = 'GET', payload={}} = options;
  setToken('12345678');
  let config = {};
  let header = {};
  if(token===true){
    let token = getToken()
    config = { 'token':token }
  }
  if(method+''!=='GET' && method+''!=='DELETE'){
    header = {
      'content-type': 'application/json',
      ...config
    }
  }else{
    header = {
      ...config
    }
  }
  let baseUrl = `${host}`+url;
  return Taro.request({
    url:baseUrl,
    method:method,
    header: header,
    data:payload
  }).then( (res) => {
    Taro.hideLoading();
    let data = res.data||{}
    if(data.code+''===(constant.system.success+'')){
      Taro.showToast({
        title: '操作成功',
        icon: "success",
        duration:1000,
      });
      return data||{};
    }else{
        Taro.showToast({
          title: '系统错误',
          duration: 1000
        })
        return false
    }
  }).catch(err=>{
      Taro.showToast({
        title:'网络请求错误',
        duration:1000
      });
      return false
  })
}
