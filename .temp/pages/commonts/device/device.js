import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { showLoading as _showLoading, hideLoading as _hideLoading, stopPullDownRefresh as _stopPullDownRefresh } from "@tarojs/taro-h5";
import { View, Text, Image, PullDownRefresh } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtActionSheet, AtActionSheetItem, AtIcon, AtSearchBar } from 'taro-ui';
import './device.less';
let Device = class Device extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false,
      searchShow: false
    };
  }
  //下拉时触发的函数
  onPullDownRefresh() {
    console.log('onPullDownRefresh...........');
    _showLoading({
      title: '刷新'
    });
    setTimeout(() => {
      // 接口请求完毕后隐藏两个loading , 标题和下拉区域
      _hideLoading();
      _stopPullDownRefresh();
    }, 1000);
  }
  onChange(value) {
    this.setState({
      value: value
    });
  }
  render() {
    const _temp = <View className="device_content">
                <View className={'search_box'}>
                    <View className={'search_box_left'}>

                    </View>
                    <View className={'search_box_center'} onClick={() => {
          this.onSearch();
        }}>
                        <Text>所有设备</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                    <View className={'search_box_right'}>
                        <AtIcon value="add" size="20" color="#426ff1" onClick={this.GoAddDevicePage}></AtIcon>
                    </View>
                </View>
                <AtActionSheet isOpened={this.state.show} cancelText="取消" title="设备状态" onCancel={this.handleCancel} onClose={this.handleClose}>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        所有设备
                    </AtActionSheetItem>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        在线设备
                    </AtActionSheetItem>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        离线设备
                    </AtActionSheetItem>
                </AtActionSheet>
                <View>
                    <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />
                </View>
                <View className={'list_item_box'}>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                离线
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                离线
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                离线
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                离线
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                离线
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                离线
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                离线
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                离线
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_footer'}>
                        暂无更多数据
                    </View>
                </View>
            </View>;

    return <PullDownRefresh onRefresh={this.onPullDownRefresh && this.onPullDownRefresh.bind(this)} ref={ref => {
      if (ref) this.pullDownRefreshRef = ref;
    }}>{_temp}</PullDownRefresh>;
  }
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '设备'
  };
  onHandleSure = () => {
    this.setState({
      show: false
    });
  };
  handleCancel = () => {
    this.setState({
      show: false
    });
  };
  handleClose = () => {
    this.setState({
      show: false
    });
  };
  onSearch = () => {
    this.setState({
      show: true
    });
  };
  GoAddDevicePage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/addDevice/addDevice'
    });
  };
  onReachBottom = () => {
    _showLoading({
      title: '加载更多'
    });
    setTimeout(() => {
      _hideLoading();
      _stopPullDownRefresh();
    }, 1000);
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
    this.pullDownRefreshRef && this.pullDownRefreshRef.bindEvent();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
    this.pullDownRefreshRef && this.pullDownRefreshRef.unbindEvent();
  }

};
Device = __decorate([inject('counterStore'), observer], Device);
export default Device;