import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtActionSheet, AtActionSheetItem, AtInputNumber, AtInput, AtForm, AtButton } from "taro-ui";
import './valueAddedBuy.less';
let ValueAddedBuy = class ValueAddedBuy extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '短信购买',
      show: false,
      numValue: 0
    };
  }
  render() {
    return <View className="valueAddedBuy_content">
                <View className={'formGroup_item'}>
                    <View className={'formGroup_item_left'}>
                        购买方式
                    </View>
                    <View className={'formGroup_item_right'} onClick={this.onchangeTypeValue}>
                        <Text>{this.state.value}</Text>
                    </View>
                </View>
                <AtForm>
                    <View className={'formGroup_item'}>
                        <View className={'formGroup_item_left'}>
                            购买条数
                        </View>
                        <View className={'formGroup_item_right'}>
                            <AtInputNumber type={'number'} min={0} step={1} value={this.state.numValue} onChange={this.handleChange.bind(this)} />
                        </View>
                        <View>
                            条
                        </View>
                    </View>
                    <View className={'formGroup_item'}>
                        <View className={'formGroup_item_left'}>
                            金额
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
                    <View className={'btn_box'}>
                        <AtButton type="primary">购买</AtButton>
                    </View>
                </AtForm>
                <AtActionSheet isOpened={this.state.show} cancelText="取消" title="请选着购买方式">
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure(1);
        }}>
                        短信购买
                    </AtActionSheetItem>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure(2);
        }}>
                        云组态购买
                    </AtActionSheetItem>
                </AtActionSheet>
            </View>;
  }
  config = {
    navigationBarTitleText: '增值购买'
  };
  onchangeTypeValue = () => {
    this.setState({
      show: true
    });
  };
  onHandleSure = value => {
    if (value === 1) {
      this.setState({
        value: '短信购买',
        show: false
      });
    } else {
      this.setState({
        value: '云组态购买',
        show: false
      });
    }
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
ValueAddedBuy = __decorate([inject('counterStore'), observer], ValueAddedBuy);
export default ValueAddedBuy;