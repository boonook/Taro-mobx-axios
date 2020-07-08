import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtTabs, AtTabsPane } from 'taro-ui';
import DeviceInfo from '../../components/deviceInfo/deviceInfo';
import Sensor from '../../components/sensor/sensor';
import './addDevice.less';
let AddDevice = class AddDevice extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
      current: 0
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    const tabList = [{ title: '信息设备' }, { title: '传感器' }];
    return <View className="addDevice_content">
                <AtTabs tabDirection="horizontal" current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={this.state.current} index={0}>
                        <View>
                            <DeviceInfo></DeviceInfo>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={1}>
                        <View>
                            <Sensor></Sensor>
                        </View>
                    </AtTabsPane>
                </AtTabs>
            </View>;
  }
  config = {
    navigationBarTitleText: '创建设备'
  };
  handleClick = value => {
    this.setState({
      current: value
    });
  };
};
AddDevice = __decorate([inject('counterStore'), observer], AddDevice);
export default AddDevice;