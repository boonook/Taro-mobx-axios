import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtListItem,AtDrawer,AtIcon } from "taro-ui"
import './myCenter.less'

type PageStateProps = {
  UserStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface MyCenter {
  props: PageStateProps;
}

@inject('UserStore')
@observer
class MyCenter extends Component {
  state = {
    value: '',
    show:false
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '用户'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goToSetting=()=>{
    ///前往设置界面
    Taro.navigateTo({
      url: '/pages/login/login'
    })
  };

  getUserInfo=()=>{
    ///个人信息
    this.setState({
      show:true
    })
  };

  onClose_AtDrawer=()=>{
    ///关闭抽屉
    this.setState({
      show:false
    })
  };
  ///订单管理
  GoOrderManagePage=()=>{
    Taro.navigateTo({
      url: '/pages/myCenterPage/pages/orderList/orderList'
    })
  };

  render () {
    return (
      <View className='myCenterContainer'>
        <View className={'userImage_box'}>
          <View className={'userImage_box_left'}>
            <Image onClick={()=>{this.getUserInfo()}} className="userImage"  src={require('../../assets/default_avatar.png')} />
          </View>
          <View className={'userImage_box_right'}>
             <View className={'userImage_box_right_item'}>
               boonook@163.com
             </View>
             <View className={'userImage_box_right_item'}>
               ID:200025232
             </View>
             <View className={'userImage_box_right_item'}>
               剩余短信:0条
             </View>
             <View className={'userImage_box_right_item'}>
              账户余额:0.00元
             </View>
          </View>
        </View>
        <View>
          <AtListItem className={'myCenter_item'} title='订单管理' onClick={()=>{this.GoOrderManagePage()}} arrow='right' />
          <AtListItem className={'myCenter_item'} title='主题' onClick={()=>{this.goToSetting()}} arrow='right'/>
          <AtListItem className={'myCenter_item'} title='设置' onClick={()=>{this.goToSetting()}} arrow='right'/>
        </View>
        <AtDrawer
          show={this.state.show}
          mask
          right={true}
          width={'100%'}
        >
         <View className={'AtDrawer_container'}>
           <View className={'close_box'}>
             <AtIcon onClick={()=>{this.onClose_AtDrawer()}} value='close' size='20' />
           </View>
           <View>
             <Image onClick={()=>{this.getUserInfo()}} className="userImage"  src={require('../../assets/default_avatar.png')} />
           </View>
           <AtListItem title='姓名' extraText='朱秀武' />
           <AtListItem title='邮箱' extraText='boonook@163.com' />
           <AtListItem title='性别' extraText='男' />
           <AtListItem title='地址' extraText='湖北省襄阳市宜城市' />
         </View>
        </AtDrawer>
      </View>
    )
  }
}

export default MyCenter  as ComponentType
