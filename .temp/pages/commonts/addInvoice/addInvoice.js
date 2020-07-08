import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtInput, AtButton } from 'taro-ui';
import './addInvoice.less';
let AddInvoice = class AddInvoice extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
    };
  }
  render() {
    return <View className="addInvoice_content">
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        金额
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" type="digit" border={false} placeholder="请输入金额" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        抬头
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" type="text" border={false} placeholder="请输入发票抬头" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        纳税识别号
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" type="text" border={false} placeholder="请输入纳税识别号" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        开票地址和电话
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" type="text" border={false} placeholder="请输入纳税识别号" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        开户行帐号
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" type="text" border={false} placeholder="请输入开户行帐号" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        收件人
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" type="text" border={false} placeholder="请输入收件人" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        电话
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" border={false} type="phone" placeholder="请输入电话" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        电话
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" border={false} type="text" placeholder="请输入售票地址" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        街道
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" border={false} type="text" placeholder="请输入街道" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'btn_box'}>
                    <AtButton type="primary">确定</AtButton>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '新开发票'
  };
  handleChange = () => {};

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
AddInvoice = __decorate([inject('counterStore'), observer], AddInvoice);
export default AddInvoice;