import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtInput, AtButton } from 'taro-ui';
import './addContactPersonManage.less';
let AddContactPersonManage = class AddContactPersonManage extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
    };
  }
  render() {
    return <View className="addContactPersonManage_content">
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        用户名
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" type="text" border={false} placeholder="请输入用户名" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        邮箱
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" type="text" border={false} placeholder="请输入邮箱" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_center'}>
                        <AtInput name={'value'} clear border={false} type="text" maxLength="6" placeholder="验证码" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                    <View className={'input_item_right'}>
                        <Text>获取验证码</Text>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        手机号
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name="value" type="phone" placeholder="请输入手机号" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value'} clear type="text" maxLength="6" placeholder="验证码" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                    <View className={'input_item_right'}>
                        <Text>获取验证吗</Text>
                    </View>
                </View>
                <View className={'btn_box'}>
                    <AtButton type="primary">保存</AtButton>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '新建联系人'
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
AddContactPersonManage = __decorate([inject('counterStore'), observer], AddContactPersonManage);
export default AddContactPersonManage;