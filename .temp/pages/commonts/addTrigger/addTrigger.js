import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { setNavigationBarTitle as _setNavigationBarTitle } from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './addTrigger.less';
import { AtButton, AtIcon } from "taro-ui";
let AddTrigger = class AddTrigger extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
      show: false
    };
  }
  componentWillMount() {
    if (this.$router.params.type && this.$router.params.type == 'edit') {
      _setNavigationBarTitle({
        title: '修改触发器'
      });
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="addTrigger_content">
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        选择设备
                    </View>
                    <View className={'input_item_center'}>
                        <Text>请选择设备</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        传感器
                    </View>
                    <View className={'input_item_center'}>
                        <Text>请选择传感器</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        触发条件
                    </View>
                    <View className={'input_item_center'}>
                        <Text>请选择触发条件</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        报警方式
                    </View>
                    <View className={'input_item_center'}>
                        <Text>请选择报警方式</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        联系人
                    </View>
                    <View className={'input_item_center'}>
                        <Text>请选择联系人</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        转发
                    </View>
                    <View className={'input_item_center'}>
                        <Text>请选择联系人</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                </View>
                <View className={'btn_box'}>
                    <AtButton type="primary">保存</AtButton>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '添加触发器'
  };
  handleChange = () => {};
};
AddTrigger = __decorate([inject('counterStore'), observer], AddTrigger);
export default AddTrigger;