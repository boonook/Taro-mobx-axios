import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import 'taro-ui/dist/style/index.scss'
import Index from './pages/index'

import store from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/myCenter/myCenter',
      'pages/login/login',
      'pages/application/application',
      'pages/monitoringCenter/monitoringCenter'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '武汉大海',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/index/index",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "首页"
      },{
        pagePath: "pages/monitoringCenter/monitoringCenter",
        iconPath: "./assets/tab-bar/jiankongzhongxin.png",
        selectedIconPath: "./assets/tab-bar/jiankongzhongxin-active.png",
        text: "监控中心"
      },{
        pagePath: "pages/application/application",
        iconPath: "./assets/tab-bar/yingyong.png",
        selectedIconPath: "./assets/tab-bar/yingyong-active.png",
        text: "应用"
      },{
        pagePath: "pages/myCenter/myCenter",
        iconPath: "./assets/tab-bar/user.png",
        selectedIconPath: "./assets/tab-bar/user-active.png",
        text: "用户"
      }]
    },
    "subPackages": [
      {
        "root": "pages/homePages/",
        "pages": [
          'pages/device/device',
        ]
      },
      {
        "root": "pages/myCenterPage/",
        "pages": [
          'pages/orderList/orderList',
        ]
      }
    ]
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'));
