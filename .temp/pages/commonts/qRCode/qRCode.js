import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { Image, View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './qRCode.less';
let QRCode = class QRCode extends Taro.Component {
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
    return <View className="qRCode_content">
                <Image className="userImage" src={require('../../../assets/erweima.jpg')} />
            </View>;
  }
  config = {
    navigationBarTitleText: '二维码'
  };
};
QRCode = __decorate([inject('counterStore'), observer], QRCode);
export default QRCode;