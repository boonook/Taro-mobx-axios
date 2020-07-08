import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { setNavigationBarTitle as _setNavigationBarTitle } from "@tarojs/taro-h5";
import { Text, View, Picker } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './addTimedTask.less';
import { AtButton, AtIcon } from "taro-ui";
let AddTimedTask = class AddTimedTask extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
      show: false,
      selector: ['美国', '中国', '巴西', '日本'],
      selectorChecked: '美国'
    };
  }
  componentWillMount() {
    if (this.$router.params.type && this.$router.params.type == 'edit') {
      _setNavigationBarTitle({
        title: '修改定时任务'
      });
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="addTimedTask_content">
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        接收设备
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                            <View className="picker">
                                <Text>{this.state.selectorChecked}</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                            </View>
                        </Picker>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        接受传感器
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                            <View className="picker">
                                <Text>{this.state.selectorChecked}</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                            </View>
                        </Picker>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        链接协议
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                            <View className="picker">
                                <Text>{this.state.selectorChecked}</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                            </View>
                        </Picker>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        是否转发
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                            <View className="picker">
                                <Text>{this.state.selectorChecked}</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                            </View>
                        </Picker>
                    </View>
                </View>
                <View className={'input_item_2'}>
                    <View className={'input_item_left_2'}>
                        计划时间
                    </View>
                    <View className={'input_item_center_2'}>
                        <View className={'input_item_center_2_item'}>
                            <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                                <View className="picker">
                                    <Text>{this.state.selectorChecked}</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}<Text className={'input_item_center_2_right'}>周</Text>
                                </View>
                            </Picker>
                        </View>
                        <View className={'input_item_center_2_item'}>
                            <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                                <View className="picker">
                                    <Text>{this.state.selectorChecked}</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}<Text className={'input_item_center_2_right'}>时</Text>
                                </View>
                            </Picker>
                        </View>
                        <View className={'input_item_center_2_item'}>
                            <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                                <View className="picker">
                                    <Text>{this.state.selectorChecked}</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}<Text className={'input_item_center_2_right'}>分</Text>
                                </View>
                            </Picker>
                        </View>
                        <View className={'input_item_center_2_item'}>
                            <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                                <View className="picker">
                                    <Text>{this.state.selectorChecked}</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}<Text className={'input_item_center_2_right'}>秒</Text>
                                </View>
                            </Picker>
                        </View>
                        <View className={'input_item_center_2_item'}>
                            <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                                <View className="picker">
                                    <Text>{this.state.selectorChecked}</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}<Text className={'input_item_center_2_right'}>方式</Text>
                                </View>
                            </Picker>
                        </View>
                    </View>
                </View>
                <View className={'btn_box'}>
                    <AtButton type="primary">保存</AtButton>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '新建定时任务'
  };
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };
};
AddTimedTask = __decorate([inject('counterStore'), observer], AddTimedTask);
export default AddTimedTask;