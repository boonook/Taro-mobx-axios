import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { makePhoneCall as _makePhoneCall } from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './userDetail.less';
import { AtIcon } from 'taro-ui';
let UserDetail = class UserDetail extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
    };
  }
  render() {
    return <View className="userDetail_content">
                <View className={'userImage_box'}>
                    <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                </View>
                <View className={'userImage_phone_box'}>
                    <AtIcon value="phone" size="30" color="#666" onClick={this.onCallPhone}></AtIcon>
                </View>
                <View className={'input_item_box'}>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            姓名
                        </View>
                        <View className={'input_item_center'}>
                           <Text>大地瓜</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            手机号
                        </View>
                        <View className={'input_item_center'}>
                            <Text>17798235471</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            邮箱
                        </View>
                        <View className={'input_item_center'}>
                            <Text>boonook@163.com</Text>
                        </View>
                    </View>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '联系人管理'
  };
  onCallPhone = () => {
    _makePhoneCall({
      phoneNumber: '17798235471' //仅为示例，并非真实的电话号码
    }).then(res => {
      if (res.errMsg == 'makePhoneCall:ok') {
        console.log('电话拨打成功');
      }
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
UserDetail = __decorate([inject('counterStore'), observer], UserDetail);
export default UserDetail;