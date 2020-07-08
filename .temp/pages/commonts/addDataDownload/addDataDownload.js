import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { Text, View, Picker } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './addDataDownload.less';
import { AtActionSheet, AtActionSheetItem, AtButton, AtIcon, AtInput } from "taro-ui";
let AddDataDownload = class AddDataDownload extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
      show: false,
      dateSel: '2018-04-22'
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="addDataDownload_content">
                <View className={'input_item'} onClick={this.onShowValue}>
                    <View className={'input_item_left'}>
                        选择设备
                    </View>
                    <View className={'input_item_center'}>
                        <Text>请选择设备</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        开始时间
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="date" onChange={this.onDateChange}>
                            <View className="picker">
                                {this.state.dateSel}
                            </View>
                        </Picker>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        结束时间
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="date" onChange={this.onDateChange}>
                            <View className="picker">
                                {this.state.dateSel}
                            </View>
                        </Picker>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        输入邮箱
                    </View>
                    <View className={'input_item_center'}>
                        <AtInput border={false} name={'value'} type="text" placeholder="请输入输入邮箱" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </View>
                </View>
                <AtActionSheet isOpened={this.state.show} cancelText="取消" title="选择设备" onCancel={this.onChangeValuehandleCancel} onClose={this.onChangeValuehandleClose}>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        MQTT传感器
                    </AtActionSheetItem>
                </AtActionSheet>
                <View className={'btn_box'}>
                    <AtButton type="primary">保存</AtButton>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '新建数据下载'
  };
  onHandleSure = () => {
    this.setState({
      show: false
    });
  };
  onChangeValuehandleCancel = () => {
    this.setState({
      show: false
    });
  };
  onChangeValuehandleClose = () => {
    this.setState({
      show: false
    });
  };
  onShowValue = () => {
    this.setState({
      show: true
    });
  };
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    });
  };
  handleChange = () => {};
};
AddDataDownload = __decorate([inject('counterStore'), observer], AddDataDownload);
export default AddDataDownload;