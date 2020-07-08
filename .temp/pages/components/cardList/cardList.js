import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './cardList.less';
let CardList = class CardList extends Taro.Component {
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
    return <View className="cardList_content">
                <View className={'list_footer'}>
                    暂无更多数据
                </View>
            </View>;
  }
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '购买卡片'
  };
};
CardList = __decorate([inject('counterStore'), observer], CardList);
export default CardList;