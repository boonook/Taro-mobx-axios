import Taro, { Component } from "@tarojs/taro-h5";
import 'taro-ui/dist/style/index.scss';
import { Provider } from "@tarojs/mobx-h5";

import counterStore from './store/counter';
import './app.less';
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
const store = {
  counterStore
};
class App extends Component {
  state = {
    __tabs: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "/pages/index/index",
        iconPath: require("././assets/tab-bar/home.png"),
        selectedIconPath: require("././assets/tab-bar/home-active.png"),
        text: "首页"
      }, {
        pagePath: "/pages/monitoringCenter/monitoringCenter",
        iconPath: require("././assets/tab-bar/jiankongzhongxin.png"),
        selectedIconPath: require("././assets/tab-bar/jiankongzhongxin-active.png"),
        text: "监控中心"
      }, {
        pagePath: "/pages/application/application",
        iconPath: require("././assets/tab-bar/yingyong.png"),
        selectedIconPath: require("././assets/tab-bar/yingyong-active.png"),
        text: "应用"
      }, {
        pagePath: "/pages/myCenter/myCenter",
        iconPath: require("././assets/tab-bar/user.png"),
        selectedIconPath: require("././assets/tab-bar/user-active.png"),
        text: "用户"
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    Taro._$app = this;
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
          
        <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
            path: '/pages/index/index',
            componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
            isIndex: true
          }, {
            path: '/pages/myCenter/myCenter',
            componentLoader: () => import( /* webpackChunkName: "myCenter_myCenter" */'./pages/myCenter/myCenter'),
            isIndex: false
          }, {
            path: '/pages/login/login',
            componentLoader: () => import( /* webpackChunkName: "login_login" */'./pages/login/login'),
            isIndex: false
          }, {
            path: '/pages/application/application',
            componentLoader: () => import( /* webpackChunkName: "application_application" */'./pages/application/application'),
            isIndex: false
          }, {
            path: '/pages/monitoringCenter/monitoringCenter',
            componentLoader: () => import( /* webpackChunkName: "monitoringCenter_monitoringCenter" */'./pages/monitoringCenter/monitoringCenter'),
            isIndex: false
          }, {
            path: '/pages/commonts/handleList/handleList',
            componentLoader: () => import( /* webpackChunkName: "commonts_handleList_handleList" */'./pages/commonts/handleList/handleList'),
            isIndex: false
          }, {
            path: '/pages/commonts/billNotes/billNotes',
            componentLoader: () => import( /* webpackChunkName: "commonts_billNotes_billNotes" */'./pages/commonts/billNotes/billNotes'),
            isIndex: false
          }, {
            path: '/pages/commonts/valueAddedBuy/valueAddedBuy',
            componentLoader: () => import( /* webpackChunkName: "commonts_valueAddedBuy_valueAddedBuy" */'./pages/commonts/valueAddedBuy/valueAddedBuy'),
            isIndex: false
          }, {
            path: '/pages/commonts/invoiceManage/invoiceManage',
            componentLoader: () => import( /* webpackChunkName: "commonts_invoiceManage_invoiceManage" */'./pages/commonts/invoiceManage/invoiceManage'),
            isIndex: false
          }, {
            path: '/pages/commonts/recharge/recharge',
            componentLoader: () => import( /* webpackChunkName: "commonts_recharge_recharge" */'./pages/commonts/recharge/recharge'),
            isIndex: false
          }, {
            path: '/pages/commonts/orderManage/orderManage',
            componentLoader: () => import( /* webpackChunkName: "commonts_orderManage_orderManage" */'./pages/commonts/orderManage/orderManage'),
            isIndex: false
          }, {
            path: '/pages/commonts/userInfo/userInfo',
            componentLoader: () => import( /* webpackChunkName: "commonts_userInfo_userInfo" */'./pages/commonts/userInfo/userInfo'),
            isIndex: false
          }, {
            path: '/pages/commonts/contactPersonManage/contactPersonManage',
            componentLoader: () => import( /* webpackChunkName: "commonts_contactPersonManage_contactPersonManage" */'./pages/commonts/contactPersonManage/contactPersonManage'),
            isIndex: false
          }, {
            path: '/pages/commonts/customizeIcon/customizeIcon',
            componentLoader: () => import( /* webpackChunkName: "commonts_customizeIcon_customizeIcon" */'./pages/commonts/customizeIcon/customizeIcon'),
            isIndex: false
          }, {
            path: '/pages/commonts/editPassword/editPassword',
            componentLoader: () => import( /* webpackChunkName: "commonts_editPassword_editPassword" */'./pages/commonts/editPassword/editPassword'),
            isIndex: false
          }, {
            path: '/pages/commonts/device/device',
            componentLoader: () => import( /* webpackChunkName: "commonts_device_device" */'./pages/commonts/device/device'),
            isIndex: false
          }, {
            path: '/pages/commonts/trigger/trigger',
            componentLoader: () => import( /* webpackChunkName: "commonts_trigger_trigger" */'./pages/commonts/trigger/trigger'),
            isIndex: false
          }, {
            path: '/pages/commonts/timedTask/timedTask',
            componentLoader: () => import( /* webpackChunkName: "commonts_timedTask_timedTask" */'./pages/commonts/timedTask/timedTask'),
            isIndex: false
          }, {
            path: '/pages/commonts/dataDownload/dataDownload',
            componentLoader: () => import( /* webpackChunkName: "commonts_dataDownload_dataDownload" */'./pages/commonts/dataDownload/dataDownload'),
            isIndex: false
          }, {
            path: '/pages/commonts/flowCard/flowCard',
            componentLoader: () => import( /* webpackChunkName: "commonts_flowCard_flowCard" */'./pages/commonts/flowCard/flowCard'),
            isIndex: false
          }, {
            path: '/pages/commonts/customize/customize',
            componentLoader: () => import( /* webpackChunkName: "commonts_customize_customize" */'./pages/commonts/customize/customize'),
            isIndex: false
          }, {
            path: '/pages/commonts/addDevice/addDevice',
            componentLoader: () => import( /* webpackChunkName: "commonts_addDevice_addDevice" */'./pages/commonts/addDevice/addDevice'),
            isIndex: false
          }, {
            path: '/pages/commonts/addTrigger/addTrigger',
            componentLoader: () => import( /* webpackChunkName: "commonts_addTrigger_addTrigger" */'./pages/commonts/addTrigger/addTrigger'),
            isIndex: false
          }, {
            path: '/pages/commonts/addTimedTask/addTimedTask',
            componentLoader: () => import( /* webpackChunkName: "commonts_addTimedTask_addTimedTask" */'./pages/commonts/addTimedTask/addTimedTask'),
            isIndex: false
          }, {
            path: '/pages/commonts/addDataDownload/addDataDownload',
            componentLoader: () => import( /* webpackChunkName: "commonts_addDataDownload_addDataDownload" */'./pages/commonts/addDataDownload/addDataDownload'),
            isIndex: false
          }, {
            path: '/pages/commonts/addContactPersonManage/addContactPersonManage',
            componentLoader: () => import( /* webpackChunkName: "commonts_addContactPersonManage_addContactPersonManage" */'./pages/commonts/addContactPersonManage/addContactPersonManage'),
            isIndex: false
          }, {
            path: '/pages/commonts/invoicedList/invoicedList',
            componentLoader: () => import( /* webpackChunkName: "commonts_invoicedList_invoicedList" */'./pages/commonts/invoicedList/invoicedList'),
            isIndex: false
          }, {
            path: '/pages/commonts/addInvoice/addInvoice',
            componentLoader: () => import( /* webpackChunkName: "commonts_addInvoice_addInvoice" */'./pages/commonts/addInvoice/addInvoice'),
            isIndex: false
          }, {
            path: '/pages/commonts/setting/setting',
            componentLoader: () => import( /* webpackChunkName: "commonts_setting_setting" */'./pages/commonts/setting/setting'),
            isIndex: false
          }, {
            path: '/pages/commonts/qRCode/qRCode',
            componentLoader: () => import( /* webpackChunkName: "commonts_qRCode_qRCode" */'./pages/commonts/qRCode/qRCode'),
            isIndex: false
          }, {
            path: '/pages/commonts/userDetail/userDetail',
            componentLoader: () => import( /* webpackChunkName: "commonts_userDetail_userDetail" */'./pages/commonts/userDetail/userDetail'),
            isIndex: false
          }, {
            path: '/pages/commonts/imageUpload/imageUpload',
            componentLoader: () => import( /* webpackChunkName: "commonts_imageUpload_imageUpload" */'./pages/commonts/imageUpload/imageUpload'),
            isIndex: false
          }, {
            path: '/pages/commonts/UploadUserImage/UploadUserImage',
            componentLoader: () => import( /* webpackChunkName: "commonts_UploadUserImage_UploadUserImage" */'./pages/commonts/UploadUserImage/UploadUserImage'),
            isIndex: false
          }, {
            path: '/pages/commonts/timedTaskDetail/timedTaskDetail',
            componentLoader: () => import( /* webpackChunkName: "commonts_timedTaskDetail_timedTaskDetail" */'./pages/commonts/timedTaskDetail/timedTaskDetail'),
            isIndex: false
          }, {
            path: '/pages/commonts/addSensor/addSensor',
            componentLoader: () => import( /* webpackChunkName: "commonts_addSensor_addSensor" */'./pages/commonts/addSensor/addSensor'),
            isIndex: false
          }]} tabBar={this.state.__tabs} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>
        </Provider>;
  }
  config = {
    pages: ["/pages/index/index", "/pages/myCenter/myCenter", "/pages/login/login", "/pages/application/application", "/pages/monitoringCenter/monitoringCenter", "/pages/commonts/handleList/handleList", "/pages/commonts/billNotes/billNotes", "/pages/commonts/valueAddedBuy/valueAddedBuy", "/pages/commonts/invoiceManage/invoiceManage", "/pages/commonts/recharge/recharge", "/pages/commonts/orderManage/orderManage", "/pages/commonts/userInfo/userInfo", "/pages/commonts/contactPersonManage/contactPersonManage", "/pages/commonts/customizeIcon/customizeIcon", "/pages/commonts/editPassword/editPassword", "/pages/commonts/device/device", "/pages/commonts/trigger/trigger", "/pages/commonts/timedTask/timedTask", "/pages/commonts/dataDownload/dataDownload", "/pages/commonts/flowCard/flowCard", "/pages/commonts/customize/customize", "/pages/commonts/addDevice/addDevice", "/pages/commonts/addTrigger/addTrigger", "/pages/commonts/addTimedTask/addTimedTask", "/pages/commonts/addDataDownload/addDataDownload", "/pages/commonts/addContactPersonManage/addContactPersonManage", "/pages/commonts/invoicedList/invoicedList", "/pages/commonts/addInvoice/addInvoice", "/pages/commonts/setting/setting", "/pages/commonts/qRCode/qRCode", "/pages/commonts/userDetail/userDetail", "/pages/commonts/imageUpload/imageUpload", "/pages/commonts/UploadUserImage/UploadUserImage", "/pages/commonts/timedTaskDetail/timedTaskDetail", "/pages/commonts/addSensor/addSensor" ///添加传感器
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f4f4f4',
      navigationBarTitleText: '武汉大海',
      navigationBarTextStyle: 'black'
    },
    tabBar: { color: "#666", selectedColor: "#b4282d", backgroundColor: "#fafafa", borderStyle: 'black', list: [{ pagePath: "/pages/index/index", iconPath: require("././assets/tab-bar/home.png"), selectedIconPath: require("././assets/tab-bar/home-active.png"), text: "首页" }, { pagePath: "/pages/monitoringCenter/monitoringCenter", iconPath: require("././assets/tab-bar/jiankongzhongxin.png"), selectedIconPath: require("././assets/tab-bar/jiankongzhongxin-active.png"), text: "监控中心" }, { pagePath: "/pages/application/application", iconPath: require("././assets/tab-bar/yingyong.png"), selectedIconPath: require("././assets/tab-bar/yingyong-active.png"), text: "应用" }, { pagePath: "/pages/myCenter/myCenter", iconPath: require("././assets/tab-bar/user.png"), selectedIconPath: require("././assets/tab-bar/user-active.png"), text: "用户" }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}
Nerv.render(<App />, document.getElementById('app'));