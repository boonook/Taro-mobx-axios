import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtIcon } from 'taro-ui';
import './sensor.less';
let Sensor = class Sensor extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
      show: false,
      value2: '',
      value3: 1,
      type: ''
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="sensor_content">
                <View className={'menu_box'}>
                    <View className={'icon_box'}><AtIcon value="bullet-list" size="30" color="#666" onClick={this.onShow}></AtIcon></View>
                    {this.state.show ? <View className={'menu_box_down'}>
                        <View className={'xiaosanjiao'}></View>
                        <View className={'menu_list_box'}>
                            <View className={'menu_list_box_item'} onClick={this.onAddNumerous}>批量追加</View>
                            <View className={'menu_list_box_item menu_list_box_item_2'} onClick={this.onGoAddSensorPage}>追加</View>
                            <View className={'menu_list_box_item'} onClick={this.onClose}>编辑</View>
                        </View>
                    </View> : null}
                </View>
                <View className={'list_item'}>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数量
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            前缀
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数值类型
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            小数位
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数据单位
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            选择图标
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                </View>
                <View className={'list_item'}>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数量
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            前缀
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数值类型
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            小数位
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数据单位
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            选择图标
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                </View>
                <View className={'list_item'}>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数量
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            前缀
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数值类型
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            小数位
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数据单位
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            选择图标
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                </View>
                <View className={'list_item'}>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数量
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            前缀
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数值类型
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            小数位
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            数据单位
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View className={'input_item'}>
                        <View className={'input_item_left'}>
                            选择图标
                        </View>
                        <View className={'input_item_center'}>
                            <Text>1</Text>
                        </View>
                    </View>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '传感器'
  };
  onShow = () => {
    if (this.state.show) {
      this.setState({
        show: false
      });
    } else {
      this.setState({
        show: true
      });
    }
  };
  onClose = () => {
    this.setState({
      show: false
    });
  };
  onGoAddSensorPage = () => {
    this.setState({
      show: false
    }, () => {
      Taro.navigateTo({
        url: '/pages/commonts/addSensor/addSensor'
      });
    });
  };
  onAddNumerous = () => {
    this.setState({
      show: false
    }, () => {
      Taro.navigateTo({
        url: '/pages/commonts/addSensor/addSensor'
      });
    });
  };
  handleChange = () => {};
};
Sensor = __decorate([inject('counterStore'), observer], Sensor);
export default Sensor;