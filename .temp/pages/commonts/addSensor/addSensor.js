import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './addSensor.less';
import { AtButton, AtInput } from "taro-ui";
let AddSensor = class AddSensor extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value2: 1
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="addSensor_content">
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        数量
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value3'} type="number" placeholder="请输入数量" value={this.state.value2} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        前缀
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value2'} type="text" placeholder="请输入前缀" value={this.state.value2} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        数值类型
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value2'} type="text" placeholder="请输入数值类型" value={this.state.value2} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        小数位
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value2'} type="number" placeholder="请输入小数位" value={this.state.value2} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        数据单位
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value2'} type="text" placeholder="请输入设备名称" value={this.state.value2} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        选择图标
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value2'} type="text" placeholder="请输入设备名称" value={this.state.value2} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <View className={'btn_box'}>
                    <AtButton type="primary">保存</AtButton>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '添加传感器'
  };
  handleChange = () => {};
};
AddSensor = __decorate([inject('counterStore'), observer], AddSensor);
export default AddSensor;