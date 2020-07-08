import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtIcon, AtSearchBar } from 'taro-ui';
import './contactPersonManage.less';
let ContactPersonManage = class ContactPersonManage extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
    };
  }
  onChange(value) {
    this.setState({
      value: value
    });
  }
  render() {
    return <View className="contactPersonManage_content">
                <View className={'search_box'}>
                    <View className={'search_box_left'}>
                        
                    </View>
                    <View className={'search_box_center'}>
                        <Text>联系人</Text>
                    </View>
                    <View className={'search_box_right'}>
                        <AtIcon value="add" size="20" color="#426ff1" onClick={this.GoAddContactPersonManagePage}></AtIcon>
                    </View>
                </View>
                <View>
                    <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />
                </View>
               <View className={'list_content'}>
                   <View className={'list_item'} onClick={this.onGoUserDetailPage}>
                       <View className={'list_item_left'}>
                           <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                       </View>
                       <View className={'list_item_right'}>
                            大地瓜
                       </View>
                   </View>
                   <View className={'list_item'} onClick={this.onGoUserDetailPage}>
                       <View className={'list_item_left'}>
                           <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                       </View>
                       <View className={'list_item_right'}>
                           大地瓜
                       </View>
                   </View>
                   <View className={'list_item'} onClick={this.onGoUserDetailPage}>
                       <View className={'list_item_left'}>
                           <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                       </View>
                       <View className={'list_item_right'}>
                           大地瓜
                       </View>
                   </View>
                   <View className={'list_item'} onClick={this.onGoUserDetailPage}>
                       <View className={'list_item_left'}>
                           <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                       </View>
                       <View className={'list_item_right'}>
                           大地瓜
                       </View>
                   </View>
                   <View className={'list_item'} onClick={this.onGoUserDetailPage}>
                       <View className={'list_item_left'}>
                           <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                       </View>
                       <View className={'list_item_right'}>
                           大地瓜
                       </View>
                   </View>
                   <View className={'list_item'} onClick={this.onGoUserDetailPage}>
                       <View className={'list_item_left'}>
                           <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                       </View>
                       <View className={'list_item_right'}>
                           大地瓜
                       </View>
                   </View>
               </View>
                <View className={'list_footer'}>
                    暂无更多数据
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '联系人管理'
  };
  GoAddContactPersonManagePage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/addContactPersonManage/addContactPersonManage'
    });
  };
  onGoUserDetailPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/userDetail/userDetail'
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
ContactPersonManage = __decorate([inject('counterStore'), observer], ContactPersonManage);
export default ContactPersonManage;