import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import {View, Image,Text} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtMessage } from 'taro-ui';
import {getHomeBannerlist} from '@api/index'

import './index.less'

type PageStateProps = {
  UserStore: {
    counter: number,
    isLogin :Boolean,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('UserStore')
@observer
class Index extends Component {
    state = {
      value: '',
      imgwidth:0,
      imgheight:0,
      isLoaded:false
    }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {

  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    let that = this;
    setTimeout(()=>{
      Taro.getSystemInfo({
        success:function (r) {
          that.setState({
            imgwidth:r.screenWidth,
            imgheight:(r.screenWidth/1036)*584,
            isLoaded:true
          })
        }
      })
    },1000)
  }

  componentWillUnmount () { }

  componentDidShow () {

  }

  componentDidHide () { }

  ////监控中心
  GoMonitoringCenterPage=()=>{
    let params ={
      userName:'admin',
      userPwd:'admin'
    }
    getHomeBannerlist(params).then(res=>{
      console.log(res);
      debugger
    })
  };

  ///设备
  GoDevicePage=()=>{
    Taro.navigateTo({
      url: '/pages/homePages/pages/device'
    })
  };

  ///触发器
  GoTriggerPage=()=>{
    Taro.navigateTo({
      url: '/pages/commonts/pages/trigger/trigger'
    })
  };

  ///应用
  GoApplicationPage=()=>{
    Taro.switchTab({
      url: '/pages/application/application'
    });
  };

  ///定时任务
  GoTimedTaskPage=()=>{
    Taro.navigateTo({
      url: '/pages/commonts/pages/timedTask/timedTask'
    })
  };

  ///数据下载
  GoDataDownloadPage=()=>{
    Taro.navigateTo({
      url: '/pages/commonts/pages/dataDownload/dataDownload'
    })
  };

  ////流量卡
  GoFlowCardPage=()=>{
    Taro.navigateTo({
      url: '/pages/commonts/pages/flowCard/flowCard'
    })
  };

  ////自定义
  GoCustomizePage=()=>{
    Taro.navigateTo({
      url: '/pages/commonts/pages/customize/customize'
    })
  };

  render () {
    return (
      <View className='index'>
        {this.state.isLoaded?<View>
          <AtMessage />
          <View>
            <Image style={{width:this.state.imgwidth+'px',height:this.state.imgheight+'px'}} src={require('@assets/home_banner.jpg')} />
          </View>
          <View className={'item_group_box'}>
            <View className={'item_group'}>
              <View className={'item_group_item'} onClick={()=>{this.GoMonitoringCenterPage()}}>
                <Image  className="userImage"  src={require('@assets/tab-bar/jiankongzhongxin.png')} />
                <View>监控中心</View>
              </View>
              <View className={'item_group_item'} onClick={()=>{this.GoDevicePage()}}>
                <Image className="userImage"  src={require('@assets/shebei.png')} />
                <View>设备</View>
              </View>
              <View className={'item_group_item'} onClick={()=>{this.GoTriggerPage()}}>
                <Image className="userImage"  src={require('@assets/chufaqi.png')} />
                <View>触发器</View>
              </View>
              <View className={'item_group_item'} onClick={()=>{this.GoApplicationPage()}}>
                <Image className="userImage"  src={require('@assets/tab-bar/yingyong.png')} />
                <View>应用</View>
              </View>
            </View>
            <View className={'item_group'}>
              <View className={'item_group_item'} onClick={()=>{this.GoTimedTaskPage()}}>
                <Image className="userImage"  src={require('@assets/dingshirenwu.png')} />
                <View>定时任务</View>
              </View>
              <View className={'item_group_item'} onClick={()=>{this.GoDataDownloadPage()}}>
                <Image className="userImage"  src={require('@assets/download.png')} />
                <View>数据下载</View>
              </View>
              <View className={'item_group_item'} onClick={()=>{this.GoFlowCardPage()}}>
                <Image className="userImage"  src={require('@assets/liuliangCard.png')} />
                <View>流量卡</View>
              </View>
              <View className={'item_group_item'} onClick={()=>{this.GoCustomizePage()}}>
                <Image className="userImage"  src={require('@assets/zidingyi.png')} />
                <View>自定义</View>
              </View>
            </View>
          </View>
          <View>
            {this.state.value}
          </View>
          <View className={'menu_item_box'}>
            <View className={'menu_item_title'}>
              <Text className={'menu_item_title_content menu_item_title_left'}>最新公告</Text><Text className={'menu_item_title_right'}>更多</Text>
            </View>
            <View className={'menu_item_title_content_box'}>
              <View className={'menu_item_title_content_box_item'}>
                <View className={'menu_item_title_content_box_item_left'}>

                </View>
                <View className={'menu_item_title_content_box_item_right'}>
                  <View className={'menu_item_title_content_box_item_right_top'}>
                    标题
                  </View>
                  <View className={'menu_item_title_content_box_item_right_footer'}>
                    <Text className={'menu_item_title_content_box_item_right_footer_item'}>2020-04-06 00:00</Text><Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_right'}>监控中心</Text>
                  </View>
                </View>
              </View>
              <View className={'menu_item_title_content_box_item'}>
                <View className={'menu_item_title_content_box_item_left'}>

                </View>
                <View className={'menu_item_title_content_box_item_right'}>
                  <View className={'menu_item_title_content_box_item_right_top'}>
                    标题
                  </View>
                  <View className={'menu_item_title_content_box_item_right_footer'}>
                    <Text className={'menu_item_title_content_box_item_right_footer_item'}>2020-04-06 00:00</Text><Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_right'}>监控中心</Text>
                  </View>
                </View>
              </View>
              <View className={'menu_item_title_content_box_item'}>
                <View className={'menu_item_title_content_box_item_left'}>

                </View>
                <View className={'menu_item_title_content_box_item_right'}>
                  <View className={'menu_item_title_content_box_item_right_top'}>
                    标题
                  </View>
                  <View className={'menu_item_title_content_box_item_right_footer'}>
                    <Text className={'menu_item_title_content_box_item_right_footer_item'}>2020-04-06 00:00</Text><Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_right'}>监控中心</Text>
                  </View>
                </View>
              </View>
              <View className={'menu_item_title_content_box_item'}>
                <View className={'menu_item_title_content_box_item_left'}>

                </View>
                <View className={'menu_item_title_content_box_item_right'}>
                  <View className={'menu_item_title_content_box_item_right_top'}>
                    标题
                  </View>
                  <View className={'menu_item_title_content_box_item_right_footer'}>
                    <Text className={'menu_item_title_content_box_item_right_footer_item'}>2020-04-06 00:00</Text><Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_right'}>监控中心</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className={'menu_item_title'}>
              <Text className={'menu_item_title_content menu_item_title_left'}>最新公告</Text><Text className={'menu_item_title_right'}>更多</Text>
            </View>
          </View>
        </View>:<View className={'isloadedBox'}>
          <View className={'index_top_bg'}>

          </View>
          <View className={'item_group_box'}>
            <View className={'item_group'}>
              <View className={'item_group_item'}>
                <View className="userImage">

                </View>
                <View className={'userImageTitle'}></View>
              </View>
              <View className={'item_group_item'}>
                <View className="userImage">

                </View>
                <View className={'userImageTitle'}></View>
              </View>
              <View className={'item_group_item'}>
                <View className="userImage">

                </View>
                <View className={'userImageTitle'}></View>
              </View>
              <View className={'item_group_item'}>
                <View className="userImage">

                </View>
                <View className={'userImageTitle'}></View>
              </View>
            </View>
            <View className={'item_group'}>
              <View className={'item_group_item'}>
                <View className="userImage">

                </View>
                <View className={'userImageTitle'}></View>
              </View>
              <View className={'item_group_item'}>
                <View className="userImage">

                </View>
                <View className={'userImageTitle'}></View>
              </View>
              <View className={'item_group_item'}>
                <View className="userImage">

                </View>
                <View className={'userImageTitle'}></View>
              </View>
              <View className={'item_group_item'}>
                <View className="userImage">

                </View>
                <View className={'userImageTitle'}></View>
              </View>
            </View>
          </View>
          <View>
            {this.state.value}
          </View>
          <View className={'menu_item_box'}>
            <View className={'menu_item_title'}>
              <Text className={'menu_item_title_content menu_item_title_left'}></Text><Text className={'menu_item_title_right'}></Text>
            </View>
            <View className={'menu_item_title_content_box'}>
              <View className={'menu_item_title_content_box_item'}>
                <View className={'menu_item_title_content_box_item_left'}>

                </View>
                <View className={'menu_item_title_content_box_item_right'}>
                  <View className={'menu_item_title_content_box_item_right_top'}>

                  </View>
                  <View className={'menu_item_title_content_box_item_right_footer'}>
                    <Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_left'}></Text><Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_right'}></Text>
                  </View>
                </View>
              </View>
              <View className={'menu_item_title_content_box_item'}>
                <View className={'menu_item_title_content_box_item_left'}>

                </View>
                <View className={'menu_item_title_content_box_item_right'}>
                  <View className={'menu_item_title_content_box_item_right_top'}>

                  </View>
                  <View className={'menu_item_title_content_box_item_right_footer'}>
                    <Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_left'}></Text><Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_right'}></Text>
                  </View>
                </View>
              </View>
              <View className={'menu_item_title_content_box_item'}>
                <View className={'menu_item_title_content_box_item_left'}>

                </View>
                <View className={'menu_item_title_content_box_item_right'}>
                  <View className={'menu_item_title_content_box_item_right_top'}>

                  </View>
                  <View className={'menu_item_title_content_box_item_right_footer'}>
                    <Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_left'}></Text><Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_right'}></Text>
                  </View>
                </View>
              </View>
              <View className={'menu_item_title_content_box_item'}>
                <View className={'menu_item_title_content_box_item_left'}>

                </View>
                <View className={'menu_item_title_content_box_item_right'}>
                  <View className={'menu_item_title_content_box_item_right_top'}>

                  </View>
                  <View className={'menu_item_title_content_box_item_right_footer'}>
                    <Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_left'}></Text><Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_right'}></Text>
                  </View>
                </View>
              </View>
              <View className={'menu_item_title_content_box_item'}>
                <View className={'menu_item_title_content_box_item_left'}>

                </View>
                <View className={'menu_item_title_content_box_item_right'}>
                  <View className={'menu_item_title_content_box_item_right_top'}>

                  </View>
                  <View className={'menu_item_title_content_box_item_right_footer'}>
                    <Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_left'}></Text><Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_right'}></Text>
                  </View>
                </View>
              </View>
              <View className={'menu_item_title_content_box_item'}>
                <View className={'menu_item_title_content_box_item_left'}>

                </View>
                <View className={'menu_item_title_content_box_item_right'}>
                  <View className={'menu_item_title_content_box_item_right_top'}>

                  </View>
                  <View className={'menu_item_title_content_box_item_right_footer'}>
                    <Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_left'}></Text><Text className={'menu_item_title_content_box_item_right_footer_item menu_item_title_content_box_item_right_footer_item_right'}></Text>
                  </View>
                </View>
              </View>
            </View>
            <View className={'menu_item_title'}>
              <Text className={'menu_item_title_content menu_item_title_left'}>最新公告</Text><Text className={'menu_item_title_right'}>更多</Text>
            </View>
          </View>
        </View>}
      </View>
    )
  }
}

export default Index  as ComponentType
