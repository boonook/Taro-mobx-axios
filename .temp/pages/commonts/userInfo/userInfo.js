import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtInput, AtButton } from 'taro-ui';
import './userInfo.less';
let UserInfo = class UserInfo extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
    };
  }
  render() {
    return <View className="userInfo_content">
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        公司名称
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name="value" type="text" placeholder="请输入公司名称" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        联系人
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name="value" type="text" placeholder="请输入联系人" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        手机
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name="value" type="phone" placeholder="请输入手机" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        邮箱
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name="value" type="text" placeholder="请输入邮箱" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        收货地址
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name="value" type="text" placeholder="请输入收货地址" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        街道
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name="value" type="text" placeholder="请输入街道" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        手机
                    </View>
                    <View className={'input_item_center'}>
                       <Text>17798235471</Text>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'code'} type="text" maxLength="4" placeholder="验证码" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                    <View className={'input_item_center'}>
                        <Text>获取验证码</Text>
                    </View>
                </View>
                <View className={'btn_box'}>
                    <AtButton type="primary">提交</AtButton>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '用户信息'
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
UserInfo = __decorate([inject('counterStore'), observer], UserInfo);
export default UserInfo;