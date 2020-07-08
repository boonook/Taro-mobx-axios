import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton,AtMessage,AtInput } from 'taro-ui';
import './login.less'

type PageStateProps = {
  UserStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function,
    changeIsLogin:Function
  }
}

interface Login {
  props: PageStateProps;
}

@inject('UserStore')
@observer
class Login extends Component {
  state = {
    value: '登陆界面',
    userName: '',
    userPwd:'',
    loading:false
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '武汉大海科技'
  }

  componentWillMount () { }

  componentWillReact () {

  }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChange=(value)=>{
    this.setState({
      userName:value
    })
  }
  UserPwdChange=(value)=>{
    this.setState({
      userPwd:value
    })
  }

  onLogin=()=>{
    let {userName,userPwd} = this.state;
    if(userName+''!==''&&userPwd+''!==''){
      if(userPwd.length<6){
        Taro.atMessage({
          'message': '密码长度不能小于6位！',
          'type': 'error',
        })
      }else{
        let params={
          isLogin:true,
          userInfo:{userName,userPwd},
          uid:userName,
        };
        // console.log(params);
        this.props.UserStore.changeIsLogin(params);
        Taro.switchTab({
          url: '/pages/index/index'
        })
      }
    }else{
      Taro.atMessage({
        'message': '用户名或密码不能为空！',
        'type': 'error',
      })
    }
  }

  tobegin=(res)=>{
    console.log(res)
  }

  render () {
    return (
      <View className='container'>
        <AtMessage />
        <View className='title_box'>
          {this.state.value}
        </View>
        <View>
          <AtInput
              className={'input_item'}
              name='userName'
              title=''
              type='text'
              placeholder='用户名'
              value={this.state.userName}
              onChange={this.handleChange.bind(this)}
          />
        </View>
       <View>
         <AtInput
             className={'input_item'}
             name='userPwd'
             title=''
             type='text'
             placeholder='密码'
             value={this.state.userPwd}
             onChange={this.UserPwdChange.bind(this)}
         />
       </View>
      <View className={'btn_box'}>
        <AtButton className='submit_btn' formType='submit' onClick={()=>{this.onLogin()}} type='primary'>登陆</AtButton>
      </View>
        {/*<AtButton className='submit_btn' formType='submit' onClick={()=>{this.weixinLofin()}} type='primary'>微信快捷登录</AtButton>*/}
      </View>
    )
  }
}

export default Login  as ComponentType
