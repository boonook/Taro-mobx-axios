import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './setting.less';
import { AtButton, AtListItem, AtActionSheet, AtActionSheetItem } from "taro-ui";
let setting = class setting extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
      show: false
    };
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="index">
        <View>
          <AtListItem title="关于我们" arrow="right" />
          <AtListItem title="服务协议" arrow="right" />
        </View>
        <View className={'btn_box'}>
          <AtButton className="submit_btn" type="secondary" onClick={() => {
          this.onLoginOut();
        }}>退出登录</AtButton>
        </View>
        <AtActionSheet isOpened={this.state.show} cancelText="取消" title="确定要退出登录吗？">
          <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
            确定
          </AtActionSheetItem>
        </AtActionSheet>
      </View>;
  }
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '设置'
  };
  onLoginOut = () => {
    ////退出登录
    this.setState({
      show: true
    });
  };
  onHandleSure = () => {
    this.setState({
      show: false
    }, () => {
      this.props.counterStore.loginOut();
    });
  };
};
setting = __decorate([inject('counterStore'), observer], setting);
export default setting;