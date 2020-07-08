import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { Picker, View, Text, Image } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
// import address from '../../../utils/city.js'
import './buyCard.less';
import { AtButton, AtInput } from "taro-ui";
let BuyCard = class BuyCard extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
      show: false,
      selector: [['湖北省', '湖南省', '北京市'], ['武汉市', '十堰市', '襄阳市'], ['武昌区', 'r', 'f'], ['武昌火车站', 'd', 't']],
      selectorChecked: ['湖北省', '武汉市', '武昌区', '武昌火车站'],
      time: ['一年', '两年', '三年', '四年'],
      timeChecked: '一年',
      selectorChecked_2: '湖北省-武汉市-武昌区-武昌火车站',
      typeWay: ['包邮', '货到付款'],
      typeWayChecked: '包邮'
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
    return <View className="buyCard_content">
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        收件人
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value'} type="text" placeholder="请输入邮箱" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        联系电话
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value'} type="phone" placeholder="请输入联系电话" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        所在地区
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="multiSelector" range={this.state.selector} value={0} onChange={this.onChange}>
                            <View className="picker">
                                {this.state.selectorChecked_2}
                            </View>
                        </Picker>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        街道
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value'} type="phone" placeholder="请输入街道" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        公司名称
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value'} type="phone" placeholder="请输入公司名称" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        购买年限
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="selector" range={this.state.time} onChange={this.onChangeTime}>
                            <View className="picker">
                               {this.state.timeChecked}
                            </View>
                        </Picker>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        数量
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value'} type="number" placeholder="请输入数量" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_center'}>
                        <Text>单卡一年24元，到期后选择续费或者更换新卡</Text>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_item'}>
                        卡费:0元
                    </View>
                    <View className={'input_item_item input_item_item_2'}>
                        邮费:10元
                    </View>
                    <View className={'input_item_item input_item_item_3'}>
                        <Picker mode="selector" range={this.state.typeWay} onChange={this.onChangeTypeWay}>
                            <View className="picker">
                                {this.state.typeWayChecked}
                            </View>
                        </Picker>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        支付方式
                    </View>
                    <View className={'input_item_center input_item_center_2'}>
                        <Text>微信支付</Text><Image className="weixinPay" src={require('../../../assets/weixinPay.png')} />
                    </View>
                </View>
                <View className={'btn_box'}>
                    <AtButton type="primary">保存</AtButton>
                </View>
            </View>;
  }
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '购买卡片'
  };
  handleChange = () => {};
  onChange = e => {
    this.setState({
      selectorChecked: [this.state.selector[0][e.detail.value[0]], this.state.selector[1][e.detail.value[1]], this.state.selector[2][e.detail.value[2]], this.state.selector[3][e.detail.value[3]]],
      selectorChecked_2: this.state.selector[0][e.detail.value[0]] + '-' + this.state.selector[1][e.detail.value[1]] + '-' + this.state.selector[2][e.detail.value[2]] + '-' + this.state.selector[3][e.detail.value[3]]
    });
  };
  onChangeTime = e => {
    this.setState({
      timeChecked: this.state.time[e.detail.value]
    });
  };
  onChangeTypeWay = e => {
    this.setState({
      typeWayChecked: this.state.typeWay[e.detail.value]
    });
  };
};
BuyCard = __decorate([inject('counterStore'), observer], BuyCard);
export default BuyCard;