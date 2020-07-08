import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtInput, AtButton } from 'taro-ui';
import './editPassword.less';
let EditPassword = class EditPassword extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
    };
  }
  render() {
    return <View className="editPassword_content">
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        原始密码
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" border={false} type="password" placeholder="请输入原始密码" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        新密码
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" border={false} type="password" placeholder="请输入新密码" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        再次输入
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput name="value" border={false} type="password" placeholder="请输入再次输入" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        手机号
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput editable={false} border={false} name="value" type="phone" placeholder="请输入手机号" value={'17798235471'} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value'} clear type="password" maxLength="6" placeholder="请输入验证码" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                    <View className={'input_item_right'}>
                        <Text>获取验证吗</Text>
                    </View>
                </View>
                <View className={'btn_box'}>
                    <AtButton type="primary">确定</AtButton>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '修改密码'
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
EditPassword = __decorate([inject('counterStore'), observer], EditPassword);
export default EditPassword;