import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './recharge.less';
import { AtButton, AtForm, AtInput } from "taro-ui";
let Recharge = class Recharge extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      numValue: 0,
      show: false
    };
  }
  render() {
    return <View className="recharge_content">
                <AtForm>
                    <View className={'formGroup_item'}>
                        <View className={'formGroup_item_left'}>
                            充值金额
                        </View>
                        <View className={'formGroup_item_right'}>
                            <AtInput name={'numValue'} border={false} type="number" placeholder="金额" value={this.state.numValue} onChange={this.handleChange.bind(this)} />
                        </View>
                        <View>
                            元
                        </View>
                    </View>
                    <View className={'formGroup_item'}>
                        <View className={'formGroup_item_left'}>
                            付款方式
                        </View>
                        <View className={'formGroup_item_right formGroup_item_right_2'}>
                            <Text>微信支付</Text><Image className="weixinPay" src={require('../../../assets/weixinPay.png')} />
                        </View>
                    </View>
                    <View className={'miaoshu_box'}>
                        <View>
                            *账户余额充值最低100起。
                        </View>
                        <View>
                            *流量叠加包价格2元（30M流量）。
                        </View>
                        <View>
                            *充值成功后将自动开启余额代扣功能。
                        </View>
                        <View>
                            *账户余额适用于账户下所有流量卡进行流量叠加扣费。
                        </View>
                        <View>
                            *当月单卡流量使用查过30M时会自动执行代扣功能进行扣费2元。
                        </View>
                        <View>
                            *本月流量（套餐流量或叠加流量）次月清零。
                        </View>
                    </View>
                    <View className={'btn_box'}>
                        <AtButton type="primary">充值</AtButton>
                    </View>
                </AtForm>
            </View>;
  }
  config = {
    navigationBarTitleText: '账户充值'
  };
  handleChange = value => {
    this.setState({
      numValue: value
    });
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

};
Recharge = __decorate([inject('counterStore'), observer], Recharge);
export default Recharge;